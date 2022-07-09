# Consignas

1. Inyectar Cookies en Frontend

Realizar un programa de backend que permita gestionar cookies desde el frontend. Para ello: 

	- Definir una ruta “cookies”.
	- Definir un método POST que reciba un objeto con el nombre de la cookie, su valor y el tiempo de duración en segundos, y que genere y guarde dicha cookie.
	- Definir un método GET que devuelva todas las cookies presentes.
	- Definir un método DELETE que reciba el nombre de una cookie por parámetro de ruta, y la elimine.

NOTA 1: Utilizar la librería express como estructura de servidor.

NOTA 2: Si algún parámetro recibido es inválido, o directamente inexistente, el servidor devolverá un objeto de error.

Ej:
		{ error: 'falta nombre ó valor' } o { error: 'nombre no encontrado' }. Si todo sale bien, devolver el objeto { proceso: 'ok'}.

NOTA 3: Si el tiempo no está presente, generar una cookie sin tiempo de expiración.

NOTA 4:  Generar los request con varios navegadores (Chrome, edge, Firefox) para simular los distintos clientes en forma local.

2. Sesiones de Usuario en Server

- Realizar un programa de backend que establezca sesiones de usuarios en el servidor.
- Cuando un cliente visita el sitio por primera vez en la ruta 'root', se presentará el mensaje de “Te damos la bienvenida”. 
- Con los siguientes request de ese mismo usuario, deberá aparecer el número de visitas efectuadas. El cliente podrá ingresar por query params el nombre, en cuyo caso se añadirá a los mensajes devuelto.
- Por ejemplo: “Bienvenido Juan” o “Juan visitaste la página 3 veces”. Ese nombre sólo se almacenará la primera vez que el cliente visite el sitio.
- Se dispondrá de una ruta 'olvidar' que permita reiniciar el proceso de visitas para el usuario.
- En caso de que no haya error, se retornará el mensaje “Hasta luego” más el nombre del cliente (de existir); caso contrario un objeto con el siguiente formato: { error : descripción }.
- Luego de requerir esa ruta, el efecto será como el de visitar el sitio por primera vez.

NOTA1: Utilizar el middleware express como estructura de servidor.

NOTA2: Generar los request con varios navegadores (Chrome, edge, Firefox) para simular los distintos clientes en forma local.
