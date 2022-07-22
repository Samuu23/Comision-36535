# Teoría

## Objetivos

- Conocer y aprender sobre nvm.
- Conocer acerca de los administradores de paquetes en Node.

## Administradores de Versiones 

- NVM (Node Version Manager) es un script bash simple para administrar múltiples versiones activas de Node en nuestro sistema. 
- Nos permite instalar múltiples versiones de Node, ver todas las versiones disponibles para la instalación y todas las versiones instaladas en nuestro sistema.
- También admite la ejecución de una versión específica de Node, puede mostrar la ruta al ejecutable donde se instaló, y mucho más.

## Instalar NVM en Windows

- Para instalar NMV, debemos primero descargarlo desde la página de versiones de NVM.
- Luego, debemos asegurarnos de eliminar la versión de Node y npm que tengamos instaladas en nuestro sistema, previo a instalar nvm.
- Ejecutar el instalador y seguir los pasos que indica. Aceptar los términos, luego elegir la ruta de instalación. 
- Además, tendremos que definir el directorio de instalación de Node que funcionará como un enlace simbólico que apunta a la versión actualmente utilizada de Node.

## Comandos NVM

		$ nvm
		$ nvm list
		$ nvm install 14.15.4

- Finalmente, después de instalar una versión específica de Node, podemos cambiar nvm para usar esa versión con:

		$ nvm use 14.15.4

- Deberíamos obtener en la salida:

		Now using node v14.15.4 (64-bit)

- Además, podemos verificar la versión de Node que estemos utilizando actualmente con:

		$ node --version

- Y para verificar la versión de npm:    

		$ npm -- version

## Instalar NVM en Linux

- Esta secuencia de comandos de instalación automática clona el repositorio nvm en ~/.nvm en su directorio de inicio y agrega los comandos de origen necesarios a las secuencias de comandos de inicio de nuestra shell, es decir, ~/.bash_profile, ~/.zshrc, ~/.profile o ~/.bashrc, según el programa de shell que estemos utilizando.
- Verificar la instalación de nvm con el comando:

		# command -v nvm

- Para descargar, compilar e instalar la última versión de Node, ejecutar el siguiente comando:

		$ nvm install node

- Para instalar una versión específica de Node, primero listar todas las versiones disponibles con el comando: 

		$ nvm ls-remote

- Luego si instalar la versión deseada con el comando:

		$ nvm install 10.15.3

- Es posible verificar todas las versiones de Node instaladas con el comando:

		$ nvm ls

- Podemos usar la versión de Node que queramos dentro de las instaladas con el comando:

		$ nvm use node # use default
		OR
		$ nvm use 10.15.3

- Alternativamente, podemos usar la versión de Node directamente ejecutándola:  

		$ nvm run node # run default
		OR
		$ nvm run 10.15.3

- Es importante destacar que podemos ver la ruta al ejecutable donde se instaló una versión de Node específica de la siguiente manera:

		$ nvm which <version>

- Además, para configurar manualmente una versión de Node predeterminada que se utilizará en cualquier shell nuevo, utilizar el alias "predeterminado" como se muestra.

		$ nvm alias default <version>

- Podemos crear un archivo de inicialización .nvmrc en el directorio raíz de nuestro proyecto (o en cualquier directorio principal) y agregar un número de versión de Node o cualquier otro indicador u opción de uso que nvm comprenda. Luego utilizamos algunos de los comandos que acabamos de ver para operar con la versión especificada en el archivo.
- Para obtener más información, podemos consultar el comando nvm --help o entrar al repositorio de Github de Node Version Manager: https://github.com/nvm-sh/nvm.

## Administradores de Paquetes

- Al desarrollar y usar aplicaciones Node, un software común en el que los desarrolladores y los usuarios generales siempre confían es un administrador de paquetes.
- Un administrador de paquetes de Node interactúa con los repositorios de paquetes en línea (que contienen bibliotecas, aplicaciones y paquetes) y ayuda de muchas maneras, inclusive con la instalación de paquetes y la administración de dependencias. 
- Algunos administradores de paquetes también cuentan con componentes de administración de proyectos.

Ayuda a especificar la biblioteca como una dependencia para su aplicación, de modo que, en cualquier sistema donde esté instalada la aplicación también se instalará la biblioteca, para que la instale corectamente

## NPM

- Npm (Node Package Manager) es un administrador de paquetes de Node multiplataforma que fue desarrollado para ayudar a los desarrolladores de JavaScript a compartir fácilmente su código en forma de paquetes.
- Npm puede descargar paquetes y buscar actualizaciones de los paquetes que ya has instalado
- Estos son componentes principales:
	- Interfaz de línea de comandos CLI.
	- Repositorio.
	- Website.

## Yarn

- Yarn no solo es un administrador de paquetes rápido, seguro, confiable y de código abierto, sino que también es un administrador de proyectos para proyectos estables y reproducibles.
- Tiene un hilo, que permite que la velocidad de instalación de paquetes sea mayor que en npm. Esto además, soluciona los problemas de npm de que se puedan ejecutar programas mientras se está instalando módulos y de que la seguridad no es alta.
- Cuando algunos módulos se instalan a través del hilo, pueden instalarse nuevamente sin conectarse a la red. El hilo también puede controlar la versión de la que depende el módulo, y es seguro y confiable.

- Primero se instala en forma global, directamente desde npm:

		$ npm install -g yarn

- Podemos verificar su correcta instalación solicitando ver la versión actual:

		$ yarn version

- Para inicializar un proyecto, desde el directorio raíz del mismo ejecutamos:

		$ yarn set version latest && yarn init -y

- Para instalar o desinstalar dependencias usamos los comando add y remove:

		$ yarn add <package-name> [--dev]
		$ yarn remove <package-name>

## PNPM

- Pnpm es un administrador de paquetes de código abierto, multiplataforma, rápido y eficiente en el espacio en disco.
- A diferencia de npm y yarn, que crean un directorio plano node_modules, pnpm funciona de forma un poco diferente: crea un diseño no plano node_modules que utiliza enlaces simbólicos para crear una estructura anidada de dependencias.
- Los archivos dentro de node_modules están vinculados desde un único almacenamiento direccionable por contenido. Este enfoque es eficaz porque le permite ahorrar gigabytes de espacio en disco.
- pnpm también admite alias que le permiten instalar paquetes con nombres personalizados, completar la pestaña de la línea de comandos y usa un archivo de bloqueo llamado pnpm-lock.yaml.

## NPM Caracteristicas

- NPM ya viene incluido con la instalación de Node.
- Podemos utilizar el website para descubrir paquetes, configurar perfiles y administrar otros aspectos de nuestra experiencia npm. 
- El CLI se ejecuta desde una terminal y es la forma en que la mayoría de los desarrolladores interactuamos con npm (por ejemplo: npm install).
- Este es un repositorio en línea seguro para la publicación de proyectos Node de código abierto, como bibliotecas y aplicaciones.
- Para instalar y publicar paquetes, los desarrolladores utilizan un cliente de línea de comandos llamado npm, que también se utiliza para la gestión de versiones y la gestión de dependencias.
- Podemos usar de forma gratuita, una opción que nos permite crear paquetes públicos, auditar dependencias, publicar actualizaciones, entre otros.
- npm se usa para instalar todos los demás administradores de paquetes de Node que vimos.
- npm también es compatible con la seguridad de JavaScript, y puede integrarse con herramientas de terceros.

- Npm tiene muchos usos, algunos de ellos son:
	- Adaptar paquetes de código para aplicaciones o incorporarlos tal como están.
	- Descargar herramientas independientes que podemos usar de inmediato.
	- Ejecutar paquetes sin descargarlos usando el comando npx.

Además: 

- Actualizar las aplicaciones fácilmente cuando se actualice el código.
- Compartir código con cualquier usuario de npm, de cualquier lugar.
- Restringir el código a desarrolladores específicos.
- Administrar múltiples versiones de código y de dependencias.

## Package.json

Cada proyecto en JavaScript – ya sea Node o una aplicación de navegador – puede ser enfocado como un paquete npm con su propia información de paquete y su archivo package.json para describir el proyecto.

- package.json se generará cuando se ejecute npm init para inicializar un proyecto JavaScript/Node, con estos metadatos básicos proporcionados por los desarrolladores:
	- name: el nombre de tu librería/proyecto JavaScript
	- version: la versión de tu proyecto.
	- description: la descripción del proyecto
	- license: la licencia del proyecto

## NPM Scripts

package.json también soporta la propiedad scripts que puede definirse para ejecutar herramientas de línea de comandos que se instalan en el contexto local del proyecto. Por ejemplo, la porción de scripts de un proyecto npm puede tener un aspecto similar a este:

## Dependencies vs DevDependencies

- Ambos vienen en forma de objetos clave-valor (key-value) con los nombre de las librerías npm como clave y sus versiones en formato semántico como valor.
- Las dependencias se instalan mediante el comando npm install con las banderas --save y --save-dev. 
- Están pensadas para ser usadas en entornos de producción y desarrollo/prueba respectivamente.

## package-lock.json

Este archivo describe las versiones exactas de las dependencias utilizadas en un proyecto de JavaScript npm. Si package.json es una etiqueta descriptiva genérica, package-lock.json es una tabla de ingredientes.

- Así como no solemos leer la tabla de ingredientes de un producto, package-lock.json no está pensado para ser leído línea por línea por los desarrolladores (a menos que estemos desesperados por resolver problemas de "funciona en mi máquina").
- package-lock.json es usualmente generado por el comando npm install, y también es leído por nuestra herramienta npm CLI para asegurar la reproducción de los entornos de construcción para el proyecto con npm ci (clean install) en lugar de npm i (regular install).

## NPM install

- Este es el comando más utilizado en el desarrollo de aplicaciones JavaScript/Node hoy en día.
- Por defecto, npm install <nombre del paquete> instalará la última versión con el signo ^. Un npm install dentro del contexto de un proyecto npm descarga los paquetes en la carpeta node_modules del proyecto según las especificaciones de package.json, actualizando la versión del paquete (y a su vez regenerando package-lock.json) donde pueda basándose en la coincidencia de las versiones ^ y ~.
- Podemos especificar una bandera global -g si deseamos instalar un paquete en el contexto global que podremos utilizar en cualquier lugar de nuestra computadora.

## NPM ci

- Al igual que si package-lock.json no existe ya en el proyecto se genera cada vez que se llama a npm install, npm ci consume este archivo para descargar la versión exacta de cada paquete individual del que depende el proyecto.
- Así es cómo podemos asegurarnos de que el contexto de nuestro proyecto se mantiene exactamente igual en las diferentes máquinas, ya sean nuestras laptops utilizadas para el desarrollo o CI (Integración Continua).

## NPM Audit

- Con el enorme número de paquetes que se han publicado y que pueden ser fácilmente instalados, los paquetes npm son susceptibles a los malos autores con intenciones maliciosas.
- Al darse cuenta de que había un problema en el ecosistema, la organización npm.js tuvo la idea de npm audit. Mantienen una lista de lagunas de seguridad para que los desarrolladores puedan auditar sus dependencias con el uso del comando npm audit.
- npm audit da a los desarrolladores información sobre las vulnerabilidades y si hay versiones con correcciones a las que actualizar.
- Si las correcciones están disponibles en las próximas actualizaciones de versiones que no sean de última hora, se puede utilizar npm audit para actualizar automáticamente las versiones de las dependencias afectadas.

## Empzando a usar NPM

- En primer lugar, vamos a crearnos una cuenta en npm. Luego veremos cómo subir nuestros propios paquetes.
- Entramos entonces en la página de npm con el link https://www.npmjs.com/signup y llenamos el formulario de registro.

Vemos entonces, una vez que tenemos nuestro usuario de npm, todo lo que podemos hacer desde allí.

## Creando nuestro paquete NPM

Como usuarios de npm, podemos crear paquetes sin ámbito para usar en nuestro propios proyectos y publicarlos en el repositorio público de npm para que otros los usen en sus proyectos.

- En primer lugar, debemos chequear si tenemos instalada la versión actualizada de npm, sino, usamos este comando para instalarla:

		$ npm install npm@latest -g 

- Para comenzar a crear un paquete para npm, primero debemos crearnos el proyecto de Node en nuestra computadora.
- Recordar siempre, crear el archivo README con información acerca del paquete, qué funcionalidades tiene, y cómo lo podemos utilizar.
- Es recomendable subir nuestro paquete a un repositorio remoto por ejemplo en Github.
- Antes de publicar nuestro paquete en npm, se recomienda testearlo.

- Una vez que lo hayamos probado y funcione todo correctamente, en la consola al directorio de nuestro paquete e iniciamos sesión en npm con el comando npm login y nuestros datos de usuario y contraseña de la cuenta que nos creamos en npm.
- Luego, lo publicamos en npm con el comando npm publish.
- Para removerlo, utilizamos el comando:
- npm unpublish <nombre-paquete>

- Ahora que ya publicamos nuestro paquete, podemos visualizarlo desde la página de npm entrando a https://npmjs.com/package/*package-name.
- Hay que tener en cuenta que no puede haber dos paquetes de NPM con el mismo nombre, por lo que, si el que pusimos ya existía vamos a tener que cambiarlo.
- Además, si actualizamos el paquete, cuando lo hagamos debemos volver a ejecutar el comando de npm publish. Hay que asegurarse de actualizar el package.json a la última versión para que npm no lo rechace al querer publicarlo.


