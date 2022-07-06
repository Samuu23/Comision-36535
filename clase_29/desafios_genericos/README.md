# Consignas

1. Servidor Node con Fork
 - Realizar un servidor Node.js basado en express al que se le pase como parámetro el número de puerto de escucha. De no recibir este dato, el servidor iniciará en el puerto 8080.
	- Al ponerse en línea el servidor representará por consola el puerto de conexión y su número de proceso (pid).
	- En el endpoint raíz '/' deberá devolver un mensaje con el siguiente formato:

'Servidor express en (PORT) - PID (pid) - (fecha y hora actual)}'


Poner en marcha el servidor con node (sin nodemon) y verificar en el sistema operativo el proceso de node y su pid. Hacerlo con nodemon y ver la diferencia (constatar que nodemon crea un proceso padre forkeando a nuestro server). En ambos casos el puerto de escucha será el 8081.

2. Servidor Node con Cluster


Tomando como base el ejercicio anterior, agregar la lógica que permita construir un cluster de servidores, poniendo un evento de escucha en cada servidor para reiniciarlo si se cae.

- Representar por consola el número de procesadores detectados, el momento en el que un servidor se cae, el pid de los procesos worker y el del master. 
- Poner en marcha el servidor con node y nodemon en el puerto 8081, verificando en cada caso, la respuesta en su ruta raíz y el número de procesos activos de node en el sistema operativo, relacionándolos con el número de procesadores.
- Finalizar en el sistema operativo un proceso worker comprobando que se reinicia en un nuevo pid.
- Como último identificar el pid del master y finalizar su proceso de node, analizando qué ocurre en el caso de haberlo ejecutado con node y con nodemon.

3. Servidor con Forever

- Poner en marcha tres servidores (con el formato del primer ejercicio: sin cluster) utilizando Forever. Dichos procesos escucharán en los puertos 8081, 8082 y 8083 respectivamente.
- Generar un request a sus rutas raíz comprobando que respondan adecuadamente.
- Verificar en el sistema operativo la cantidad de procesos levantados de node y analizar el porqué.
- Finalizar por sistema operativo el proceso de cada uno de estos servidores, comprobando que Forever los ponga en marcha nuevamente (tendrían que iniciar con un nuevo pid).
- Listar todos los servidores activos y comprobar la finalización de un proceso y de todos por parte de Forever, comprobando en el sistema operativo los procesos de node levantados.

4. Servidor Node con PM2

Poner en marcha dos servidores (con el formato del primer ejercicio: sin cluster) utilizando PM2.

Uno de los servidores escuchará en el puerto 8081 y se ejecutará en modo 'fork'.

- El otro lo hará en el puerto 8082 y se ejecutará en modo 'cluster'.
- Generar un request a cada uno de ellos comprobando que respondan adecuadamente.
- Verificar en el sistema operativo la cantidad de procesos levantados y analizar el porqué.
- Finalizar por sistema operativo el proceso de cada uno de estos servidores (fork y cluster), comprobando que PM2 los ponga en marcha nuevamente (tendrían que iniciar con un nuevo pid).
- Con PM2 listar todos los servidores activos y e ir finalizando los procesos (por id y por name), verificando en el sistema operativo, para cada operación, los procesos activos de node.
