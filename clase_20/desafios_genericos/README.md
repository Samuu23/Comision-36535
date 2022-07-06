# Consignas

1. Mongo Atlas con Distintos Clientes

	1. Conectarse a la base MongoDB Atlas con los clientes CLI, Compass y Node.js
	2. Mediante la consola CLI insertar estos documentos en una base llamada ‘ecommerce’, colección ‘usuarios’:
	[
	    { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
	    { nombre: 'María', apellido: 'García', dni: '29575148' },
	    { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
	    { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
	]
	3. A través de un proyecto Node.js, listar estos datos representándolos en la consola.
	4. Con el mismo proyecto, incorporar un usuario más: 

	{ nombre: 'Federico', apellido: 'Perez', dni: '320118321' }
	
	Utilizar sintaxis de Promesas con async await e import para la importación de módulos.

	5. Con Compass borrar al usuario llamado Tomas.
	6. Con Mongo CLI actualizar el usuario llamado 'Carlos' al nombre 'Juan Carlos' y luego listar los documentos finales.
  
2. Node.js con Firebase

Realizar un proyecto en Node.js que acceda a una base de datos Firebase ya configurada.

	1. Agregar los colores red, green, blue dentro de una colección llamada ‘colores’ con el formato { nombre: color }
	2. Listar todos los colores disponibles.
	3. Modificar el color blue por navy.
	4. Borrar el color green

A tener en cuenta:
Implementar estas funciones utilizando Promises en las funciones de Firebase con sintaxis async/await, utilizando la importación en formato ES Modules (import)
Verificar la información de la base de datos con la consola de Firebase.
