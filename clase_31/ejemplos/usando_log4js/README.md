# Usando LOG4JS

Es una de las librerías de loggers más utilizada. Aunque actualmente está siendo reemplazada por Winston y luego por Pino, que es hoy el más moderno.

- Instalacion

		$ npm i log4js

- Impplementacion

		const log4js = require('log4js')
		import log4js from 'log4js'

## Niveles de Salida y Ventajas

- Definimos 6 niveles de salida: Trace, Debug, Info, Warn, Error, Fatal.
- Los niveles que se imprimen, son desde el especificado en la configuración de categorías para abajo. Por ejemplo, si el nivel configurado es Warn, se imprimirá solo Warn, Error y Fatal.
- La ventaja de esto es que en un entorno de producción podemos solo preocuparnos por las excepciones y errores y no por la información de depuración.
- Otra ventaja es que el código se puede mezclar con varios códigos de impresión de registros. Siempre que modifiquemos el nivel de salida en un archivo de configuración, la salida del registro cambiará sin modificar todo el código.

## Niveles de Salida y Categorias

- Ejecutando la categoria *default*

		const logger = log4js.getLogger();
		logger.trace("Entering cheese testing");
		logger.debug("Got cheese.");
		logger.info("Cheese is Comté.");
		logger.warn("Cheese is quite smelly.");
		logger.error("Cheese is too ripe!");
		logger.fatal("Cheese was breeding ground for listeria.");

- Ejecutando la categoria *console*

		const loggerConsola = log4js.getLogger('consola');
		loggerConsola.trace("Entering cheese testing");
		loggerConsola.debug("Got cheese.");
		loggerConsola.info("Cheese is Comté.");
		loggerConsola.warn("Cheese is quite smelly.");
		loggerConsola.error("Cheese is too ripe!");
		loggerConsola.fatal("Cheese was breeding ground for listeria.");

- Ejecutando la categoria *archivo*

		const loggerArchivo = log4js.getLogger('archivo');
		loggerArchivo.trace("Entering cheese testing");
		loggerArchivo.debug("Got cheese.");
		loggerArchivo.info("Cheese is Comté.");
		loggerArchivo.warn("Cheese is quite smelly.");
		loggerArchivo.error("Cheese is too ripe!");
		loggerArchivo.fatal("Cheese was breeding ground for listeria.");

- Ejecutando la categoria *archivo2*

		const loggerArchivo2 = log4js.getLogger('archivo2');
		loggerArchivo2.trace("Entering cheese testing");
		loggerArchivo2.debug("Got cheese.");
		loggerArchivo2.info("Cheese is Comté.");
		loggerArchivo2.warn("Cheese is quite smelly.");
		loggerArchivo2.error("Cheese is too ripe!");
		loggerArchivo2.fatal("Cheese was breeding ground for listeria.")

- Ejecutando la categoria *todos*

		const loggerTodos = log4js.getLogger('todos');
		loggerTodos.trace("Entering cheese testing");
		loggerTodos.debug("Got cheese.");
		loggerTodos.info("Cheese is Comté.");
		loggerTodos.warn("Cheese is quite smelly.");
		loggerTodos.error("Cheese is too ripe!");
		loggerTodos.fatal("Cheese was breeding ground for listeria.");

Es posible definirle a un appender directamente un nivel para que loguee usando ese criterio siempre, independientemente de la categoría que lo use. Esto nos permite, por ejemplo, definir una categoría que loguee en un archivo todo lo que sea nivel info, y loguee por consola todos los errores. Para esto, debemos crear dentro de los appenders un ítem especial que defina dichos criterios:

		appenders: {
		  // defino dos soportes de salida de datos
		  consola: { type: 'console' },
		  archivo: { type: 'file', filename: 'errores.log' },
		  // defino sus niveles de logueo
		  loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
		  loggerArchivo: { type: 'logLevelFilter', appender: 'archivo', level: 'error' }
		},

Luego al definir las categorías, defino una que utilice más de un appender. Es importante que al momento de utilizar appenders con niveles personalizados, definamos el nivel de la categoría como ‘all’, para que permita los distintos valores que definimos anteriormente.

		categories: {
		  default: {
		    appenders: ['loggerConsola'], level: 'all'
		  },
		  custom: {
		    appenders: ['loggerConsola', 'loggerArchivo'], level: 'all'
		  }
		}


