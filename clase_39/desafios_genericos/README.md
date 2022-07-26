# Consignas

1. Arquitectura MVC con HTML on Wire

- Crear una arquitectura de servidor node.js MVC que permita ingresar personas por nombre, apellido y DNI mediante un formulario ofrecido a través de sus rutas. 
- Por debajo del formulario se representarán en forma dinámica, los datos almacenados en memoria, en forma de tabla.

👉 Realizar este proceso utilizando HTML on wire, creando las rutas necesarias:

- Ruta get '/html-onwire': devolverá una vista dinámica (hbs) que construya el servidor con el formulario y los datos.
- Ruta post '/html-onwire' usada por el formulario html-onwire 

- Utilizar Handlebars del lado servidor (HTML on wire) para generar la vista dinámica.
- Separar el desarrollo del lado servidor en capas: rutas, controlador, negocio y modelo (MVC)

2. Arquitectura MVC con Data on Wire

- Utilizando el servidor del desafío anterior, agregar al proceso HTML on wire, las rutas que permitan mostrar el concepto DATA on wire. Para eso, deberás generar estas nuevas rutas:
	- Ruta get '/data-onwire': devolverá una vista estática (HTML) con el formulario y el código necesario para representar los datos que le lleguen mediante una petición del lado cliente a la ruta '/json'.
	- Ruta post '/data-onwire' usada por el formulario data-onwire 
	- Ruta get '/data-json' : Esta ruta devolverá un objeto JSON con los datos almacenados, utilizada por la vista 'data-onwire'.
- Utilizar Handlebars del lado cliente (DATA on wire) para generar la vista dinámica.
- Seguir utilizando MVC en el desarrollo.

3. Patron Singleton

Tomando como base el proyecto  del desafío anterior, crear un objeto singleton llamado PrimeraConexion que me permita obtener la hora de conexión,  mediante el método obtenerHora, del primer cliente que se conecte a la ruta '/datos'.

El objeto se debe instanciar dentro de dicha ruta y en cada solicitud debe informar esa hora inicial.
