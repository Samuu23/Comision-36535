# Consignas

1. CRUD

Utilizando Mongo shell, realizar las siguientes acciones:

	1. Crear una base de datos en MongoDB llamada 'empresa'.
	2. Crear una colección llamada 'clientes' dentro de esa base.
	3. Insertar un documento en la colección clientes que contenga los campos ‘nombre’ y ‘edad’.
	4. Insertar un array de tres documentos con el mismo formato y valores distintos en la colección clientes (modo bulk).
	5. Utilizando un sólo comando, crear una colección llamada 'articulos' e insertar dentro de ella un array de cuatro documentos con los campos ‘nombre’, ‘precio’ y ‘stock’.
	6. Mostrar las colecciones de la base 'empresa'.
	7. Listar todos los documentos dentro de cada una de las colecciones.
	8. Tomar el Object ID de uno de los documentos y comprobar fecha y hora de creación.
	9. Mostrar la cantidad de documentos que tiene la colección articulos.

2. Operaciones con Filtros
	Sobre la base y los datos cargados anteriormente
	1. Insertar cinco documentos más en la colección clientes con los siguientes datos:
		{ "nombre" : "Pablo", "edad" : 25 }
		{ "nombre" : "Juan", "edad" : 22 }
		{ "nombre" : "Lucia", "edad" : 25 }
		{ "nombre" : "Juan", "edad" : 29 }
		{ "nombre" : "Fede", "edad" : 35 }
	2. Listar todos los documentos de la colección clientes ordenados por edad descendente.
	3. Listar el cliente más joven.
	4. Listar el segundo cliente más joven.
	5. Listar los clientes llamados 'Juan'
	6. Listar los clientes llamados 'Juan' que tengan 29 años.
	7. Listar los clientes llamados 'Juan' ó 'Lucia'.
	8. Listar los clientes que tengan más de 25 años.
	9. Listar los clientes que tengan 25 años ó menos.
	10. Listar los clientes que NO tengan 25 años.
	11. Listar los clientes que estén entre los 26 y 35 años.
	12. Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
	13. Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
	14. Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.

3. Usuario Encargado

	1. Crear un usuario que acceda con nombre 'encargado' y clave 'qwerty123' sólo a la base 'empresa' y tenga permisos de lectura/escritura.
	2. Acceder con ese usuario y listar de la colección clientes sólo los nombres de los mismos.
	3. Verificar que no pueda acceder si sus credenciales no corresponden.
	
