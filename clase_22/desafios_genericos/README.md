# Consignas

1. Normalizar con JSON

	1. Normalizar la estructura del objeto en formato JSON empresa.json (disponible en la carpeta de la clase) que describe el organigrama de una empresa. El gerente y el encargado figuran en el array de empleados de la empresa.
	2. Imprimir por consola el objeto normalizado y la longitud del objeto original y del normalizado. Comparar los resultados.

Nota: En adelante, utilizar la siguiente función 'print' para imprimir el contenido de un objeto:

		const util = require('util')
		function print(objeto) {
		    console.log(util.inspect(objeto,false,12,true))
		}

2. Desnormalizar con JSON

	- Desnormalizar el objeto del ejercicio anterior, imprimiéndolo por consola junto a su longitud.
	- Comparar el objeto original con el desnormalizado.

3. Normalizacion y Desnormalizacion

Dado el objeto en formato JSON holding.json (disponible en la carpeta de la clase) que representa la información correspondiente a un grupo de empresas:

	1. Definir el esquema de normalización.
	2. Obtener el objeto normalizado e imprimirlo por consola.
	3. Desnormalizar el objeto obtenido en el punto anterior.
	4. Imprimir la longitud del objeto original, del normalizado y del desnormalizado
	5. Imprimir el porcentaje de compresión del proceso de normalización.

Comparar y analizar los resultados.
