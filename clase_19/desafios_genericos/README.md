# Consignas

1. MONGODB con Moongose

	1. Realizar un proyecto en Node.js que se conecte a una base de datos MongoDB local llamada colegio. Utilizar mongoose importándolo en Módulo (import) y gestionar sus acciones a través de promesas.
	2. Crear una colección llamada ‘estudiantes’ que incorporará 10 documentos con la siguiente estructura y datos que se detallan a continuación:
		- nombre: tipo string
		- apellido: tipo string
		- edad: tipo number
		- dni: tipo string (campo único)
		- curso: tipo string
		- nota: tipo number
	Todos los campos deben ser requeridos obligatoriamente ({ required: true })

	3. Tomar los valores del siguiente array de objetos

		[
		    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
		    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
		    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
		    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
		    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
		    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
		    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
		    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
		    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
		    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
		]
	
	4. Verificar con el cliente Mongo Shell (CLI) que los datos estén almacenados en la base y colección que corresponda.

2. MONGODB PROYECTION

	1. Desarrollar un proyecto en Node.js que realice la lectura de los estudiantes de la base colegio (creada anteriormente) mostrándolos en consola, cumpliendo con los siguientes puntos:

		- Los estudiantes ordenados por orden alfabético según sus nombres.
		- El estudiante más joven.
		- Los estudiantes que pertenezcan al curso '2A'.
		- El segundo estudiante más joven.
		- Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
		- Los estudiantes que sacaron 10.
		- El promedio de notas del total de alumnos.
		- El promedio de notas del curso '1A'.
	2. Utilizar la interfaz basada en Promises de Mongoose, sintaxis then/catch con importación de módulos en formato CommonJS.
	3. Los resultados se deben imprimir en orden según los puntos citados (Promesas anidadas con .then)


Realizar un proyecto en Node.js que sobre la base colegio realice las siguientes acciones:

	1. Actualizar el dni del estudiante Lucas Blanco a 20355875
	2. Agregar un campo 'ingreso' a todos los documentos con el valor false
	3. Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
	4. Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v
	5. Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v
	6. Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true

	7. Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS. 
		Por ejemplo: 

			{"_id":"604df61b5e39a84ba41313e4","nombre":"Fabio","apellido":"Pieres","edad":39,"dni":"4315388","curso":"1B","nota":9,"ingreso":false} -> Fecha creación:  14/3/2021 08:40:11

	8. Implementar estas funciones utilizando Promises en Mongoose con sintaxis async/await, utilizando la importación en formato ES Modules (import)
	9. Verificar la información de la base 'colegio' a través de Robo 3T
