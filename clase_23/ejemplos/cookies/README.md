# Empezando a usar Cookies

- Instalacion

		$ npm i cookie-parser --save

- Hay que requerirlo e incluirlo en la aplicación en la que se lo va a utilizar (Es un middleware que se requiere a nivel de aplicación)

		const express = require('express')
		const cookieParser = require('cookie-parser')
		
		const app = express()
		
		app.use(cookieParser())
