# Usando variables de entorno

		// config.js
		module.exports = {
			NODE_ENV: process.env.NODE_ENV || 'development',
			HOST: process.env.HOST || '127.0.0.1',
			PORT: process.env.PORT || 3000
		}

- Luego, en el archivo server.js requerimos el archivo de config.
- Creamos un servidor con Express usando las variable de entorno definidas.

		const config = require('./config.js')
		const express = require('express')
		const app = express

		console.log(`NODE_ENV: ${config.NODE_ENV}`)

		app.get('/', (req, res) => {
			res.send('Hello World')
		})
	
		app.listen(config.PORT, config.HOST, () => console.log(`App listening on http://${config.HOST}:${config.PORT}`))

- Ejecutamos como:

		$ node server.js

- En este ejemplo, llamamos a una operación GET que enviará el mensaje “Hello world” en nuestro navegador. Las variables HOST y PORT están definidas en nuestro código. Además ejecutará la aplicación en la dirección 127.0.0.1:3000
- El acceso a las variables de entorno en Node es compatible desde que inicia nuestra aplicación. 
- Cuando el proceso Node se inicia, proporciona automáticamente el acceso a todas las variables de entorno existentes mediante el objeto process.env. En el archivo config.js, la variable HOST estará definida por la variable process.env.HOST, si no se encuentra definida esta variable, será reemplazada por el valor 127.0.0.1. (puesto por default).
- Hasta este punto nuestra aplicación se inicializará en función de las variables de entorno que se definan.
