# Teoría

## Passport-twitter

- La estrategia de Twitter permite a los usuarios iniciar sesión en una aplicación web utilizando su cuenta de Twitter.
- Internamente, la autenticación de Twitter funciona con OAuth 1.0a.
- El soporte para Twitter se implementa mediante el módulo passport-twitter.
- Es prácticamente igual a lo que vimos con Facebook.

## Twitter for Developers

- Para habilitar la autenticación a través de Twitter, primero tenemos que crear una Twitter App utilizando el Twitter Developers.
- Una vez creada la App, necesitamos los datos de App ID y App Secret asignados a la app. Debemos además, especificar una URL para redireccionar al usuario una vez que inicia sesión con Twitter.
- (De igual forma que hicimos con Facebook)
- Para empezar a crear esta app, debemos primero ingresar con nuestra cuenta de Twitter al siguiente link 

## Crear Twitter App

1. Al ingresar con una cuenta válida de Twitter, nos pedirá seguir unos los pasos, completar unos formularios requeridos y finalmente verificar nuestro email.
2. En la barra lateral elegir Overview (dentro de Projects & Apps) y clickear el botón + Create App.
3. Elegir el nombre para la app.
4. Finalmente, nos muestra el API Key y el API Secret Key que es lo que necesitamos para la configuración.
5. Adicionalmente, debemos configurar la aplicación para que pueda ser usada para autenticación.
6. También debemos configurar la aplicación para que pueda ser usada para autenticación...
7. Por último, debemos configurar la aplicación para que pueda ser usada para autenticación...y permitirle a la aplicación acceder a nuestros datos. 

> Empezar a usar passport-twitter

## JSON Web Token (JWT)

- JSON Web Token es un método estándar y abierto para representar reclamaciones de forma segura entre dos partes.
- JWT.IO nos permite decodificar, verificar y generar JWT.
- Básicamente, los JWT son cadenas de datos que se pueden utilizar para autenticar e intercambiar información entre un servidor y un cliente.

## Flujo de Funcionamiento

1. El flujo de funcionamiento es el siguiente:
2. El cliente envía credenciales al servidor.
3. El servidor verifica las credenciales, genera un JWT y lo envía como respuesta.
4. Las solicitudes posteriores del cliente tienen un JWT en los headers de la solicitud.
5. El servidor valida el token y, si es válido, proporciona la respuesta solicitada.

- Las solicitudes posteriores del cliente tienen un JWT en los headers de la solicitud.
- El servidor valida el token y, si es válido, proporciona la respuesta solicitada.
- Si no se valida el token, se niega el acceso.

> Utilizando JWT
