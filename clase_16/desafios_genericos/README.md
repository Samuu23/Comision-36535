# Consignas

1. Node + MariaDB/MySQL

    Realizar un proyecto en Node.js que se conecte a la base de datos llamada ecommerce implementada en MariaDB y ejecute las siguientes procesos:
    1. Debe crear una tabla llamada articulos con la siguiente estructura:
        Campos: 
        - nombre tipo varchar 15 caracteres no nulo
        - codigo tipo varchar 10 caracteres no nulo
        - precio tipo float
        - stock tipo entero
        - id clave primaria autoincremental no nula
    2. Insertar 5 articulos en esa tabla, con datos de prueba con stocks positivos 
    3. Listar la tabla mostrando los resultados en la consola
    4. Borrar el articulo con id = 3
    5. Actualizar el stock a 0 del articulo con id = 2

Notas:
- Crear un único archivo ejecutable a través de node.js que realice lo pedido. Considerar que estos son procesos asincrónicos que devuelven promesas y deben ser anidados para mantener el orden de operación. Utilizar la sintaxis then/catch
- Agregar como primera acción que, en caso de existir la tabla, la borre (drop), así al ejecutar estas mismas tareas, empezamos desde cero sin errores y datos residuales.

2. Node + SQLite3

Realizar un proyecto en Node.js que se conecte a una base de datos SQLite3 y ejecute las mismas acciones que las planteadas en el desafío anterior.

Notas: 
- Crear un único archivo ejecutable a través de node.js que realice lo pedido. Considerar que estos son procesos asincrónicos que devuelven promesas y deben ser anidados para mantener el orden de operación. Utilizar la sintaxis async/await.
- Agregar como primera acción que si existe la tabla la borre (drop), así, al ejecutar estas mismas tareas, comienzo de cero sin errores y datos residuales.