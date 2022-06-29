# Teoría

## ¿Qué es MongoDB?

MongoDB es una base de datos No relacional, NoSQL, orientada a documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.

El modelo de documentos de MongoDB resulta muy fácil de aprender y usar, y proporciona a los desarrolladores todas las funcionalidades que necesitan para satisfacer los requisitos más complejos a cualquier escala.

## Opciones de Implementacion

MongoDB dispone de dos variantes de despliegue:

- Local: con Mongo Server, a través de sus opciones Community y Enterprise.
- Remota: mediante una plataforma configurada en la nube, lista para usar, llamada Mongo Atlas.

## Características
- Almacena datos en documentos flexibles similares a JSON: la estructura de datos puede cambiarse con el tiempo.
- El modelo de documento se asigna a los objetos en el código de su aplicación para facilitar el trabajo con los datos.
- Las consultas ad hoc, la indexación y la agregación en tiempo real ofrecen maneras potentes de acceder a los datos y analizarlos.
- MongoDB es una base de datos distribuida en su núcleo, por lo que la alta disponibilidad, la escalabilidad horizontal y la distribución geográfica están integradas y son fáciles de usar.
- MongoDB es de uso gratuito.

## Esquemas

El concepto de bases de datos NoSQL va creciendo y se utiliza con más frecuencia. MongoDB la base de datos NoSQL más conocida.

El concepto NoSQL define sistemas que difieren del modelo clásico SQL: Sistema de bases de datos relacionales. Lo más destacado de NoSQL es que no usan SQL como lenguaje principal de consultas.

MongoDB es una base de datos orientada a documentos. No se basa en el concepto de Tabla Fila y Registro sino que se apoya en el concepto de Colección, Documento y Propiedad.

## Colecciones

Una colección en MongoDB es muy similar a una tabla de una base de datos. La tabla almacena registros (filas) mientras que las colecciones almacenan documentos.

## Documentos

- Aquí comienzan las diferencias importantes entre una base de datos SQL y una NoSQL. El concepto de fila y de documentos son bastante diferentes. 
- Una fila está compuesta de columnas y siempre son las mismas para todas ellas. 
- En cambio un documento está compuesto por claves y valores (key,value) y cada documento puede tener variaciones importantes con respecto al anterior dentro de una colección. 

## Mongo y Documentos

- Imaginémonos que tenemos el concepto de Persona: nombre,apellidos,edad. 
- En una base de datos relacional dispondremos de la siguiente tabla
- Ahora tenemos el mismo concepto de Persona: nombre,apellidos,edad.
- En una base de datos MongoDB dispondremos de la siguiente tabla

En MongoDB se podrían crear documentos muy diferentes como estos:

- El primer documento solo dispone de un campo. 
- El segundo dispone de tres, pero diferentes a los anteriores. 
- Esto es lo que en NoSQL se denomina Schema Free o libre y que aporta una gran flexibilidad a la hora de trabajar.

Esta tipología de esquema viene reforzada por la capacidad de generar documentos embebidos dentro de la misma colección.

## Documentos embebidos

Un documento embebido es un documento que está insertado dentro de otro y que ambos están ligados a la misma colección.

## Pasos para la puesta en marcha
1. Creamos una carpeta llamada -por ejemplo- miBaseMongo
2. Ejecutamos en la consola el siguiente comando:
3. mongod --dbpath “ruta/hacia/la/carpeta/miBaseMongo”
4. Verificamos que el motor de base de datos se inicie. Este escuchará peticiones de clientes en localhost puerto 27017.
5. Abrimos otra consola y ejecutamos el comando: mongo
6. En este caso se abre el cliente que se conectará al servicio de base de datos iniciado anteriormente.

Ambas consolas quedarán bloqueadas ejecutando sus procesos. Si queremos salir, lo hacemos con Control-C.

## Comandos

Algunos comandos para iniciar la operación con la base de datos:
- mongo: nos conectará de forma automática con el servidor. 
- show dbs: muestra la lista de bases de datos existentes.
- use: selecciona la base de datos activa (si no existe la crea):
- Ej. use mibase
- show collections: muestra la lista de colecciones de esta base
- db.personas.insertOne({clave: valor, ...}): crea una colección en forma implícita llamada ‘personas’ y le inserta un documento.
- db.personas.find(): busca todos los documentos que están dentro de la colección ‘personas’

## SQL vs NoSQL

- Al trabajar con SQL y bases de datos relacionales, el sistema de almacenamiento de datos de nuestras aplicaciones web sigue patrones que otorgan relación entre las tablas de nuestra base de datos con las claves primaria y foráneas. 
- Esto es altamente beneficioso porque nos genera un sistema de almacenamiento de datos totalmente estructurado.
- Al evolucionar nuestras aplicaciones web, debemos realizar modificaciones en nuestro modelo conceptual de la base de datos.
- Este problema con las bases de datos NoSQL quedaría resuelto por la flexibilidad que nos ofrecen las base de datos documentales, ya que estas bases de datos trabajan con datos en formato JSON.

## Ventajas y Desventajas

### MySQL

**_Ventajas_**:

- Podemos ejecutar sentencias SQL directamente en nuestra base de datos.
- Posibilidad de abstracción de nuestra base de datos con algún ORM estilo Doctrine o Hibernate.
- Almacenamiento de datos totalmente organizado y jerarquizado con claves primarias y foráneas.
- Nos permite evitar la duplicidad de registros.
- Mejora notable en mantenimiento de datos en relación a la seguridad requerida de los mismos.

**_Desventajas_**:

- Si nuestro sistema escala y evoluciona, tendremos que haber diseñado nuestra base de datos según los posibles nuevos requerimientos.
- Requiere más espacio de almacenamiento que una base NoSQL.
- Las transacciones de datos son más pesadas frente a las bases de datos NoSQL.
- Los límites en los campos de las tablas nos pueden hacer perder datos si no los configuramos adecuadamente según el tamaño del dato que nos puedan introducir los usuarios.

### MongoDB

**_Ventajas_**:

- La escalabilidad y su carácter descentralizado hacen que soporte estructuras distribuidas.
- Permiten realizar sistemas más abiertos y flexibles debido a su fácil adaptación de nuevas evoluciones de nuestras aplicaciones web.
- No se requieren potentes recursos para poder trabajar con bases de datos NoSQL.
- Optimización de las consultas en base de datos para grandes cantidades de datos almacenados.

**_Desventajas_**:

- Problemas con sentencias SQL ya que no admiten el 100% de las consultas existentes.
- No es capaz de realizar transacciones. Si bien en nuestra web o en una aplicación que hemos desarrollado podemos simular una transacción, MongoDB no tiene esa opción entre sus tantas capacidades.
- La principal desventaja de MongoDB es que carece de algo tan fundamental como los Joins.
- Falta de estandarización entre las diferentes bases de datos NoSQL.

