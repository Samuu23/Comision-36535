# Teoría

## ¿Qué es Webpack?  
- Webpack es un empaquetador de módulos (module bundler), que genera un archivo único con todos los módulos que necesita la aplicación para funcionar.
- Permite encapsular todos los archivos JavaScript en un único archivo, por ejemplo bundle.js
- Webpack se ha convertido en una herramienta de build muy versátil.

### Con Webpack se puede...  
- Generar solo aquellos fragmentos de JS que realmente necesita cada página (haciendo más rápida su carga).
- Disponer de varios loaders para importar y empaquetar también otros recursos (CSS, templates, …) así como otros lenguajes (ES6 con Babel, TypeScript, SaSS, etc).
- Utilizar plugins que permiten hacer otras tareas importantes, como por ejemplo minificar y ofuscar el código.

## Webpack y Nodejs  
Existen varias formas de utilizar Webpack. Trabajaremos con la versión en línea de comandos (CLI) que realiza una empaquetación directa:

1. Creamos un proyecto de Node.js con npm init -y
2. Instalamos Webpack y Webpack CLI

		$ npm install webpack webpack-cli

De los dos módulos instalados, el primero es el propio webpack y el segundo es la dependencia para usar webpack desde la consola de comandos (Command Line Interface).

### Empaquetando módulos  
A modo de ejemplo, vamos a generar tres archivos con contenido javascript (a1, a2, a3) y los vamos a empaquetar en un sólo archivo de salida ejecutando un comando definido en el package.json del proyecto:

		"scripts": {
		   "build": "webpack ./a1.js ./a2.js ./a3.js"
		}

Por defecto, esto creará una carpeta dist con un archivo main.js dentro, que contiene la versión empaquetada de todos los archivos especificados.  
En caso de no especificar, buscará un archivo index.js dentro de una carpeta src por defecto, e incluirá en forma recursiva todas las dependencias de ese archivo y de sus dependencias.

El modo modo desarrollo o producción define si el código generado tendrá formato de lectura amigable y comentarios, o si estará minificado, respectivamente.

	
		"scripts": {
		   "build": "webpack ./a1.js ./a2.js ./a3.js --mode=production",
		   "dev": "webpack ./a1.js ./a2.js ./a3.js -w --mode=development",
		   "start": "node ."
		}

Webpack utiliza una versión de una librería interna de node que fue deprecada en Node v17. Para quienes quieran/deban usar esta última versión, pueden agregar una configuración del entorno de ejecución previa al lanzamiento del programa, cargando la siguiente variable de entorno:

(Para linux o mac)

		NODE_OPTIONS=--openssl-legacy-provider npm start

(Para Windows cmd)

		set NODE_OPTIONS=--openssl-legacy-provider && npm start


