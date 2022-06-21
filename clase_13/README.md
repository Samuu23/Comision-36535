# Teoría

## ¿Qué es un transpilador?  
- Un transpilador es un tipo especial de compilador que traduce de un lenguaje fuente a otro fuente, también de un nivel de abstracción parecido.
- Se diferencia de los compiladores tradicionales ya que estos últimos reciben como entrada archivos conteniendo código fuente y generan código máquina del más bajo nivel.
- La transpilación, que es la acción que realiza el transpilador,  es un caso particular de la compilación.

## Diferencias entre transpiladores y compiladores  
- Los transpiladores y los compiladores traducen código desde un origen hacia un destino.
- La diferencia radica en la relación entre los lenguajes origen y destino de la traducción.
- El transpilador traduce código entre dos lenguajes que están al mismo nivel de abstracción, mientras que el compilador lo hace entre lenguajes de diferente nivel de abstracción

## ¿Qué es Babel?  
- Babel es un transpilador que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node.js entienda.
- Babel funciona mediante plugins con los cuales le indicamos cuál es la transformación que vamos a efectuar.
- Con el plugin babel-plugin-transform-es2015-arrow-functions podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales

## Babel y Nodejs  
- Existen varias formas de utilizar Babel. Vamos a trabajar con la versión en línea de comandos (CLI) que realiza una compilación directa. Para ello:
	1. Creamos un proyecto de Node.js con npm init -y
	2. Instalamos la librería Babel, el cliente, y el plugin

		 $ npm install @babel/core @babel/cli @babel/preset-env

	3. El primer módulo es la librería principal, el segundo es el cliente por terminal, y el tercero es el plugin de configuración para que soporte todos los JavaScript de la nueva generación.

El último paso que nos queda es crear el fichero de configuración de Babel “.babelrc” y decirle con que plugin vamos a trabajar:

		{
			"presets": ['@babel/preset-env']	
		}

Luego vamos a crear un archivo origen.js con el siguiente código:

		const lista = [1, 2, 3]
		lista.map(x => x * x).forEach(x => console.log(x))

## Transpilando con Babel

El código escrito en origen.js pertenece a ES6 ya que usa const y las nuevas arrow functions y queremos que Babel lo convierta a JS5.
Para ello, definimos un script en el package.json:

		"build": "babel ./origen.js -o ./destino.js -w"

La opción -w nos permite transpilar automáticamente ante los cambios en origen.js

Así obtenemos el archivo destino.js que Babel.js nos genera:

		"use strict";

		var lista=[2,3,5,7];
		lista.map(function(x){
		   returnx*x;
		}).forEach(function(x){
		   return console.log(x);
		});

## ¿Qué es TSC?  
- Los archivos de TypeScript se compilan en JavaScript mediante TSC: el compilador de TypeScript
- TSC se puede instalar como paquete TypeScript a través de npm
- Para transpilar los archivos Typescript a Javascript lo hacemos a través de un proyecto en Node.js configurado como se muestra a continuación

## Typescript y Node  
1. Creamos un proyecto de Node.js con npm init -y
2. Instalamos el TSC mediante npm: npm i typescript
3. Creamos un archivo index.ts con contenido en Typescript
4. Transpilamos con el comando: node_modules/.bin/tsc ./index.ts -w
5. Verificamos que en nuestra carpeta de proyecto se encuentre index.js

Siguiendo esta serie de pasos logramos convertir un archivo codificado en Typescript en su equivalente Javascript que pueda ser ejecutado en un navegador o en la plataforma Node.js

## Moduloes en ES6

A partir de ES6 de Node.js admite definir archivos y proyectos como módulos. A diferencia de los archivos y proyectos comunes en JavaScript (“commonJs”), los módulos permiten ser importados en forma asincrónica en lugar de sincrónica, lo cual libera el hilo principal y mejora la performance de los programas (entre otras ventajas). Cuando se trata de proyectos, este cambio se puede realizar fácilmente desde el archivo package.json, agregando el siguiente par clave-valor: "type": "module".

Una vez definido el proyecto como módulo, ya no podremos utilizar la función require para importar otros archivos, ni module.exports para exportar objetos hacia otros archivos.   
Para esto se utiliza la nueva sintaxis, según las siguientes equivalencias:

		// MiClase.js
		class MiClase { }
		module.exports = MiClase
		                                             
		// libreria.js
		function f() { }
		module.exports = { f }
		
		// main.js
		const Clase = require('./MiClase.js')         
		const { f } = require('./libreria.js')

Se haria de esta manera: 
		
		// MiClase.js
		class MiClase { }
		export default MiClase
		                                  
		// libreria.js
		function f() { }
		export { f }
		                                  
		// main.js
		import Clase from './MiClase.js'
		import { f } from './libreria.js'

## Creando un proyecto Typescript en node.js

- Node.js es un entorno de tiempo de ejecución que hace que sea posible escribir JavaScript en el lado del servidor. Esto puede ser difícil a medida que la base de código crece debido a la naturaleza del lenguaje JavaScript: dinámico y con escritura débil.  
- Los desarrolladores que llegan a JavaScript desde otros lenguajes a menudo se quejan sobre su falta de escritura estática fuerte, pero aquí es donde entra TypeScript, para cerrar esta brecha.

- TypeScript puede ayudar a la hora de crear y gestionar proyectos JavaScript a gran escala. Puede verse como JavaScript con funciones adicionales como escritura estática fuerte, compilación y programación orientada a objetos.  
- TypeScript es técnicamente un superconjunto de JavaScript, lo que significa que todo el código JavaScript es código TypeScript válido.

- TypeScript utiliza un archivo llamado tsconfig.json para configurar las opciones del compilador para un proyecto  
- Para crear el archivo tsconfig.json ejecutamos el siguiente comando:  

		$ ./node_modules/.bin/tsc --init    

- Este comando generará un archivo tsconfig.json bien redactado. 

### Configuracion de tsconfig.json
Algunas de las claves más importantes de tsconfig.json

- module: Especifica el método de generación de código del módulo.
- target: Especifica el nivel de lenguaje de salida.
- rootDir: Especifica el directorio raíz de los archivos de entrada. Se usa sólo para controlar la estructura del directorio de salida con outDir.
- outDir: Esta es la ubicación para los archivos .js tras la transpilación.

En la documentación oficial de TypeScript tenemos más configuraciones: 
https://www.typescriptlang.org/docs/handbook/compiler-options.html


