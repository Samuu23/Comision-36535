# Empezando a usar fileStore

- Instalacion

		$ npm i session-file-store --save

- Implementacion

		const express = require('express')
		const cookieParser = require('cookie-parser')
		const session = require('express-session')

		// Persistencia por fileStore
		const FileStore = require('session-file-store')(session)
