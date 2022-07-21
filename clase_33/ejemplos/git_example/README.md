# Uso de GIT y Comandos

1. Instalacion 

		https://git-scm.com/downloads

2. Luego, con el siguiente comando en consola podemos chequear que se haya instalado correctamente y la versión instalada.

		$ git --version

3. Si se instaló bien, en consola nos debe salir algo parecido a esto:

		git version 2.30.0.windows.2
		
## Repositorio remoto en Github

Para trabajar con los repositorios en forma remota vamos a usar Github.

1. Para esto, debemos crearnos una cuenta en su página https://github.com/
2. Entramos a la página y hacemos click en el botón de registro (sign up).
3. Llenamos el formulario y ya tenemos nuestra cuenta de Github para subir los repositorios.

Podemos crear un repositorio directamente remoto en el Github, luego usarlo localmente y subir los cambios.

Para crear un repositorio remoto desde nuestra cuenta, vamos al botón “+” y elegimos “New Repository”.

- Solo es necesario elegir el nombre del repositorio y ponerlo en “Repository name”.
- Los repositorios en general en Github los hacemos públicos.
- Se puede agregar un archivo README para poner especificaciones o explicaciones del proyecto que va a tener el repositorio.

## Crear un repositorio local

- Para crear un repositorio local, abrimos una consola en la carpeta en la que queremos que se cree y ponemos el comando:

		$ git init

- Ya tenemos entonces una carpeta vacía en la que podemos agregar los archivos de nuestro proyecto y usar los comandos de Git.
- Para configurar este repositorio para poder luego subirlo a nuestra cuenta de Github, usamos los siguientes comandos de consola:

		$ git config user.name "<usuario de github>"
		$ git config user.email "<mail de cuenta de github>"

- Para conectar el repositorio local creado con el que creamos remoto en Github, primero debemos obtener la url del repositorio remoto, abiréndolo desde nuestra cuenta de Github. El link debe ser de la forma:

**https://github.com/username/repositoryName.git**

- De este modo, en consola, en la carpeta que tenemos el repositorio local, ponemos el comando:

		$ git remote add origin https://github.com/username/repositoryName.git

- Podemos agregar los archivos de nuestro proyecto al repositorio local con el siguiente comando:
	- Para agregar un solo archivo: $ git add <nombre del archivo> 
	- Para agregar todos los archivos que no estén ya en el repositorio o que hayan tenido cambios: $ git add .
- Luego, debemos hacer un commit de los archivos agregados para generar un punto en la línea de tiempo y entonces poder volver a ese punto en caso de errores posteriores, es decir, controlar las versiones.
- Usamos el comando:

		$ git commit -m "Nombre de commit"

- Luego, para subir los archivos que agregamos del repositorio local al remoto usamos el comando:

		$ git push origin master

- Para descargar archivos al repositorio local que están en ell repositorio remoto usamos el comando:

		$ git pull origin master

👉 Pueden ser, por ejemplo, archivos subidos por otro usuario al mismo repositorio y entonces no lo tendremos en el local.

- Si estamos trabajando en equipo, uno de los integrantes puede crear el repositorio y subir al repositorio remoto los archivos iniciales del proyecto con los comandos que ya vimos.
- Si queremos tener luego ese repositorio localmente en nuestras computadoras, vamos a tener que clonarlo.
- Para eso, necesitamos la misma url del repositorio remoto que usamos anteriormente (del repositorio que nos queramos clonar) y usamos el siguiente comando en consola en la carpeta en la que queremos que esté el proyecto:

		$ git clone https://github.com/username/repositoryName.git

## Trabajando con Branches en Git

Las ramas (branches) son utilizadas para desarrollar funcionalidades aisladas unas de otras.

- La rama master es la rama principal y "por defecto" cuando creas un repositorio. Es la rama de producción que se suele usar solo para lo que ya esté listo.
- Luego, se suele tener una rama llamada dev, en la cual se van fusionando las nuevas funcionalidades una vez que se desarrollan y se aprueba su correcto funcionamiento. Es la rama de desarrollo.
- Finalmente, se van creando otras ramas para ir desarrollando las distintas funcionalidades y no tener problemas por posibles errores que puedan surgir de estos cambios (se hace de forma aislada).

- Para crear una nueva rama y posicionarnos sobre ella en el repositorio usamos el comando:
		
		$ git checkout -b <nombre rama>

- Para cambiar entre ramas ya creadas (master/main o cualquier otra) usamos el comando:
		
		$ git checkout <nombre rama>

- Para ver el listado de todas las ramas del repositorio:

		$ git branch

- Para borrar una rama creada usamos el comando:

		$ git branch -d <nombre rama>

## Subir y descargar de ramas

- Todos los comandos anteriores se ejecutan sobre el repositorio local.
- Para que la rama se cree luego en el repositorio remoto, hay que hacerle un push:

		$ git push origin <nombre rama>

- Para actualizar el repositorio local en una rama en particular que se pudo haber actualizado en el remoto, nos posicionamos en la consola en el proyecto y vamos a la rama que queremos actualizar. Ahí ejecutamos el comando:

		$ git pull

## Fusionar ramas

- Una vez que terminamos la funcionalidad en una rama, debemos fusionarla a la rama de Dev o Master, según como estemos trabajando.
- También, nos puede pasar que para desarrollar una funcionalidad necesitamos funcionalidades de otra rama que todavía no fue fusionada a Dev o Master, entonces debemos fusionarla con la nuestra.
- Para hacer esto, nos paramos en la consola sobre la rama a la que le queremos fusionar cosas, y ejecutamos el comando de Merge:

		$ git merge <nombre de rama que queremos fusionar>

## Otros comandos

- Cambiar el nombre por defecto de una rama (branch)

		$ git config --global init.defaultBranch main
