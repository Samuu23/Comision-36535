# Node Built-in profiler

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

## auth-bloq

- La ruta /auth-bloq realiza el login del usuario.
- En este caso, el proceso por el cual se realizar el login es sincrónico, por lo tanto es un proceso bloqueante.

		app.get("/auth-bloq", (req, res) => {
			let username = req.query.username || "";
			const password = req.query.password || "";

			username = username.replace(/[!@#$%^&*]/g, "");

			if (!username || !password || !users[username]) {
				process.exit(1)
				// return res.sendStatus(400);
			}

			const { salt, hash } = users[username];
			const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

			if (crypto.timingSafeEqual(hash, encryptHash)) {
				res.sendStatus(200);
			} else {
				process.exit(1)
				// res.sendStatus(401);
			}
		});

## auht-nobloq

- La ruta /auth-bloq realiza el login del usuario.
- En este caso, el proceso por el cual se realizar el login es sincrónico, por lo tanto es un proceso bloqueante.

		app.get("/auth-nobloq", (req, res) => {
			let username = req.query.username || "";
			const password = req.query.password || "";

			username = username.replace(/[!@#$%^&*]/g, "");

			if (!username || !password || !users[username]) {
				process.exit(1)
				// return res.sendStatus(400);
			}

			const { salt, hash } = users[username];
			const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

			if (crypto.timingSafeEqual(hash, encryptHash)) {
				res.sendStatus(200);
			} else {
				process.exit(1)
				// res.sendStatus(401);
			}
		});


- Una vez configurado el servidor y las rutas, vamos a usar nuevamente Artillery para realizar los test de carga y obtener la información necesaria. 
- Finalmente, ya estamos listos para poder prender el servidor, y lo vamos a hacer en modo profiler.
- Para eso usamos el siguiente comando: 

		$ node --prof server.js

Ahora abrimos otra terminal, en la carpeta del proyecto, y procedemos con los siguientes pasos.

1. Con el siguiente comando, creamos un nuevo usuario:

		$ curl -X GET "http://localhost:8080/newUser?username=marian&password=qwerty123"

2. Ahora, puedo usar el test de carga. Para eso, utilizo el siguiente comando:

		$ artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?username=marian&password=qwerty123" > result_bloq.txt

Va a hacer un test de 10 request con 50 usuarios a la url especificada. Y el resultado lo va a guardar en el archivo result_bloq.txt. Para ver este archivo debo salir del servidor (sino no nos deja abrirlo).

Con lo hecho, se crea también un archivo llamado Isolate que está encriptado. Primero, lo debemos renombramos como bloq-v8.log y antes de decodificar el archivo, hacemos lo mismo pero cuando la ruta es la no bloqueante.

1. Creamos nuevamente un nuevo usuario igual que antes.

		$ curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

2. Luego, el comando es similar pero la url es hacia la ruta no bloqueante de login

		$ artillery quick --count 10 -n 50 "http://localhost:8080/auth-nobloq?username=marian&password=qwerty123" > result_nobloq.txt

Pasamos ahora a decodificar los archivos log que se crearon.

- Para eso, utilizamos el siguiente comando para cada uno:

		$ node --prof-process bloq-v8.log > result_prof-bloq.log
		$ node --prof-process nobloq-v8.log > result_prof-nobloq.log

- Se crean entonces los archivos result_prof-bloq.txt y result_prof-nobloq.txt con la información de los primeros archivos decodificada.
