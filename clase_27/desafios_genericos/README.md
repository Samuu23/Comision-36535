# Consignas

1. Argumentos por linea de comandos

Realizar una aplicación en Javascript ejecutada a través de Node.JS que al ejecutarse de la siguiente manera:

		$ node main.js 1 2 3 -m dev -p 8080 -d

Construya y muestre por pantalla el siguiente objeto:

		{ modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }

Y con el siguiente llamado:

		$ node main.js 1 2 3

Construya y muestre por pantalla el siguiente objeto:

		{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }

2. Usando Yargs 

Realizar la operación del desafío anterior, esta vez usando la dependencia YARGS en lugar de minimist.

3. Variables de Entorno

Realizar una aplicación en nodeJS que al pasar las siguientes variables de entorno:

		MODO=dev PUERTO=8080 DEBUG=true

Construya y muestre por pantalla el siguiente objeto:

		{ modo: 'dev', puerto: 8080, debug: true }

Y que al ejecutarlo sin pasar ninguna variable de entorno construya y muestre por pantalla el siguiente objeto:

		{ modo: 'prod', puerto: 0, debug: false }
4. Dotenv

Realizar el desafío anterior utilizando la librería dotenv.
