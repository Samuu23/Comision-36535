# Teoría

## Objetivos

- Conocer el módulo Nodemailer para el envío de mails desde una App de Node.
- Enviar mails con un servidor sin autenticación y con Gmail.
- Conocer el módulo Twilio para el envío de SMS desde una App de Node.

## Nodemailer

- Nodemailer es un módulo para aplicaciones Node que permite el envío de correos electrónicos de forma sencilla.
- El proyecto comenzó en 2010 cuando no había una opción sensata para enviar mensajes de correo electrónico. 
- Hoy es la solución a la que la mayoría de los usuarios de Node recurren por defecto.

## Caracteristicas

- Implementación en un solo módulo con cero dependencias.
- Gran foco en la seguridad.
- Proxies para conexiones SMTP.
- Compatibilidad con Windows: se instala con NPM como cualquier módulo.
- Compatibilidad con contenido HTML y la alternativa de texto sin formato.
- Posibilidad de agregar archivos adjuntos a los mensajes.
- Entrega segura de correo electrónico utilizando TLS / STARTTLS.
- Diferentes métodos de transporte además del soporte SMTP incorporado.
- Autenticación Sane OAuth2.

> Enviar Mails con Ethereal

> Enviar Mails con Gmail

## Twilio SMS

- Twilio es un servicio de comunicación en la nube que permite un sin fin de procesos como lo son: enviar y recibir sms, enviar y recibir llamadas de voz, enviar y recibir llamadas de video y muchos más.
- Actúa como intermediario, ofreciendo un WebHook HTTPS para que se envíe una solicitud POST a la URL que queramos cada vez que se reciba un mensaje y responder en esa misma solicitud.
- El módulo de Node twilio ayuda a escribir el código de los request HTTP a la API de Twilio.
- Con el registro en la página, Twilio nos regala 15 USD para comenzar a probar sus servicios.

## Comenzando con Twilio

- Ingresamos en Twilio para comenzar a crear una cuenta desde “Sign up”.
- Completamos los datos e iniciamos nuestro período de prueba gratis. Luego, vamos al login e iniciamos sesión con el mail con que nos registramos.
- Vemos que como prueba, Twilio nos da una cantidad de USD para usar para SMS y un número que es el número de salida. Este es el número que el usuario verá cuando le llegue el mensaje, el número desde el que se envía.
- Luego, vamos a verified numbers y vemos los números que están verificados para poder enviarles mensajes desde nuestra cuenta de prueba.
- Acá podemos ingresar un número de teléfono e invitarlo a colaborar con nuestra cuenta. Recibirá un código, que debemos ingresar aquí para confirmar la verificación. A continuación ya podemos enviarle SMS desde Twilio.
- Para poder enviar mensajes a Argentina, hay que configurarlo.

## Configurar Twilio en nuestra App

- Vamos ahora a nuestro proyecto e instalamos Twilio como dependencia.

		$ npm i twilio

		import twilio from 'twilio'
		
		const accountSid = 'xxxxxxxxxxxxxxxx'
		const authToken = 'xxxxxxxxxxxxxxxxx'
		
		const client = twilio(accountSid, authToken)
		
		try {
		   const message = await client.messages.create({
		      body: 'Hola soy un SMS desde Node.js!',
		      from: '+14156884237',
		      to: '+541199998888'
		   })
		   console.log(message)
		} catch (error) {
		   console.log(error)
		}

- Finalmente, si vamos al celular del número al que le enviamos el mensaje, chequeamos que haya llegado.
- Luego configuramos el envío de mensajes como muestra el siguiente código.
- Los datos de accountSid y authToken lo sacamos de la cuenta de Twilio que creamos.
