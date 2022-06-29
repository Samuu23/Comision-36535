# Teoría

## CRUD

El concepto CRUD está estrechamente vinculado a la gestión de datos digitales. CRUD hace referencia a un acrónimo en el que se reúnen las primeras letras de las cuatro operaciones fundamentales de aplicaciones persistentes en sistemas de bases de datos

- Create (Crear registros)
- Read ó Retrieve (Leer registros)
- Update (Actualizar registros)
- Delete ó Destroy (Borrar registros)

- CRUD resume las funciones requeridas por un usuario para crear y gestionar datos. 
- Muchos procesos de gestión de datos están basados en CRUD, en los que dichas operaciones están específicamente adaptadas a los requisitos del sistema y de usuario, ya sea para la gestión de bases de datos o para el uso de aplicaciones. 
- Para los expertos, las operaciones son las herramientas de acceso típicas e indispensables para comprobar, por ejemplo, los problemas de la base de datos.
- Para los usuarios, CRUD significa crear una cuenta (create) y utilizarla (read), actualizarla (update) o borrarla (delete) en cualquier momento.

- show dbs: listado de bases no vacías
- use: crea y selecciona base de trabajo
- db: muestra la base actual
- show collections: listado de colecciones
- load: carga un script de comandos

## Detalles de Comandos

- db.coll.drop() : borra una colección y sus índices respectivos.
- db.dropDatabase() : elimina la base de datos actual.
- db.createCollection("contacts") : crea una colección en forma explícita.
- db.coll.stats() : refleja estadísticas del uso de la base.
- db.coll.storageSize() : tamaño de almacenamiento de la colección.
- db.coll.totalIndexSize() : tamaño total de todos los índices de la colección.
- db.coll.totalSize(): tamaño total en bytes de los datos de la colección más el tamaño de cada índice de la colección.
- db.coll.validate({full: true}) : comprueba la integridad de una colección.
- db.coll.renameCollection("new_coll", true) : renombra una colección, el  2do parámetro para borrar la colección destino si existe.
- db.coll.insertOne( {key:value} ) : inserta un documento en la colección.
- db.coll.insert( {key:value} ) : inserta un documento en la colección (en desuso).
- db.coll.insertMany( [ {key:value}, {key:value}, {key:value} ] ) : inserta un array de documentos la colección en modo Bulk.
- db.coll.findOne() : busca un documento dentro de una colección.
- db.coll.find() : busca todos los documentos dentro de una colección.
- db.coll.find( {key:value} ) : busca los documentos dentro de una colección que satisfacen el filtro de búsqueda.
- db.coll.find().pretty() : devuelve todos los documentos conservando el formato de objeto de salida.

## Formato Documento

Cuando insertamos un documento en MongoDB, el motor de base de datos crea un campo adicional llamado ObjectID identificado con la clave _id.  

Este es un número compuesto por 12 bytes que asegura un identificador único para cada documento. Se considera clave primaria y contiene tres secciones: https://docs.mongodb.com/manual/reference/method/ObjectId/

## Contadores

_Comandos Count_

Son funciones que cuentan la cantidad de documentos presentes en una colección. Algunas de ellas pueden tener la opción de filtro.

- db.coll.estimatedDocumentCount() -> Devuelve la cantidad total de documentos encontrados en la colección.
- db.coll.countDocuments( {key: val} ) -> Devuelve la cantidad de documentos encontrados en la colección (con filtro de query).

## Read con Filtros

Comando Read con filtros de búsqueda

- db.coll.find( {key: {$operator: val}} ) : devuelve los documentos según el operador de filtro utilizado.
- $and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
- $or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
- $lt : Coincide con valores que son menores que un valor especificado.
- $lte : Coincide con valores menores o iguales a un valor especificado.
- $gt : Coincide con valores mayores a un valor especificado.
- $gte : Coincide con valores mayores o iguales a un valor especificado.
- $ne : Coincide con valores que no son iguales a un valor especificado.
- $eq : Selecciona los documentos que son iguales a un valor especificado.
- $exists : Selecciona los documentos según la existencia de un campo.
- $in : Selecciona los documentos especificados en un array. 
- sintaxis: {key:{$in: [array of values] } }
- $nin : Coincide con ninguno de los valores especificados en un array.
- $size : Coincide con el número de elementos especificados.
- $all : Coincide con todos los valores definidos dentro de un array.
- $elemMatch : Coincide con algún valor definido dentro del query.

## Busqueda avanzada

- db.coll.distinct( val ) -> devuelve un array con los distintos valores que toma un determinado campo en los documentos de la colección.
- db.coll.find({doc.subdoc:value}) -> Se utiliza para filtrar subdocumentos.
- db.coll.find({name: /^Max$/i}) -> filtra utilizando expresiones regulares

## Proyecciones en Mongo

- La proyección se utiliza para devolver un conjunto determinado de campos de un documento. En general devolvemos todos los campos de un documento, pero es posible que no necesitemos todos. 
- Es equivalente en SQL de pasar de hacer un SELECT * a realizar SELECT nombrecampo. 
- Las proyecciones deben ser incorporadas en el segundo parámetro del comando find. Por ej. db.coll.find({},{"nombre":1}) muestra sólo el campo nombre y el _id de todos documentos de la coll
- Las proyecciones se realizan indicando el nombre del campo,
- con valor 1 si queremos mostrarlo y 0 por el contrario.

## Sort

- sort( { campoA: 1 ó -1 , campoB: 1 ó -1 , ... } ) : Especifica el orden en el que la consulta devuelve documentos coincidentes. El ó los campos por los cuales ordena pueden contener los valores 1 y -1, estableciendo orden ascendente y descendente respectivamente. El orden se evalúa de izquierda a derecha en caso que los valores coincidan.
- limit(num): Especifica el número máximo de documentos devueltos.
- skip(offset) : Saltea la cantidad de documentos especificada.

Se pueden utilizar en forma combinada:

- db.Employee.find().skip(2).limit(3).sort({Employeeid:-1})

## Update

- db.collection.updateOne(query, update, options
- query: especifica el filtro de documentos a ser actualizados.
- update: contiene los datos a ser actualizados con sus operadores respectivos: $set, $unset, $inc, $rename, $mul, $min, $max, etc.
- options: contiene varias opciones para la actualización, entre ellas: 
- upsert (true ó false) : Es una opción para hacer un insert en caso de que el registro no exista.
- db.coll.updateMany(query, update, options)
- Igual que el anterior, pero hace una actualización múltiple en caso de que el filtro de query devuelva varios resultados.

## Delete

- db.coll.deleteOne( {key: val} ): Elimina un sólo documento (el primero) que coincide con el filtro especificado.
- db.coll.deleteMany( {key: val} ): Elimina todos los documentos que coinciden con el filtro especificado.
- db.coll.remove( {key: val} ): Elimina documentos de una colección.
- db.coll.findOneAndDelete( filter, options ): Elimina un solo documento según el filtro y los criterios de clasificación. Algunas de las options pueden ser
- sort: para establecer orden para el filtro
- projection: para elegir campos de salida.

## Usuarios y permisos

En MongoDB es posible crear usuarios y asignarles acceso mediante roles. Veremos cómo crear un usuario y asignarle un rol para que tenga ciertos accesos limitados a una base de datos.

Crearemos dos usuarios para una base de datos

- Usuario lector: tendrá acceso de lectura a la base de datos.
- Usuario escritor: tendrá acceso de lectura y escritura a la base de datos.

Crearemos el usuario lector, que solo tiene acceso de lectura.

Utilizaremos el método createUser. Este acepta como parámetro un objeto con las siguientes propiedades:

- user: nombre del usuario. Le asignaremos lector.
- pwd: contraseña para el usuario.
- roles: arreglo de objetos. Sirve si el usuario tendrá acceso a múltiples bases de datos, estableciendo permisos para cada acceso.

IMPORTANTE:  

- Ejecutar el servidor con acceso root: mongod
- Ejecutar en el cliente use admin antes de createUser(...)

- MongoDB viene con roles predefinidos. Uno de ellos es el role read, que permite ejecutar métodos de sólo lectura.
- La propiedad db es donde se  indica a qué base de datos se le asignará dicho rol.

Crearemos el usuario escritor. El proceso es similar, pero en este caso el role ya no será read sino readWrite. 

- Con el rol readWrite el usuario tendrá acceso a los métodos de lectura y escritura de la base de datos.
- A continuación debemos verificar que cada usuario cuenta con los accesos correctos.


