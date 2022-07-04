# Teoría

## DBaaS ¿En que consiste?

- Cuando hablamos de Base de Datos como Servicio (DBaaS) nos referimos a la ejecución y gestión de las bases de datos, optimizadas y alojadas en la infraestructura de un proveedor de servicios cloud.
- De esta manera, para gestionar las bases de datos en el cloud debemos contar con un servicio «por detrás» como PaaS o IaaS, para estar seguros de tener la infraestructura necesaria.

Podemos definir dos modalidades de servicio bien diferenciadas

- Modelo clásico: el cliente hace uso de la infraestructura física del proveedor para alojar sus bases de datos.
- Alojamiento gestionado: el cliente se desentiende de cualquier tarea de mantenimiento y gestión avanzada de la base de datos, que asumirá el proveedor.

## Ventajas 

- Se elimina la infraestructura física de la ecuación ahorrando en costos, ya que el proveedor es responsable del mantenimiento y la disponibilidad de los sistemas. Los usuarios son responsables de sus propios datos.
- Ahorro de costos generalizado. Además de prescindir de las inversiones físicas, con DBaaS se puede tener menos personal dedicado a esta tarea, ahorrar en energía y aprovechar mejor el espacio físico.
- Escalabilidad. Con DBaaS podemos acceder a diferentes tarifas basadas principalmente en el rendimiento deseado y nuestras necesidades.
- Personal cualificado. A través de DBaaS se accede a expertos en bases de datos que se encargarán de todas las tareas de mantenimiento, actualización, seguridad y gestión.

## Mongo Atlas

- MongoDB Atlas es un servicio de Cloud Database (Base de Datos en la Nube), que nos permite crear y administrar nuestra MongoDB desde cualquier lugar del mundo a través de su plataforma.
- MongoDB Atlas está orientado a ser accesible desde el navegador y fue desarrollado con el objetivo de aliviar el trabajo de los desarrolladores, al quitarles la necesidad de instalar y administrar entornos de Base de Datos.

## Caracteristicas destacadas

- Automatización: una manera fácil de crear, lanzar y escalar aplicaciones en MongoDB.
- Flexibilidad: DBaaS con todo lo necesario para las aplicaciones modernas.
- Seguridad: varios niveles de seguridad disponibles.
- Escalabilidad: gran escalabilidad sin interrumpir la actividad.
- Alta disponibilidad: implementaciones con tolerancia a errores y autoreparación predeterminadas.
- Alto rendimiento: el necesario para las cargas de trabajo exigentes.

## Ventajas de Mongo Atlas

- Ejecución
	- Puesta en marcha de un clúster en segundos.
	- Implementaciones replicadas y sin interrupción.
	- Total escalabilidad: escalado horizontal o vertical sin interrumpir la actividad.
	- Revisiones automáticas y actualizaciones simplificadas.
- Protección y seguridad
	- Autenticación y cifrado.
	- Copias de seguridad continuas con recuperación temporal.
	- Supervisión detallada y alertas personalizadas.
- Libertad de movimiento
	- Modelo de planes de precio según demanda: se factura por hora.
	- Compatible con diferentes tipos de de servicios de nube (AWS, GCP, Azure).
	- Parte de un paquete de productos y servicios para todas las fases de la aplicación.

_La configuración se realizará desde una cuenta free. MongoDb Atlas también ofrece una versión de pago._

MongoDB Atlas Website: https://www.mongodb.com/cloud/atlas

## Configuracion de Cuenta
1. Nos dirigimos a la página oficial de MongoDB Atlas: 
2. Seleccionamos START FREE y nos registramos con un correo. También podemos ingresar con Google.
3. Luego nos redireccionará a la próxima ventana donde continuamos haciendo click en Create cluster.
4. Nos redireccionará a un dashboard donde el clúster aún se seguirá creando, pero podemos explorar mientras se crea en segundo plano.
5. Una vez finalizada la creación realizamos lo siguiente:

-> Connect
-> 

Punto 1: MongoDB Atlas nos ofrece una seguridad de conexión por IP, esto quiere decir que podemos configurarlo de 2 maneras:
- Add Your Current IP Address: opción para poner nuestra IP, pero cada vez que cambiemos la PC tenemos que volver a configurar.
- Add a Different IP Address: para configurar una IP que permita las conexiones de cualquier PC, podemos colocar la IP 0.0.0.0/0.

Punto 2: Configuración de usuario de acceso.

## Opciones de Conexion

Después del paso anterior procedemos a obtener la cadena de conexión. Nos aparecerán 3 opciones, de las cuales seleccionaremos una conexión mediante:

- Mongo CLI
- Node.js
- Mongo Compass GUI

Si elegimos la opción 1 obtendremos el string de conexión para vincular la base nube con el cliente CLI Mongo Shell:  
mongo "mongodb+srv://cluster0.nfdif.mongodb.net/myFirstDatabase" --username daniel

Si elegimos la opción 2 obtendremos el string de conexión para vincular la base nube con Node.js:  
mongodb+srv://daniel:<password>@cluster0.nfdif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Si elegimos la opción 3 obtendremos el string de conexión para vincular la base nube con el cliente GUI Mongo Compass:  
mongodb+srv://daniel:<password>@cluster0.nfdif.mongodb.net/test

## Firebase

- Firebase es una plataforma para el desarrollo de aplicaciones web y móviles desarrollada por James Tamplin y Andrew Lee en 2011 y adquirida por Google en 2014, empezando con su producto base: base de datos en tiempo real.
- Firebase permite que, en lugar de hacer peticiones AJAX, el usuario se conecte a la base de datos y automáticamente envíe los datos.
- Firebase puede ser administrado por cualquier aplicación backend y hay múltiples dependencias disponibles para lograr la conexión en cualquier plataforma.

## Ventajas

- No necesitamos casarnos con Firebase, se usa lo que se necesita (por ejemplo quiero sólo Cloud Functions y Remote Config, pero no Real Time database).
- Usa Cloud Storage: base de datos para que usuarios puedan compartir ficheros e imágenes, sin necesidad de hacer bases de datos propias, que para imágenes a veces puede ser un poco ‘tedioso’.
- Usa Cloud Functions: con esto nos ahorramos toda la infraestructura de backend. Es lo que más cobra Google, ya que sabe que es en lo que más ahorramos. Con el plan Blaze con las CF puedes hacer llamadas a tu API, no hay firewalls.

Firebase Website: https://firebase.google.com/

## Firebase y Node

- A modo de ejemplo de interacción de Node.js con Firebase, vamos a crear las operaciones necesarias que son: Crear, Leer, Actualizar y Borrar (o CRUD por sus siglas en inglés).
- En Firebase utilizaremos la opción Cloud Firestore. Esta base de datos NoSQL nos permite guardar los datos en forma de documentos y colecciones. Como ya habíamos visto, esto es similar al concepto de filas y columnas en las bases de datos SQL.
- Vamos a seguir a continuación una serie de pasos para configurar y poder acceder a Cloud Firestore de Firebase.

## Creando un Proyecto  

Vamos a empezar a configurar nuestro entorno, ingresando en la Consola de Firebase: https://console.firebase.google.com/u/0/
