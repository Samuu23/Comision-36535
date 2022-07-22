# Consignas

1. Crear proyecto con Yarn

- Instalar el gestor de paquetes yarn con npm en forma global.
- Verificar la versión instalada de yarn.
- Crear un proyecto de node.js utilizando yarn.
- Instalar express con yarn.
- Crear un servidor express que devuelva en su ruta raíz el mensaje: "Hola Yarn".
- Crear un script start que ejecute nodemon con el punto de entrada del servidor.
- Ejecutar el script start con yarn (pista: funciona igual que con npm).

2. Crear Dependencia con NPM

Realizar un proyecto que subiremos a npm como dependencia propia.

Este paquete debe exportar cuatro funciones para realizar estas operaciones básicas entre dos números: suma, resta, multiplicación y división. Subir el proyecto a npm.

Verificar que la dependencia se encuentre en npm (https://www.npmjs.com/package/nombre-del-paquete)

Abrir el proyecto servidor del desafio anterior e instalar con npm la dependencia recién creada.

Importar la dependencia en este proyecto y realizar un endpoint get por cada operación ingresando los valores por query params. Probar el correcto funcionamiento de esas rutas.
