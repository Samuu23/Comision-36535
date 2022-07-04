# Proyecto normalizacion y desnormalizacion en JSON con redundancia

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


