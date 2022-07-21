# Enviar Mail con Gmail

En la documentación de Nodemailer, podemos ir al apartado de Gmail donde vamos a tener información de cómo utilizarlo.

- Para que nos pueda funcionar Nodemailer con Gmail, una solución propuesta es crear una contraseña alternativa para usar solo en nuestra aplicación. Para generarla, accedemos a está página: https://security.google.com/settings/security/apppasswords
- En el transporter, en lugar del campo host configuramos un campo service como “gmail” y luego el objeto auth con el user y pass generados para nuestra cuenta de Gmail.
- Las opciones de envío son iguales a las del ejemplo anterior

		const transporter = createTransport({
		   service: 'gmail',
		   port: 587,
		   auth: {
		       user: 'mimaildegmail@gmail.com',
		       pass: 'mipassdegmail'
		   }
		});

Una vez que ejecutamos el código podemos ir a la cuenta de Gmail a la que le enviamos el mail y chequear que haya llegado correctamente.

- Podemos agregarle un archivo adjunto al mail que enviamos desde Node.
- Para eso, agregamos en el objeto mailOptions la clave de attachments y dentro la ruta del archivo a adjuntar. 
- Ejecutamos nuevamente el código con este cambio y volvemos a la cuenta de Gmail y vemos que llegó este segundo mail con el archivo que adjuntamos.


