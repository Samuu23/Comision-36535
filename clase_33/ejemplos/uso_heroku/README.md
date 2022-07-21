# Empezando a usar Heroku

- Para empezar a usar Heroku, primero debemos hacer es crear una cuenta en Heroku login.
- Llenamos el formulario de registro seleccionando **Node** como lenguaje de desarrollo.
- Vamos al mail con el que nos registramos, y confirmamos el mismo con el link que nos envía Heroku.
- Debemos ahora elegir una contraseña, y luego podremos iniciar sesión.
- Luego tenemos que aceptar los términos y condiciones.
- Ya podemos ahora crear nuestra primera App en Heroku. Elegimos el nombre y la región y la creamos. En este caso la App se llama “serverch”.
- Luego, debemos instalar Heroku CLI con el link que nos aparece abajo donde indica la flecha.

- De esta forma descargamos el Heroku CLI y luego lo instalamos.
- En consola, ponemos el comando $ heroku login y luego hacemos el login desde la página.
- Una vez hecho el login en la página, vemos que en consola lo toma y se loguea.

- Vamos a usar Git para el proyecto, por lo que iniciamos git en la carpeta del proyecto, y usamos luego todos los comandos que se muestran.
- Y en el proyecto, hacemos un server y una ruta que simplemente mande un mensaje.

- Creamos el archivo .gitignore. Lo utilizamos para poner todo lo que no queremos que se suba a Git, como por ejemplo la carpeta node_modules.
- Seguimos estos pasos de comandos en la consola:

- Remarcar que el comando es el último:

		$ heroku git:remote -a <nombre-del-proyecto-creado-en-heroku>

- Y finalmente, para el deploy:

		$ git push heroku <rama-que-quiero-publicar> (en nuestro caso: master)

- Una vez que terminamos los pasos en la consola, vamos al dashboard de Heroku y podemos ver nuestro proyecto subido.

- Abrimos el proyecto y vamos a las configuraciones.

- Probamos el proyecto entrando a la ruta configurada anteriormente para 
- ver que esté funcionando.
- Hacemos un cambio y agregamos la carpeta public chequeando de que esté puesta como tal en el server.js.

- Creamos los archivos en la carpeta public (html, css y js) y como hubo cambios, debemos subir nuevamente con el paso 2 de los comandos de Git los cambios al repositorio remoto en Heroku.
- Finalmente tenemos implementada nuestra App serverch en el servidor online en Heroku.

