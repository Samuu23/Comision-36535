# Teoría

## ¿Qué son las Cookies?

Las Cookies son archivos que podemos guardar del lado del cliente, en el navegador del usuario.

## Caracteristicas de las Cookies

- A las cookies se les puede configurar un tiempo de vida. Una vez finalizado el mismo, la cookie se elimina del navegador.
- Al almacenarse del lado del cliente, el espacio con el que se cuenta es limitado, por lo que se recomienda elegir de forma adecuada lo que se vaya a guardar como cookie.
- Hay que recordar que no se deben almacenar datos sensibles en las cookies.

> Empezando a usar Cookies

## Signed Cookies

- A las cookies se les puede agregar un mecanismo de validación que consiste en adjuntar a cada cookie una versión encriptada de su contenido. 
- Dicha encriptación se realiza mediante una palabra clave o “secreto” definido del lado del servidor, y desconocido por los clientes. 
- El servidor es capaz de verificar si la cookie que se recibe desde el cliente ha sido adulterada o no, chequeando contra la versión encriptada.

### cookieParser(secret)

- Secret: string o array de strings que se utiliza para firmar las cookies enviadas, y para analizar las recibidas.
	- Es opcional y, si no se especifica, no firmará ni analizará las cookies recibidas. 
	- Si es un string, se utiliza como secret. Si es un array de strings, se firmará la cookie con cada string en el orden provisto (y lo mismo al analizar).

## Crear una Cookie Firmada
- Para firmar una cookie antes de enviarla al cliente, solo basta con agregar a los dos argumentos usuales (nombre y valor), un tercer argumento de tipo objeto (como se hizo para setear la expiración) con la propiedad “signed” en true. { signed: true }
- Las cookies firmadas recibidas, que hayan pasado la verificación de su firma, ya no se encontrarán en req.cookies, sino que aparecerán en req.signedCookies. Aquellas que no hayan pasado la verificación, no aparecerán, como si no existieran.

## ¿Qué es Session Memory?

Session es un paquete de Node, el cual permite que una variable sea accesible desde cualquier lugar del sitio. Se almacena del lado del servidor.

## Caracteristicas de Session Memory

- La información que se quiera guardar en session se almacena del lado del servidor.
- Del lado del cliente, se crea un identificador único para poder acceder a esa información desde el navegador.
- Los datos almacenados en session se borran al cerrar la ventana del navegador.
- Se utiliza principalmente para guardar los datos de usuario al iniciar sesión.

> Empezando a usar Session
