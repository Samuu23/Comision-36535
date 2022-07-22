# Comenzando con Twilio-Whatsapp

1. Ingresamos de nuevo a la cuenta de Twilio que nos creamos la última actividad, volvemos al menú de mensajes, y activamos nuestro sandbox (espacio de pruebas).
2. El cliente para realizar la prueba va a tener que enviar un mensaje con un código que suele ser join alguna-cosa al número que nos ofrece Twilio.
3. Vamos entonces a nuestro Whatsapp y enviamos el mensaje. De esta forma ya nos queda configurado para recibir los mensajes que enviemos desde nuestro proyecto.

4. De igual forma que vimos la clase pasada con SMS, configuramos Twilio, especificando antes del número que es mensaje de Whatsapp.

		const options = {
		   body: 'Hola soy un WSP desde Node.js!',
		   mediaUrl: [ 'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg' ],
		   from: 'whatsapp:+14155238886',
		   to: 'whatsapp:+5491100000000'
		}

👉 En este ejemplo, enviamos con mediaUrl un adjunto en el mensaje. Esto es opcional, si no se desea enviar adjuntos.

5. Vamos nuevamente a nuestro Whatsapp y podemos corroborar que haya llegado el mensaje que enviamos (una vez que ejecutamos el código de nuestro proyecto).


