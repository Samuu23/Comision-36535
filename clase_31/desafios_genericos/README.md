# Consignas

1. Probando GZIP

- Realizar un servidor con dos endpoints GET, cada uno que devuelva la frase 'Hola que tal' concatenada 1000 veces, en las rutas '/saludo' y '/saludozip'.
- Al manejador de '/saludozip' agregar gzip como middleware.
- Probar ambos endpoints y verificar en el navegador cuántos bytes llegan como respuesta desde el servidor y qué headers trae la respuesta.
- Sabiendo que  1000 veces 12 caracteres de 1 byte c/u equivale a 12000 bytes (~12kb) ese es tamaño de paquete que esperamos recibir. Chequear si es así en cada caso.

2. Loguear con LOG4JS

- Crear un servidor que tenga una ruta '/sumar' que reciba por query params dos números y devuelva un mensajes con la suma entre ambos.
- Utilizar log4js para crear un módulo capaz de exportar uno de los siguientes dos loggers: uno para el entorno de desarrollo, que logueará de info en adelante por consola, y otro para el entorno de producción, que logueará de debug en adelante a un archivo ‘debug.log’ y solo errores a otro archivo ‘errores.log’.


- El logueo se realizará siguiendo el siguiente criterio:
	- En caso de operaciones exitosas, loguear una línea de info
	- En caso de ingresar un número no válido, loguear un error
	- En caso de fallar el inicio del servidor, loguear un error
	- En caso de recibir una petición a un recurso inválido, loguear una warning.
- La decisión de qué logger exportar se tomará en base al valor de una variable de entorno NODE_ENV, cuyo valor puede ser: ‘PROD’ para producción, o cualquier otra cosa (incluyendo nada) para desarrollo.

3. Loguear con Winston

- Realizar el ejercicio anterior pero esta vez utilizando winston logger.
- Crear los loggers respetando los niveles de log y las capas de transporte necesarias para cumplir con el enunciado.

4. Loguear con Pino

- Realizar el ejercicio anterior pero esta vez utilizando pino logger. En el caso del logger para el entorno de producción, loguear a un único archivo ‘debug.log’, con nivel ‘debug’.
- (Pino no soporta actualmente la salida en simultáneo por más de un transporte)
