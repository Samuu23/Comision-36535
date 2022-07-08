# Ejemplo 1

## Ejemplo de uso

Las publicaciones en un blog pueden tener este formato de datos:

		const blogpost = {
		  id: "1",
		  title: "My blog post",
		  description: "Short blogpost description",
		  content: "Hello world",
		  author: {
		    id: "1",
		    name: "John Doe"
		  },
		  comments: [
		    {
		      id: "1",
		      author: "Rob",
		      content: "Nice post!"
		    },
		    {
		      id: "2",
		      author: "Jane",
		      content: "I totally agree with you!"
		    }
		  ]
		}

Este tipo de estructura parece totalmente correcta, pero cuando almacenemos más publicaciones de blog, se duplicarán los datos de los autores. A medida que nuestro blog crece, podemos agregar categorías y relaciones entre comentarios y usuarios.

No es necesario almacenar todo en un objeto.

## Solución: Normalizr

		// Definimos un esquema de usuarios (autores y comentadores)
		const authorSchema = new schema.Entity('authors')
		
		// Definimos un esquema de comentadores
		const commentSchema = new schema.Entity('comments')
		
		// Definimos un esquema de artículos
		const postSchema = new schema.Entity('posts', {
		  author: authorSchema,
		  comments: [commentSchema]
		});

- Normalizr funciona definiendo esquemas y luego declarando cómo estos esquemas se representan a través de entidades.
- El único requisito es que cada entidad (publicación, comentario, autor) tenga la propiedad ‘id’. Se puede cambiar con la opción idAttribute

## Resultado
- Este objeto es el resultado del proceso de normalización.
- Los datos están agrupados por ‘entidades’, y ‘result’ es el punto de entrada. 
- Logramos desanidar y aplanar la información. Esto nos va a ayudar a quitar redundancias.


# Ejemplo 2

## Proyecto normalizacion y desnormalizacion en JSON con redundancia

1. Vamos a trabajar con el objeto del blog, pero ahora añadiéndole información redundante que va a ser optimizada por Normalizr.
2. Dispondremos de un array de artículos, donde habrá autores y comentadores.
3. El autor de un artículo puede ser comentador de otro y viceversa.
4. De esta manera habrá duplicación de información, lo que producirá que el objeto no posea información centralizada y sea más extenso.
5. Definiremos un conjunto de esquemas para quitar esas redundancias.
6. Primero mostraremos el objeto original y su longitud en bytes, luego normalizaremos y comprobaremos los datos.
7. Por último desnormalizaremos, verificando los datos originales.

- Node.js proporciona una función inspect provista en el módulo util con fines de depuración. Esta devuelve una representación de cadena de un objeto que puede ser grande, complejo y con un alto nivel de anidamiento.
- Formato: 

		util.inspect(object[,showHidden[,depth[,colors]]])

- Ejemplo: 

		util.inspect(myObj,true,7,true)

	- El primer parámetro es el objeto a inspeccionar.
	- El segundo parámetro muestra todas las propiedades ocultas y no ocultas.
	- El tercer parámetro indica hasta qué profundidad es analizado el objeto.
	- El cuarto parámetro colorea la salida.


