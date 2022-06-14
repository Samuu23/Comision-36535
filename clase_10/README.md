# Teoría

## PUG  
### ¿Qué es?  
- Pug JS es un motor de plantillas que nos permite utilizar archivos estáticos como plantillas, enviar valores para reemplazar variables dentro de las mismas y transformar estos archivos en páginas HTML que se envían al cliente.
- Express permite trabajar con muchos motores de plantillas, entre los que se encuentra Pug JS.
- Pug es muy fácil de implementar, solo bastará un par de líneas de código para indicarle a express que use Pug JS como motor de plantillas.

    $ npm install plug

## Configuracion

- El primer paso es crear un directorio en carpeta en la raíz de nuestro proyecto para guardar las plantillas que se utilizarán en la aplicación.
En la imagen (siguiente slide) se puede apreciar el nuevo directorio creado “views” (panel lateral izquierdo).

- Ahora necesitamos indicarle a express que “views” será nuestro directorio de plantillas. Y también indicar cuál será el motor de plantillas que se utilizará (en este caso Pug JS). Lo configuramos con:
    - app.set('views','./views');
    - app.set('view engine', 'pug');

## EJS
### ¿Qué es?
- EJS se encuentra entre los motores de visualización temáticos más populares para node.js y express con 5k estrellas en github y más de 8 millones de descargas por semana en npm.
- EJS significa plantillas de JavaScript incrustadas y podemos usarlo tanto en el lado del servidor como en el del cliente. En esta presentación, nos centraremos en el lado del servidor.
- EJS es fácil de configurar y podemos incluir las partes repetibles de nuestro sitio (parciales) y pasar los datos a nuestras vistas.

    $ npm i ejs

## Configuracion

- Configuramos EJS como el motor de visualización de nuestra aplicación Express usando: 
    
    app.set('view engine', 'ejs')

- Creamos una carpeta de vistas: views
- EJS enviará una vista al usuario usando res.render(). Es importante tener en cuenta que res.render() buscará la vista en una carpeta views.
- Por ejemplo, si definimos pages/index dentro de views, res.render(‘pages/index’) buscará en views/pages/index.
