# Consignas

1. Enviar mail desde Node con Ethereal

Realizar un módulo Node.js llamado 'enviarmail', que cada vez que se lo ejecute envíe un correo electrónico hacia una cuenta Ethereal (https://ethereal.email/) creada para tal fin. 

- El asunto del mail y el mensaje a enviar se recibirán como parámetros por línea de comandos.
- Recordar que si los parámetros CLI contienen espacios, estos deberán están contenidos entre comillas "". El mensaje podrá tener formato HTML.
- Se representará por consola el resultado de la operación.
- Verificar en la cuenta de Ethereal que se haya recibido el mail con el asunto y contenido correspondiente.

2. Enviar mail desde Node con Gmail

- Al ejercicio anterior agregarle un tercer parámetro que indique la cuenta email destino, y un cuarto parámetro opcional, que permita en caso de pasarlo, adjuntar un archivo local (mediante path) al email enviado.
- Se utilizará Gmail como servidor de correo por parte de nodemailer.
- Enviar un email sin adjunto y otro con una imágen.
- Comprobar en ambos casos que los correos lleguen a la cuenta indicada y la información corresponda.

**NOTA**: crear una cuenta de gmail a tal fin y habilitar el acceso a aplicaciones poco seguras.

3. Enviar SMS desde Node

- Realizar en Node.js un programa llamado 'enviarSMS' que permita enviar mensajes de texto.
- Crear a tal fin, una cuenta en Twilio (https://www.twilio.com/) habilitando un número telefónico gratis para la operación.
- El número telefónico destino y el mensaje a enviar se le pasarán a la aplicación por línea de línea de comandos.
- Verificar que el mensaje SMS llegue al número indicado y que la operación se refleje en la consola de Twilio.

**NOTA**: Twilio nos dá un número gratis para el envío de SMS que viene con un monto en USD. Cada vez que enviemos un mensaje, se descontará el costo de la operación de dicho monto.
