# Teoría

## ¿Qué es y como se utiliza Session MemoryStore?

- Cuando nos manejamos con session-memory, de forma predeterminada estaremos utilizando el almacenamiento en memoria: el memoryStore.
- Al reiniciar el servidor, estos datos se borran, de modo que no tienen persistencia. Por eso, memoryStore solo está disponible en desarrollo (nunca en producción).

>> Para superar esta limitación utilizaremos Session FileStore.

## ¿Qué es y como se utiliza Session FileStore?

- Se utiliza igual que memoryStore, con la diferencia de que se crea una carpeta de archivos en donde se almacenan los datos de session.
- Estos tendrán persistencia, ya que quedarán guardados en el servidor.

> Empezando a usar fileStore

## ¿Qué es REDIS?

- Es un servidor de diccionarios remoto (Remote Dictionary Server).
- Almacén de datos clave-valor en memoria de código abierto que se puede utilizar como base de datos, caché y agente de mensajes.

- Se debe descargar el archivo comprimido y luego agregar la ruta de la carpeta al PATH del sistema.
- Para iniciar el servidor de Redis, en consola: redis-server

## Caracteristicas Redis

- Los datos de Redis se almacenan en memoria del servidor, por lo que el acceso a los mismos es muy rápido.
- Tiene mucha flexibilidad en cuanto a las estructuras de datos que admite (strings, listas, hashes, sets, entre otros). De esta forma, el código queda mucho más simple y con menos líneas.
- Por persistencia, Redis admite copias de seguridad puntuales (guarda el conjunto de datos en el disco).
- Crea soluciones con un alto nivel de disponibilidad, lo que ofrece fiabilidad y rendimiento estables.

## Comando Keys

- Las Redis Keys son binarias y seguras. Esto significa que puede usar cualquier secuencia binaria como clave, ya sea un string o un archivo de imagen.
- El tipo más usado y recomendado por su mayor simpleza es un string como Redis Keys.
- Con el uso de los comandos SET y GET configuramos y recuperamos un valor de un string.

## SET Key Value

- Es el comando con el que se pueden setear nuevos key value.
- Se le puede especificar un tiempo de expiración en segundos o milisegundos.
- Da como respuesta “OK” si el comando SET se ejecutó correctamente y, si hubo algún problema, devuelve “Null”.

## GET Key Value

- Es el comando con el que se puede leer el valor de la key.
- Devuelve un error si el valor de la key es distinto de un string.
- Si se ejecuta correctamente devuelve el valor de la key. Si esta no existe, devuelve la palabra reservada nil.

## TTL Key

- Devuelve el tiempo de vida que le queda a la key, si es que tiene seteado un timeout.
- Permite al cliente chequear por cuánto tiempo más esa key va a ser parte del conjunto de datos.
- Devuelve -1 si la key no existe o no tiene un tiempo de expiración.

> Empezando a usar Redis

## ¿De qué se trata RedisLabs?

- RedisLab es lo mismo que Redis, pero los datos se guardan en la nube.
- Entrando a su página oficial, se crea una cuenta para poder empezar a utilizarlo: https://redislabs.com/

https://redis.com/

## redis-cli

- Redis-cli es la interfaz de línea de comandos de Redis, un programa simple que permite enviar comandos a Redis y leer las respuestas enviadas por el servidor, directamente desde la terminal.
- Para empezar a usarlo seguir los siguientes pasos de comandos en consola:

		redis-cli  para conectar el servidor local.
		redis-cli -h host -p port -a password  para conectar con el servidor remoto.

## ¿Que es Sesiones en Mongo?

Mediante el paquete de Node llamado connect-mongo se puede utilizar la base de datos de MongoDB para persistir los datos almacenados en Session.

> Empezando con connect-mongo
