# Consignas

1. Utilizar Git en un proyecto 

- Crea una carpeta local llamada proyectoGit-persona_1.
- Inicializa un proyecto de git en esa carpeta.
- Crea un servidor en node.js y express dentro de esa carpeta que en su ruta raiz devuelva un html, el cual tendrá un título h1 con el contenido: 'Proyecto Node.js con git'. La página web tendrá una hoja de estilos externa que dará color azul a nuestro título y un script externo que represente el contenido del h1.
- Prueba el servidor en forma local.
- Crea el archivo .gitignore agregando la carpeta node_modules para no incluirla en el repo.
- Agrega los archivos en el stage area.
- Commitea los cambios en el repo local con un mensaje que represente la versión inicial: ej: v0.0.1.
- Crea un repo en github llamado proyectoGit.
- Agrega el repo remoto al proyecto de git.
- Sube el repo local al remoto.
- Revisa si en el repo remoto está el código subido con la versión que pusimos en el commit.
- Clona el repo remoto en una carpeta llamada proyectoGit-persona_2
- Restaura las dependencias y verificar que todo funcione en esta carpeta.
- Agrega un subtítulo h2 al documento que diga: '¡Bienvenidos!'.
- Realiza todo lo necesario para subir los cambios al repo remoto desde esta carpeta, con un mensaje de revisión: v0.0.2.
- Verifica en github el código subido con la nueva revisión.
- En la carpeta proyectoGit-persona_1 realiza un pull comprobando que el código quede igual al de la carpeta proyectoGit-persona_2 (sincronizamos el repo local con el remoto).

2. Implementar proyecto en Heroku

- Crea un proyecto de Node.js en Heroku.com utilizando un nombre disponible.
- Clona el proyecto en el ámbito local dentro de una carpeta con el mismo nombre.
- Copia el código del servidor realizado en el desafío anterior dentro de esta carpeta (todo menos la carpeta .git, incluyendo .gitignore). 
- Reforma el título h1 en el html para que diga: 'Proyecto Node.js en Heroku.com'.

👉 No olvides que el puerto de escucha que ofrece Heroku se encuentra disponible en process.env.PORT. El proyecto debe permitir seguir trabajando en local en el puerto 8080.

- Realiza los pasos correspondientes para agregar este código al repo local clonado de Heroku para luego subirlo a Heroku.com
- Comprueba que el servidor funcione correctamente en la nube a través de la url que provee Heroku para este proyecto.
- Agrega una ruta get '/info' que devuelva el mensaje 'Puerto de escucha: ' con el puerto de escucha de node.js. Probar la funcionalidad en forma local.
- Ejecuta los comandos correspondientes para subir esta nueva versión a Heroku.
- Comprueba en la nube la información suministrada por la ruta '/info' verificando que el puerto de escucha sea diferente al puerto 8080 local.
- Revisa los logs de la aplicación en forma local, comprobando que el mensaje inicial del puerto de escucha del servidor (con console.log) coincida con el de la ruta info.

## Comandos

		$ heroku login
		$ git init
		$ heroku git:remote -a <project>
		$ git add .
		$ git commit -m "<message>"
		$ git push heroku <branch>

En caso de agregar mas archivos, volver a hacer a partir del comando "git add ."

