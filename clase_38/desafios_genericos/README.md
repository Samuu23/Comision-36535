# Consignas

1. Servidor en Capas

- Dividir en capas el servidor del último desafío entregable (módulo de operaciones, proyecto con yarn), separando en capas de ruteo/controlador, lógica de negocio y capa de persistencia, utilizando exclusivamente funciones como vimos en el ejemplo de la clase.
- Además de ubicar en cada una de esas capas lo realizado hasta el momento, guardar en persistencia las operaciones realizadas en un array de objetos que contengan: tipo de operación, parámetros, resultado y timestamp.
- Permitir además el listado de dichas operaciones registradas.

2. Servidor en Capas (2da Parte)

- Continuando el proyecto del desafío anterior, modificar nuestro sistema para que la persistencia, en lugar de realizarse en memoria, se realice en el disco, en un archivo.
- Luego, modificar nuevamente el sistema para que la persistencia se realice utilizando una base de datos (a elección del desarrollador).
- De ser posible, realizar ambas modificaciones sin tener que tocar la capa de negocios.

3. Servidor en Capas (3ra Parte)

- Continuando el proyecto del desafío anterior, modificar nuestro sistema para que la operacion de ‘listar’ solo pueda ser realizada por usuarios autorizados. Para ello, agregar un mecanismo simple de registro, que provea una clave secreta, y que solo permita acceder al listado de operaciones a quienes adjunten a su peticion la clave en su cabecera.
- De ser posible, realizar estas modificaciones sin tener que tocar la capa de negocios ni la de persistencia.
