# Enviar Mails con Ethereal 

1. Ingresamos a la página de la documentación de Nodemailer desde https://nodemailer.com.
2. Nos dirigimos a Ethereal.email (servidor SMPT sin autenticación), donde crearemos una cuenta de mail de testing para luego probar el módulo Nodemailer en nuestro proyecto.
3. Una vez allí, clickeamos en el botón “Create a Ethereal Account” para crear una cuenta..
4. Se genera la cuenta con la que podremos abrirlo desde el botón “Open mailbox”.
5. Podremos ver en el mailbox entonces los mails que enviemos desde nuestra aplicación una vez que comencemos a usarlo.

## Configurar Nodemailer

1. Instalacion

		$ npm i nodemailer

2. Luego, configuramos los mails en el archivo index.js de nuestro proyecto con el código que vemos a continuación.
3. Debemos configurar un transporte donde se indica el puerto, el host (Ethereal en este caso) y el objeto Auth.

Los datos de user y pass del objeto auth del transporte, los obtenemos de la cuenta de Ethereal que nos creamos.


		import { createTransport } from 'nodemailer';
		
		const TEST_MAIL = 'xxxxxxxx@ethereal.email'
		
		const transporter = createTransport({
		   host: 'smtp.ethereal.email',
		   port: 587,
		   auth: {
		       user: TEST_MAIL,
		       pass: 'xxxxxxxx'
		   }
		});
