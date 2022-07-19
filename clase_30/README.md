# Teoría

## Servidor Proxy
 
- Es un servidor que hace de intermediario entre las conexiones de un cliente y un servidor de destino, filtrando todos los paquetes entre ambos.
- Sin el proxy, la conexión entre cliente y servidor de origen a través de la web es directa.
- Se utiliza para navegar por internet de forma más anónima ya que oculta las IP, sea del cliente o del servidor de origen.
- Por ser intermediario, ofrece funcionalidades como control de acceso, registro del tráfico, mejora de rendimiento, entre otras.

## Proxy directo (forward)

- Es un servidor proxy que se coloca entre el cliente y la web.
- Recibe la petición del cliente para acceder a un sitio web, y la transmite al servidor del sitio, para que este no se entere de qué cliente está haciendo la petición.
- Lo utiliza un cliente cuando quiere anonimizar su IP. 
- Es útil para mejorar la privacidad, y para evitar restricciones de contenido geográfico (contenido bloqueado en cierta región).

## Proxy inverso (reverse)

- Es este caso, el servidor proxy se coloca entre la web y el servidor de origen.
- Entonces, el que se mantiene en el anonimato es el servidor de origen. Garantiza que ningún cliente se conecte directo con él y por ende mejore su seguridad.
- En general el cifrado SSL de un sitio web seguro se crea en el proxy (y no directamente en el servidor).
- Además, es útil para distribuir la carga entre varios servidores web.

## Similitudes y diferencias

- Ambos pueden trabajar juntos, ya que no se superponen en su funcionamiento.
- Los clientes/usuarios pueden utilizar un proxy directo y los servidores de origen un proxy inverso.

## Utilizar proxy inverso en  backend

Existen varios beneficios por lo que, al crear un sitio web, conviene utilizar un proxy inverso:

- Balancear la carga: Un solo servidor de origen, en una página con millones de visitantes diarios, no puede manejar todo el tráfico entrante. El proxy inverso puede recibir el tráfico entrante antes de que llegue al servidor de origen. Si este está sobrecargado o cae completamente, puede distribuir el tráfico a otros servidores sin afectar la funcionalidad del sitio. Es el principal uso de los servidores proxy inverso.
- Seguridad mejorada: Al ocultar el proxy inverso la IP del servidor de origen de un sitio web, se puede mantener el anonimato del mismo, aumentando considerablemente su seguridad. Al tener al proxy como intermediario, cualquier atacante que llegue va a tener una traba más para llegar al servidor de origen.
- Potente caching: Podemos utilizar un proxy inverso para propósitos de aceleración de la web, almacenando en caché tanto el contenido estático como el dinámico. Esto puede reducir la carga en el servidor de origen, resultando en un sitio web más rápido.
- Compresión superior: Un proxy inverso es ideal para comprimir las respuestas del servidor. Esto se utiliza mucho ya que las respuestas del servidor ocupan mucho ancho de banda, por lo que es una buena práctica comprimirlas antes de enviarlas al cliente.
- Cifrado SSL optimizado: Cifrar y descifrar las solicitudes SSL/TLS para cada cliente puede ser muy difícil para el servidor de origen. Un proxy inverso puede hacer esta tarea para liberar los recursos del servidor de origen para otras tareas importantes, como servir contenido.
- Monitoreo y registro del tráfico: Un proxy inverso captura cualquier petición que pase por él. Por lo tanto, podemos usarlos como un centro de control para monitorear y registrar el tráfico. Incluso si utilizamos varios servidores web para alojar todos los componentes de nuestro sitio web, el uso de un proxy inverso facilitará la supervisión de todos los datos entrantes y salientes del sitio.

## NGINX

- Nginx es un servidor web, orientado a eventos (como Node) que actúa como un proxy lo que nos permite redireccionar el tráfico entrante en función del dominio de dónde vienen, hacia el proceso y puerto que nos interese.
- Se usa para solucionar el problema que se genera al correr nuestra app Node en el puerto 80, para que sea accesible desde una IP o dominio, y queremos utilizar el mismo puerto con otro proceso.

## Configurar nginx para Windows

- Para configurar Nginx para Windows, primero debemos descargarlo del link: http://nginx.org/en/download.html
- Descargar la última versión mainline.
- Para empezar a configurarlo, en consola (por ejemplo, en el disco C: directamente) descomprimimos el archivo descargado, e inicializamos el Nginx abriendo el ejecutable: nginx.exe
- Observamos la estructura de carpetas del Nginx.
- La configuración se encuentra en la carpeta llamada conf.
- El espacio público está en la carpeta llamada html.
- Luego, para listar los procesos de Nginx, podemos usar el comando tasklist (aunque también podemos usar el Administrador de Tareas).
- Uno de los procesos es el master y el otro es worker.
- Si Nginx no inicia, buscar la razón del error en la carpeta logs/error.log.
- Si no existe el archivo, entonces la razón la encontramos en el Windows Event Log.

Nginx en Windows se ejecuta como una aplicación estándar, pero también se puede operar mediante los siguientes comandos por consola:

		./nginx.exe -s stop  para un apagado rápido.
		./nginx.exe -s quit  para un cierre más elegante.
		./nginx.exe -s reload  para reiniciar el servidor al cambiar la configuración, iniciar nuevos procesos de trabajo con una nueva configuración, cierre elegante de los procesos de trabajo antiguos.
		./nginx.exe -s reopen  para reabrir logs de archivos.

## Nginx con Proxy Inverso

- Vamos a configurar un servidor Nginx para utilizarlo con proxy inverso.
- Para eso, primero, cambiamos el archivo nginx.conf de la carpeta conf del Nginx por el siguiente código.

- Podemos ver que están definidos los dos servidores de Node. 
- El segundo se está usando como balanceador de carga (por eso se pone  weight=3 ). Si no estuviera el peso, la carga se distribuye mitad para cada uno.
- Luego, configuramos el puerto, el nombre del servidor de Nginx y la ruta hacia el espacio público del proyecto en Node. En este caso, un directorio más arriba, dentro del proyecto de servidor node.

## Proyecto en Node para el Nginx

- Luego, creamos un proyecto de Node, donde el server.js lo configuramos de la siguiente forma.
- Debemos tener instalado el módulo PM2 para que todo funcione.
- En el código anterior, vemos que está comentada la línea de código del recurso del espacio público							 .
- Está comentado, ya que si nuestro servidor Node se encargará de recursos, perdería rendimiento.
- Es por eso que Nginx se encarga de ofrecer los recursos estáticos. 
- Con esto hecho, ya podemos iniciar el proyecto de Node, tanto en modo Fork como en modo Cluster.

- Prender el servidor en modo Fork:
		
		$ pm2 start server.js --name="Server1" --watch -- 8081

- Prender el servidor en modo Cluster:

		$ pm2 start server.js --name="Server2" --watch -i max -- 8082

## Ejecutando el server de Nginx

- Luego, con el siguiente comando chequeamos que esté funcionando correctamente. Se debe mostrar en consola los procesos master y worker, como vimos anteriormente: Ahora ya podemos iniciar el Nginx. Para eso, primero lanzamos el ejecutable nginx.exe
- Luego, con el siguiente comando chequeamos que esté funcionando correctamente. Se debe mostrar en consola los procesos master y worker, como vimos anteriormente:

		$ tasklist /fi "imagename eq nginx.exe"

- Si modificamos la configuración, debemos reiniciar el servidor de Nginx para que la misma se ejecute, como lo indicamos en las diapositivas anteriores, a través de la consola, con el comando ‘./nginx.exe -s reload’
- Se puede cambiar la configuración del peso en el balanceador de carga. Si sacamos este, al entrar a localhost/datos, e ir recargando, de forma pareja se ejecuta el puerto 8081, luego el 8082, luego de nuevo el 8081 y así sucesivamente.

Con el peso de 3 en el balanceador (puerto 8082), ejecuta primero el puerto 8081 una vez, luego 3 veces el 8082 y luego vuelve una vez al 8081 y así sucesivamente. Conviene hacerlo así ya que el servidor 8081 está en modo Fork, por lo que tiene menos capacidad de proceso que el 8082 que está en modo Cluster.



