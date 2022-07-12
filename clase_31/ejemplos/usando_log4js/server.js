import express from 'express'
import log4js from 'log'

// Configuracion Log4js
log4js.configure({

	// Definimos 3 apéndices:
	// miLoggerConsole usa el apéndice stdout escribe en la salida estándar (consola). Los otros 2, usan el archivo adjunto. miLoggerFile escribe en el archivo info.log y miLoggerFile2 en el archivo info2.log.
	appenders: {
		miLoggerConsole: { type: 'console' },
		miLoggerFile: { type: 'file', filename: 'info.log' },
		miLoggerFile2: { type: 'file', filename: 'info2.log' }
	},

	// Definimos 5 categorías con distintos niveles:
	// Las categorías default y consola utilizan el apéndice del tipo consola.
	// Las categorías archivo y archivo2 utilizan los apéndices de tipo file.
	// La categoría todos utiliza apéndice de tipo consola y tipo file.
	categories: {
		default: { appenders: ['miLoggerConsole'], level: 'trace' },
		consola: { appenders: ['miLoggerConsole'], level: 'debug' },
		archivo: { appenders: ["miLoggerFile"], level: 'warn' },
		archivo2: { appenders: ['miLoggerFile2'], level: 'info' },
		todos: { appenders:  ['miLoggerConsole', 'miLoggerFile'], level: 'error' }
	}
})
