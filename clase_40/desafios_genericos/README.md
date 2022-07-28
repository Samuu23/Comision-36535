# Consignas

1. Patrón DAO

Crear una clase DAO (Data Access Object) llamada PersonasDaoMem que permita almacenar, obtener en forma total y leer/modificar/borrar por id los datos de personas recibidas (nombre, apellido, dni) utilizando la memoria RAM del servidor.

- Debe proveer los métodos necesarios para interactuar con una estructura tipo array de objetos que contenga toda la información.
- Realizar las pruebas necesarias por código para comprobar el correcto funcionamiento.
- La nueva clase creada debe estar en un archivo separado cuyo nombre será similar al de su clase contenida.

2. Patrón DTO

- Crear en base al desafío anterior, otro DAO llamado PersonasDaoFile que contenga los mismos métodos para interactuar con los datos de una persona, pero esta vez persistida en el file system (fs). Para asegurar el correcto funcionamiento del contenedor, agregar un método init que verifique que el archivo existe y sino que lo cree. Para mantener la consistencia entre las interfaces de ambos DAOs, agregar también este nuevo método al DAO de memoria. 
- En ambas clases (mem y file) en lugar de devolver objetos anónimos de javascript, instanciar y devolver objetos de la clase PersonaDto. Crear esta clase con los mismos campos que los almacenados para cada persona (ni uno más, ni uno menos). Las nuevas clases creadas deben estar en un archivo separado cuyo nombre será similar al de su clase contenida.

3. Patrón Factory

- Agregar al ejemplo del último desafío:
	- Una clase PersonasDaoDb que realice la persistencia usando MongoDb (devolviendo instancias de PersonaDto). Debemos agregar a nuestra familia de DAOs un método para desconectar al DAO (aunque sólo realice algo útil en la versión para MongoDB).
	- Una factory en donde se defina qué sistema de almacenamiento de datos se utilizará entre las tres opciones disponibles:
		- Memoria
		- Archivos
		- MongoDb

- El test no se debe enterar del cambio del sistema de persistencia. Ésta se establece a través de un parámetro que se pasa por línea de comandos con estas opciones:
	- 'Mem': selecciona Memory como sistema de persistencia.
	- 'File': selecciona File System como sistema de persistencia.
	- 'Mongo': selecciona MongoDB como sistema de persistencia.

4. Patrón Repository

- Aplicar el patrón repositorio sobre el desafío anterior.
	- El repositorio estará implementado en una clase PersonaRepository, y contará con métodos para realizar las operaciones de CRUD sobre instancias de la clase Persona (nuestro modelo de dominio). Dispondrá también de un método que indique la cantidad de personas almacenadas.
	- El constructor de PersonaRepository obtendrá el DAO de personas que utilizará para la persistencia desde un factory.
- Probar el repositorio utilizando un código de test llamando a cada acción del repositorio con los datos apropiados ó mediante un menú de test que permita por línea de comandos ejecutar las distintas tareas implementadas en el repositorio, representando en todos los casos los resultados por consola.
	- Utilizar diferentes DAOs y verificar que el funcionamiento no se ve afectado de ninguna manera al cambiar entre uno y otro.
	- Verificar que los datos se persisten de forma correcta en cada persistencia.


