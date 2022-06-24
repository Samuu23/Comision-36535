# Consignas

1. Mensajeria con Webpack

- Crear tres archivos javascript que contengan una variable por cada archivo llamadas mensaje1, mensaje2 y mensaje3 respectivamente. 
- En cada archivo, cargar la variable con un frase y representarla en consola luego de:
	- Un segundo para el caso del mensaje 1.
	- Dos segundos para el mensaje 2. 
	- Tres segundos para el mensaje 3.
- Crear un proyecto que permita utilizar webpack como dependencia de desarrollo para empaquetar los tres archivos en uno sólo.
- Escribir el script correspondiente para ejecutar el proceso automático, generando la versión de producción del proyecto.

2. Perímetro y Superficie

- Crear un proyecto basado en Webpack y Typescript que implemente un servidor node express cuyo punto de entrada será server.ts.
- Se implementará una clase llamada Perimetro que contenga tres métodos estáticos para calcular el perímetro de un cuadrado, un rectángulo y un círculo. Esta clase se guardará en un archivo llamado perimetro.ts 
- En otro archivo llamado superficie.ts se implementará una clase llamada Superficie que contenga tres métodos estáticos para calcular la superficie de las mismas tres figuras.
- Los dos módulos se importarán en server.js.
- Realizar los endpoints get que permitan recibir las peticiones de cálculo con los parámetros correspondientes. La respuesta será en formato objeto y representará el tipo de cálculo, la figura, los parámetros de entrada y el resultado.
- Implementar el tipado en todas las clases y funciones del servidor.
- Probar con el navegador ó cliente http todas las posibles variantes.
