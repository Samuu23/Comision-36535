# Consignas

1. Nuestra primera base de datos

Realizar las siguientes acciones utilizando un servidor de base de datos MongoDB:

	1. Crear una carpeta llamada 'base' para contener la estructura de base de datos.
	2. Ejecutar en una consola el motor de base de datos MongoDB, que debe seleccionar la carpeta 'base' como almacenamiento de su estructura.
	3. Iniciar Mongo shell en otra consola, verificando la conexión con el servidor.
	4. Listar las bases de datos disponibles
	5. Crear una base de datos en MongoDB llamada 'sistema' y seleccionarla con base de trabajo.
	6. Insertar un documento en la colección usuarios que contenga los campos: nombre y edad.
	7. Listar los documentos dentro de la colección usuarios.
	8. Mostrar las colecciones de la base 'sistema'.
	9. Insertar tres documentos más con el mismo formato y valores distintos en la colección usuarios.
	10. Listarlos nuevamente verificando que haya 4 documentos dentro de la colección usuarios.
	11. Insertar dentro de una colección llamada 'productos' cuatro documentos con los siguientes campos: nombre, precio y stock.
	12. Mostrar las colecciones de la base 'sistema'.
	13. Listar todos los documentos de la colección 'productos'.

2. SQL a Mongo

A continuación se muestra un enunciado para trabajar con bases de datos SQL:
1. Crear una base de datos llamada 'mibase'
2. Crear una tabla dentro de esa base con el nombre 'usuarios' que contenga los siguientes campos:
    - 'nombre' del tipo varchar no nulo
    - 'apellido' del tipo varchar no nulo
    - 'edad' del tipo entero sin signo
    - 'email' del tipo varchar no nulo
    - 'id' clave primaria autoincremental no nula
3. Insertar estos 3 usuarios en esa tabla
    - Juan Perez edad 23 jp@gmail.com
    - Pedro Mei edad 21 pm@gmail.com
    - Juana Suarez edad 25 js@gmail.com
4. Listar las tablas existentes
5. Listar los usuarios agregados


En base al enunciado:

1) Conformar las operaciones de consulta apropiadas para realizar los mismos procedimientos utilizando un cliente CLI de MongoDB.
2) Crear una conexión local hacia el motor de base de datos MongoDB mediante el cliente ROBO 3T
3) Con ROBO 3T acceder y visualizar la base, colecciones y documentos creados.

Notas: 
El campo id lo crea automáticamente el motor de base de datos MongoDB y se llama _id almacenando un ObjectID.
