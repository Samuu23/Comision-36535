
## Node Built-in profiler

- La mayoría de las veces, es más fácil usar el profiler que ya tiene Node, en lugar de usar otra herramienta para esto.
- Para empezar a usar este profiler, primero creamos una pequeña aplicación en Express con un servidor y algunas rutas.
- Configuramos el archivo server.js como sigue:

		const express = require("express");
		const crypto = require("crypto");

		const app = express();

		const users = {}

		app.use(express.static('public'))

		const PORT = parseInt(process.argv[2]) || 8080;
		const server = app.listen(PORT, () => {
			console.log(`Servidor escuchando en el puerto ${PORT}`);
		});
		server.on("error", (error) => console.log(`Error en servidor: ${error}`));

- Con la ruta /getUsers se muestra el listado de usuarios registrados.
- Con la ruta /newUser se registra un nuevo usuario.
- Se utiliza el módulo crypto para encriptar las contraseñas.


	app.get("/getUsers", (req, res) => {
		res.json({ users })
	})

	app.get("/newUser", (req, res) => {
		let username = req.query.username || "";
		const password = req.query.password || "";

		username = username.replace(/[!@#$%^&*]/g, "");

		if (!username || !password || users[username]) {
			return res.sendStatus(400);
		}

		const salt = crypto.randomBytes(128).toString("base64");
		const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

		users[username] = { salt, hash };

		res.sendStatus(200);
	});