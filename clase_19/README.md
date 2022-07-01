# Teoría

## Stack MERN

Recordemos que MongoDB constituye una de las herramientas recomendadas de uso en el MERN Stack:

- MongoDB es un base de datos NoSQL que está orientada a documentos. 
- Express es una infraestructura de aplicaciones web Node.js 
- React JS es una biblioteca para crear componentes de interfaz de usuario.
- Node.js es un entorno de ejecución para JavaScript que puede permitirle ejecutar JavaScript fuera del navegador, por ejemplo del lado servidor.

## ¿Qué es Mongoose?

- Mongoose es una dependencia Javascript que realiza la conexión a la instancia de MongoDB
- Pero la magia real del módulo Mongoose es la habilidad para definir un esquema del documento. 
- MongoDB usa colecciones para almacenar múltiples documentos, los cuales no necesitan tener la misma estructura.
- Cuando tratamos con objetos es necesario que los documentos sean algo parecido. En este punto nos ayudan los esquemas y modelos de Mongoose.

1. Llamada AJAX a la API
2. Llamadas GET o POST a la Base de Datos
3. Mongoose devuelve un objeto
4. Express devuelve el objeto en JSON

Website oficial: https://mongoosejs.com/

## Mongoose

### Schema y Model

- Mongoose usa un objeto Schema para definir una lista de propiedades del documento, cada una con su propio tipo y características para forzar la estructura del documento. 
- Después de especificar un esquema deberemos definir un Modelo constructor para así poder crear instancias de los documentos de MongoDB

### Validaciones

- Mongoose es un Object Document Mapper (ODM). Esto significa que permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.
- Mongoose proporciona una amplia cantidad de funcionalidades para crear y trabajar con esquemas.

Actualmente contiene ocho SchemaTypes definidos para una propiedad

- String (Cadena)
- Number (Número)
- Date (Fecha)
- Buffer
- Boolean (Booleano)
- Mixed (Mixto)
- ObjectId
- Array (Matriz)

Cada tipo de dato permite especificar:

- Un valor predeterminado
- Una función de validación personalizada
- La indicación de campo requerido
- Una función get que le permite manipular los datos antes de que se devuelva como un objeto
- Una función de conjunto que le permite manipular los datos antes de guardarlos en la base de datos
- Crear índices para permitir que los datos se obtengan más rápido

Además de estas opciones comunes, ciertos tipos de datos permiten personalizar cómo se almacenan y recuperan los datos de la base de datos.

Por ejemplo, un String especifica opciones adicionales:  
- Convertir en minúsculas y a mayúsculas
- Recortar datos antes de guardar
- Una expresión regular que puede limitar los datos que se pueden guardar durante el proceso de validación
- Una enumeración que puede definir una lista de cadenas que son válidas

