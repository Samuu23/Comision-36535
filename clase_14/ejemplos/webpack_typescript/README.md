# Proyecto

## Creación


Desarrollaremos un proyecto en el cual integraremos un servidor en node.js con Webpack y Typescript vinculados, que permitirán importar nuestros módulos CommonJS y ES Modules.  
Vamos a seguir esta serie de pasos para crear el proyecto desde cero   
1. Generamos la carpeta de proyecto
2. Inicializamos un proyecto de node con npm init -y
3. Dentro del proyecto creamos un carpeta src con un archivo index.ts.
4. Instalamos las dependencias de desarrollo:

		$ npm i -D typescript ts-loader webpack webpack-cli webpack-node-externals

5. Instalamos las dependencias del proyecto:

		$ npm i express @types/express

6. Creamos el archivo tsconfig.json (configuración del transpilador typescript) con el comando ./node_modules/.bin/tsc --init
7. Modificamos tsconfig.json dejando la clave "noImplicitAny" en false (deshabilita la generación de errores en expresiones y declaraciones con cualquier tipo implícito)
8. Creamos el archivo webpack.config.js y le agregamos el siguiente contenido:

Propiedades que podemos configurar

- mode: para el modo de trabajo (development ó production)
- entry: para definir el punto de entrada de nuestro código.
- externals: permite el correcto funcionamiento con algunas librerías externas (en este caso, express)
- output: para definir el punto de salida.
- resolve: configura cómo se resuelven los módulos
- module: sirve para aclararle a Webpack cómo debe procesar los loaders que queramos usar para un proyecto.

### webpack.config.js
		const path = require('path');
		const nodeExternals = require('webpack-node-externals');
		
		module.exports = {
		   mode: 'production',
		   entry: './src/index.ts',
		   target: "node",
		   externals: [nodeExternals()],
		
		   output: {
		       path: path.resolve(__dirname, 'dist'),
		       filename: 'main.js',
		   },
		   resolve: {
		       extensions: ['.ts', '.js'],
		   },
		   module: {
		       rules: [
		           {
		               test: /\.tsx?/,
		               use: 'ts-loader',
		               exclude: /node_modules/
		           }
		       ]
		   }
		}

## Aclaraciones

- Los loaders son transformaciones que se aplican en el código fuente de nuestras aplicaciones. Existen decenas de ellos, para usar cantidad de tecnologías y transformar código de preprocesadores, código HTML, Javascript, etc. Son como una especie de tareas que Webpack se encargará de realizar sobre nuestro código, cada una especializada en algo en concreto.
- ts-loader es un TypeScript loader para webpack.
- Mediante las rules definidas dentro de la entrada module, podemos establecer a qué archivos se aplican los loaders que sean necesarios.

En package.json agregamos:

		"main": "dist/main.js"
		"scripts": {
			"build": "webpack",
			"start": "node ."
		}

## Proyecto en marcha  
- Primero ejecutamos **npm run build** .
- Luego, ejecutamos **npm start** que lanzará la aplicación disponible en la carpeta *dist*.
