# Teoría

## Objetivos  

- Conocer el pasaje de parámetros al servidor y sus funciones.
- Pasar argumentos en la línea de comandos en Node mediante las librerías Minimist y Yargs.
- Presentar las variables de entorno y su uso.
- Aplicar la librería Dotenv.

## Argumentos en la linea de comandos de Node

- Los argumentos de la línea de comandos son cadenas de texto que se utilizan para pasar información adicional a un programa, cuando se ejecuta una aplicación a través del interfaz de línea de comandos (CLI) de un sistema operativo. 
- Suelen incluir información que se utiliza para establecer la configuración o los valores de propiedad de una aplicación.
- En la mayoría de los casos, los argumentos se pasan después del nombre del programa en su indicador. Un ejemplo de la sintaxis de los argumentos de la línea de comandos se ve así:

		$ [runtime] [script_name] [argument-1 argument-2 argument-3... argument-n]


- El tiempo de ejecución (runtime), en nuestro caso es Node.

## Ventajas

- Puede pasar información a una aplicación antes de que comience. Esto es útil si deseamos realizar ajustes de configuración de gran número.
- Los argumentos de la línea de comandos se pasan como cadenas al programa. Los tipos de datos de cadena se pueden convertir fácilmente a otros tipos de datos dentro de una aplicación, lo que hace que los argumentos sean muy flexibles.
- Puede pasar un número ilimitado de argumentos a través de la línea de comando.
- Los argumentos de la línea de comandos se utilizan junto con scripts y archivos por lotes, lo que es útil para las pruebas automatizadas.

## Desventajas

- La mayor desventaja de pasar información a través de la línea de comandos es que la interfaz tiene una curva de aprendizaje pronunciada, por lo que es difícil de usar para la mayoría de las personas a menos que tengan mucha experiencia en el uso de herramientas CLI.
- Las aplicaciones de línea de comandos pueden ser difíciles de usar a menos que esté usando una computadora de escritorio o portátil, por lo que normalmente no se usan en dispositivos más pequeños como teléfonos o tabletas.

> Uso de process.argv

## Minimist

- Otra forma de recuperar argumentos de línea de comando en una aplicación Node es usando el módulo minimist. 
- Nos permite analizar un array de strings (usualmente obtenido de los argumentos ingresados por línea de comando) y lo transformará en un objeto más fácil de usar, ya que nos permite acceder acceder a los elementos mediante su nombre.

> Usando Minimist

## Yargs

Otro módulo que nos ayudará a analizar los argumentos de la línea de comandos pasados ​​a los programas de Node es el módulo yargs. Inicialmente funciona de igual manera que Minimist, con algunas modificaciones y en su sintaxis. Sin embargo, esta librería posee muchísimas más funcionalidades.

> Usando Yargs

## Variables de Entorno

- Las variables de entorno son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando. Una variable de entorno es simplemente un nombre asignado a un valor.
- Nos permiten administrar la configuración de nuestras aplicaciones por separado de nuestro código base. 
- Las configuraciones separadas facilitan la implementación de nuestra aplicación en diferentes entornos (desarrollo, test, producción, etc).
- Por convención, el nombre se escribe con mayúscula y los valores son cadenas de texto, por ejemplo: PORT=8080.
- Normalmente, nuestras aplicaciones requieren que se establezcan muchas variables de entorno para que funcionen. Al confiar en configuraciones externas, nuestra aplicación se puede implementar fácilmente en diferentes entornos. Estos cambios son independientes de los cambios en el código, por lo que no requieren que nuestra aplicación sea reconstruida.
- Los datos que cambian según el entorno en el que se ejecuta su aplicación deben configurarse como variables de entorno. Algunos ejemplos comunes son:

- Dirección y Puerto HTTP.
- Credenciales de Base de Datos.
- Ubicación de archivos y carpetas estáticos.
- Credenciales de API's externas.

> Usando Variables de Entorno

## Dotenv

- Dotenv es un módulo de Node que carga variables de entorno desde un archivo .env a process.env.
- El desarrollo con múltiples variables de entorno se vuelve rápidamente difícil de mantener. Entonces, utilizamos dotenv para que las variables queden almacenadas todas juntas en el archivo .env.
- En primer lugar, instalamos el módulo con el comando: npm i dotenv
- Luego, creamos el archivo .env, con las variables de entorno que queremos definir. Por ejemplo:

		FONDO=blanco
		FRENTE=negro

> Usando dotenv


