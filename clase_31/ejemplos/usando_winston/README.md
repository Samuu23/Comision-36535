# Usando Winston

1. Instalacion

		$ npm i winston

2. Requerimos el paquete Winston y lo configuramos:

		const winston = require('winston')
		
		const logger = winston.createLogger({
		   level: 'warn',
		   transports : [
		       new winston.transports.Console({ level:'verbose' }),
		       new winston.transports.File({ filename: 'info.log', level:'error' }),
		   ]
		})

3. Dentro del método winston.createLogger definimos primero el nivel de registro que vamos a desplegar.
4. Luego, en este caso definimos 2 transportes. Uno en el nivel verbose que escribe en consola y otro en nivel error que escribe en el archivo info.log.

## Niveles de salida

- Los niveles de salida definidos en Winston son: Silly, Debug, Verbose, Info, Warn, Error.
- Al igual que en Log4js, se imprime desde el nivel especificado hacia los niveles con mayor prioridad (los anteriores no se imprimen).
- Se puede imprimir con el siguiente código, especificando el nivel de salida y el mensaje que se desea imprimir.
- Con este código, se va a imprimir en todos los transportes (en el caso que configuramos antes, sería en consola y en el archivo:

		logger.log('level', 'message')

## Niveles de salida y transporte

- Ejecutando entonces los dos transportes con cada uno de los niveles de salida:

		logger.log('silly', "127.0.0.1 - log silly")
		logger.log('debug', "127.0.0.1 - log debug")
		logger.log('verbose', "127.0.0.1 - log verbose")
		logger.log('info', "127.0.0.1 - log info")
		logger.log('warn', "127.0.0.1 - log warn")
		logger.log('error', "127.0.0.1 - log error")

- Por consola se imprime:

- En el archivo info.log se imprime: 

Como podemos observar, solo se imprimen los de niveles de salida que sean el configurado en el transporte y los que siguen en prioridad.

También podemos ejecutarlo de la siguiente manera:

- Se ejecutan también todos los transportes configurados:

		logger.info("127.0.0.1 - log info 2")
		logger.warn("127.0.0.1 - log warn 2")
		logger.error("127.0.0.1 - log error 2")

- Por consola se imprime:

- En el archivo info.log se imprime: 

Al igual que antes, solo se imprimen los del nivel de salida configurado y los que siguen en prioridad (por eso en el archivo solo se imprime el error, ya que es el nivel configurado en su transporte.
