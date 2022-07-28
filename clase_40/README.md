# Teoría

## Objetivos

- Aplicar los patrones de la capa de persistencia DAO, DTO y Repository, en conjunto con el patrón Factory.
- Comprender cada uno de ellos con ejemplos y diferencias.
- Presentar ORM y ODM como técnicas para la conversión de datos.

## Patron DAO (Data Access Object)

- Prácticamente todas las aplicaciones de hoy en día, requieren acceso al menos a una fuente de datos. Como suelen ser base de datos relacionales, muchas veces no tenemos problema en acceder a los datos. 
- Sin embargo, podemos necesitar más de una fuente de datos, o la que tenemos puede variar, lo que nos obligaría a refactorizar gran parte del código. 
- Para ésto, tenemos el patrón Arquitectónico Data Access Object (DAO), que permite separar la lógica de acceso a datos de los Business Objects u Objetos de negocios, de tal forma que el DAO encapsula toda la lógica de acceso de datos al resto de la aplicación.

### Problema de Acceso a Datos

- La implementación y formato de la información pueden variar según la fuente de los datos.
- Implementar la lógica de acceso a datos en la capa de lógica de negocio implicaría lidiar con dicha lógica en sí, más la implementación para acceder a los datos.
-	 Además, si tenemos múltiples fuentes de datos o estas pueden variar, tendríamos que implementar las diferentes lógicas para acceder a las diferentes fuentes de datos.

### ¿Cómo lo solucionamos?

- Para solucionar este problema, el patrón DAO propone separar por completo la lógica de negocio de la lógica para acceder a los datos. 
- De esta forma, el DAO proporcionará los métodos necesarios para insertar, actualizar, borrar y consultar la información. 

La capa de negocio solo se preocupa por la lógica de negocio y utiliza el DAO para interactuar con la fuente de datos. Éste es simplemente un nexo entre la lógica de negocio y la capa de persistencia (en general, base de datos).

### Pasos del patrón DAO

1. Nuestra aplicación encapsula la información en un DTO
2. El DAO toma ese DTO, extrae la información y construye la lógica necesaria para comunicarse con la fuente de datos (sentencias SQL, manejo de archivos, etc).
3. La fuente de datos recibe la información en el formato adecuado para tratarla.

### Pasos del Patrón DAO en sentido contrario

1. Nuestra aplicación hace un pedido de datos al DAO.
2. El DAO realiza una petición de datos a la fuente de datos
3. La fuente de datos envía al DAO la información.
4. El DAO recopila esa información, la encapsula en el DTO (o en otro elemento que la aplicación entienda) y se la devuelve a nuestra lógica de negocio.

### Vocabulario relacionado

- BusinessObject: representa un objeto con la lógica de negocio.
- DataAccessObject (DAO): representa una elemento de la capa de acceso a datos que oculta la fuente y los detalles técnicos para recuperar los datos.
- DataTransferObject (DTO): es un objeto plano que implementa el patrón de diseño homónimo, el cual sirve para transmitir la información entre la capa de negocio y la capa de persistencia.
- DataSource: representa de forma abstracta la fuente de datos, la cual puede ser una base de datos, un web service, un archivo de texto, etc.

## DAO y el patrón Abstract Factory

- Como vimos, el DAO nos es útil cuando tenemos una sola fuente de datos, sin importar de qué tipo sea.
- Sin embargo, es común que tengamos que requerir datos de diferentes fuentes. Y es ahí dónde usamos el patrón Abstract Factory.
- Mediante este patrón podemos definir una serie de familias de clases que permitan conectarnos a las diferentes fuentes de datos.
- Entonces, vamos a tener un DAO por cada fuente de datos diferente que tengamos, de modo de poder usarlo de “traductor” en cada una de ellas y no tener que modificar la lógica de negocio si alguna cambia.

> Usando DAO

## Patrón DTO (Data Transfer Object)

- Una de las problemáticas más comunes cuando desarrollamos aplicaciones, es diseñar la forma en que la información debe viajar desde la capa de servicios a las aplicaciones o capa de presentación. 
- Muchas veces utilizamos las clases de entidades para retornar los datos, lo que ocasiona que retornemos más datos de los necesarios o incluso, tengamos que ir en más de una ocasión a la capa de servicios para recuperar los datos requeridos.
- El patrón DTO tiene como finalidad crear un objeto plano (POJO: Plain Old Javascript Object) con una serie de atributos que puedan ser enviados o recuperados del servidor en una sola invocación, de tal forma que un DTO puede contener información de múltiples fuentes o tablas y concentrarlas en una única clase simple.

### Diagrama

![Data Mapping](https://www.oscarblancarteblog.com/wp-content/uploads/2018/11/mapping.png)

- En el diagrama podemos ver gráficamente cómo es que un DTO se conforma de una serie de atributos que pueden o no, estar conformados por más de una fuente de datos. 
- Para esto, el servidor obtiene la información de las tablas customer y address (izquierda) y realiza un mapeo o correspondencia con el DTO (derecha). 
- Otra de las ventajas que podemos observar en el diagrama, es que nos permite omitir información que el usuario no requiere, como es el caso de password. No solo que no lo requiere, sino que además podría ser una gran falla de seguridad, es por ello que en el DTO lo omitimos.

### Caracteristicas

- Si bien un DTO es simplemente un objeto plano, tiene que cumplir algunas reglas para poder considerar que hemos creado un DTO correctamente implementado:
- Sin lógica: Dado que el objetivo de un DTO es utilizarlo como un objeto de transferencia entre el cliente y el servidor, es importante evitar tener operaciones de negocio o métodos que realicen cálculos sobre los datos, es por ello que solo deberemos de tener los métodos GET y SET de los respectivos atributos del DTO.
- Serializable: Es claro que, si los objetos tendrán que viajar por la red, deberán de poder ser serializables, pero no hablamos solamente de la clase en sí, sino que también todos los atributos que contenga el DTO deberán ser fácilmente serializables. 

> Usando DTO

## Patrón Factory Method

- Este patrón actúa como una herramienta que podemos implementar para limpiar un poco nuestro código.
- En esencia, el patrón Factory Method nos permite centralizar la lógica de crear objetos (es decir, qué objeto crear y por qué) en un solo lugar. Esto nos permite olvidarnos de esa parte y concentrarnos en simplemente solicitar el objeto que necesitamos y luego usarlo.
- Es un patrón de creación que no requiere que usemos un constructor, pero proporciona una interfaz genérica para crear objetos. 
- Este patrón puede resultar realmente útil cuando el proceso de creación es complejo.

> Usando Factory Method

## Patrón Repository

- Repository es un patrón que se utiliza para mantener una conexión débilmente acoplada entre el cliente y los procedimientos de almacenamiento de datos del servidor que ocultan toda implementación compleja. 
- Esto significa que el cliente no tendrá que preocuparse por cómo acceder a la base de datos, agregar o eliminar elementos de una colección, etc.
- Con este patrón realizamos una correspondencia entre los datos provenientes de la base de datos y los modelos del dominio del negocio.
- Un repositorio se comporta como una colección de datos, con los métodos que esperamos de ella, abstrayéndonos de su implementación.
- Es posible definir un repositorio genérico con las operaciones básicas, y luego mediante el mecanismo de herencia generar comportamientos personalizados para cada entidad según corresponda.
- La lógica empresarial está encapsulada en funciones dentro del Repositorio. Si la implementación cambia alguna vez, lo tenemos todo en un solo lugar para cambiarlo como deseemos.

### Diferencias

- Patrón Repository
	-	Se ubica al mismo nivel de la capa de modelo de dominio, un poco más arriba que DAO.
	- Un Repository usa y genera entidades del modelo de dominio completamente instanciadas. 
	- Sólo existe un repositorio para cada Agregado, solo algunas de las tablas en la base de datos pueden ser correspondidas con la existencia de un Repositorio en la capa de modelo de dominio.
	- Su intención es proveer entidades de la capa de dominio.

- Patrón DAO
	- DAO se ubica en un nivel más bajo, mucho más cerca a la fuente de datos.
	- Un DAO usa y genera objetos portadores de información.
	- Entre tablas en una base de datos y DAO en la capa de acceso a datos suele existir una relación que tiende a ser directa, es decir, tiende a existir una relación uno a uno entre ambos.
	- DAO ha sido diseñado para obtener y guardar información de una base de datos

Un Repository puede ser implementado sobre una capa de DAO, sin embargo, la operación contraria supondría una destrucción de las definiciones formales de ambos conceptos.

> Usando Repository

## ORM (Object Relational Mapping)

- Es una técnica para convertir datos entre el sistema de tipos del lenguaje de programación y la base de datos. 
- Va dirigido solamente a las bases de datos relacionales (SQL). Esto crea un efecto “objeto base de datos virtual” sobre la base de datos relacional, el cual es lo que nos permite manipular la base de datos a través del código.
- Object: Hace referencia a los objetos que podemos usar en nuestro lenguaje.
- Relational: Hace referencia a nuestro Sistema Gestor de Base de Datos (MySQL, MSSQL, PostgreSQL).
- Mapping: Hace referencia a la conexión entre el los objetos y las tablas.
- ORM es una técnica que nos permite hacer queries y manipular datos de la base de datos desde un lenguaje de programación.
- Tiene las siguientes ventajas:
	- Abstracto: Diseño de una estructura o modelo aislado de la base de datos.
	- Portable: Nos permite transportar la estructura de nuestro ORM a cualquier DBMS.
	- Anidación de datos: En caso de que una tabla tenga una o varias relaciones con otras.
- Tiene las siguientes desventajas:
	- Lento: Si se compara el tiempo de respuesta entre una raw query y un query hecho por objetos, raw query es mucho mas rápido debido a que no existe una capa intermedia (mapping).
	- Complejidad: Algunas veces necesitaremos hacer queries complejas. Para eso, tenemos Sequelize que nos permite ejecutar raw queries.

### Sequelize

- Sequelize es un ORM basado en promesas para Node. 
- Soporta PostgreSQL, MySQL, SQLite y MSSQL, y entrega características sólidas de transacciones, relaciones entre tablas, mecanismos de migraciones y carga de datos, etc.
- Sequelize maneja sus objetos como promesas, algo que va de la mano con el event loop de Node.
- Tiene los mismos alcances que Mongoose y se usa para lo mismo, pero cuando trabajamos con bases de datos relacionales.

## ODM (Object Document Mapper)

- Es como un ORM para bases de datos no relacionales o bases de datos distribuidas como MongoDB. 
- Por ejemplo, mapea un modelo de objeto y una base de datos NoSQL (bases de datos de documentos, base de datos de gráficos, etc.).
- MongoDB expresa los datos que se guardarán en un formato similar a JSON y los guarda como un documento. ODM es la función de asociar tal documento con un objeto en un lenguaje de programación.
- Mongoose es un ODM. Esto significa que nos permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.

### Mongoose Schema

- Un esquema en Mongoose es una estructura JSON que contiene información acerca de las propiedades de un documento. Puede también contener información acerca de la validación y de los valores por default y si una propiedad en particular es requerida. Los esquemas pueden contener lógica y otro tipo de información importante.
- Sirven como guías de la estructura de los documentos. Estos son necesitados para la creación del modelo. Así que antes de utilizar los modelos de manera apropiada, es necesario definir sus esquemas.
- Mongoose ignora todas las propiedades que no sean definidas dentro del modelo de un esquema.
- Se pueden conectar entre sí. Lo que significa que cierta funcionalidad puede ser extendida a través de todos los esquemas de la aplicación.

