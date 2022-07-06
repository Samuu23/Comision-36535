# Teoría

## ¿Qué es Cluster?

- Cuando hablamos de Cluster nos referimos al uso de subprocesos que permite aprovechar la capacidad del procesador del servidor donde se ejecute la aplicación.
- Como vimos la clase pasada, Node se ejecuta en un solo proceso (single thread), y entonces no aprovechamos la máxima capacidad que nos puede brindar un procesador multicore (múltiples núcleos).
- Al usar el cluster, lo que hacemos es, en el caso de estar ejecutando sobre un servidor multicore, hacer uso de todos los núcleos del mismo, aprovechando al máximo su capacidad.

## ¿Cómo funciona?

- Node nos provee un módulo llamado cluster para hacer uso de esto. El mismo, permite crear fácilmente procesos hijo.
- Lo que hace es clonar el worker maestro y delegarle la carga de trabajo a cada uno de ellos, de esa manera se evita la sobrecarga a un solo núcleo del procesador.
- Con un método similar al que vimos de Fork, se crea una copia del proceso actual. En ese momento, el primer proceso se convierte en maestro o master, y la copia en un trabajador o worker.

## Usar el módulo Cluster

- Primero requerimos el módulo cluster y el http para crear el servidor.
- En la constante numCPUs lo que hacemos es crear tantos workers como CPUs tengamos en el sistema.

- Es habitual hacer que el proceso master se dedique únicamente a gestionar a los workers, y que sean los workers los que hagan el “trabajo sucio”.
- Entonces, si entra al if crea workers, y si va al else abre el servidor. Como vemos en el código.

- Dentro del for, en el proceso master, creamos un worker por cada CPU.
- Con cluster.on y el comando “exit” controlamos la salida de estos workers.
- Como mencionamos antes, en los workers, es decir, cuando cluster.isMaster es falso, creamos un servidor HTTP.
- Recientemente, se ha migrado el uso de isMaster a isPrimary para evitar la alusión a la esclavitud.

## Comandos Utiles

- Si usamos Powershell:
	- tasklist /fi "imagename eq node.exe"
		- lista todos los procesos de node.js activos
	- taskkill /pid <PID> /f
		- mata un proceso por su número de PID
- Si usamos Bash:
	- fuser <PORT>/tcp [-k]
		- encuentra [y mata] al proceso ocupando el puerto PORT

## Modulo Forever

- Cuando ejecutamos un proyecto de Node en un servidor en el que lo tengamos desplegado, dejamos la consola “ocupada” con esa aplicación. Si queremos seguir haciendo cosas o arrancar otro proyecto no podemos, ya que tendríamos que detener la aplicación pulsando Ctrl+C quedando la consola libre nuevamente. 
- Por otro lado, si el servidor se parara por un fallo, nuestra aplicación no se arrancaría de nuevo.
- Ambos problemas se pueden resolver con el módulo Forever de Node.

## Comparacion con Nodemon

- Como ya vimos, cada vez que hacemos cambios en alguno de los archivos del programa, debemos parar e iniciar nuevamente el servidor.
- El módulo Nodemon de Node, evita esto y se reinicia de forma automática ante cualquier cambio en los archivos del programa en ejecución.
- Sin embargo, Nodemon solo nos sirve en desarrollo. Cuando estamos en producción, no se puede hacer uso de este módulo
- Esta es la ventaja de Forever, ya que este puede utilizarse en producción. Además, nos sirve también para reiniciar el servidor ante un fallo del mismo.

## Usando Forever por Linea de Comando

- forever start <filename> [args]: inicia un nuevo proceso
- forever list: lista todos los procesos activos
- forever stop <PID>: detiene un proceso según su id de proceso
- forever stopall: detiene todos los procesos activos
- forever --help: muestra la ayuda completa

Para esto es recomendable haber instalado el módulo en forma global: npm i -g forever

## Módulo PM2

- Es un gestor de procesos (Process Manager), es decir, un programa que controla la ejecución de otro proceso. 
- Permite chequear si el proceso se está ejecutando, reiniciar el servidor si este se detiene por alguna razón, gestionar los logs, etc. 
- Lo más importante es que PM2 simplifica las aplicaciones de Node para ejecutarlas como cluster.
- Es decir, que podemos escribir nuestra aplicación sin pensar en el cluster, y luego PM2 se encarga de crear un número dado de worker processes para ejecutar la aplicación. 
- Es capaz de aguantar cantidades enormes de tráfico con un consumo de recursos realmente reducido y con herramientas que permiten realizar la monitorización de las aplicaciones de manera remota.
- La ventaja principal sobre el módulo forever es el tema del cluster embebido en este módulo, como mencionamos antes.

## Empezar a usarlo

1. Para empezar a utilizarlo, primero debemos instalarlo
		
		$ npm i pm2 -g

2.	Luego, podemos iniciar la ejecución de forma genérica con el comando

		$ pm2 start app.js

3.	Con el mismo, la aplicación queda monitoreada y  en ejecución siempre.

- Se puede iniciar la ejecución en modo fork o en modo cluster. Los comandos que utilizamos son:

		-- Modo Fork --
		pm2 start app.js --name="ServerX" --watch -- PORT
		pm2 start app.js --name="Server1" --watch -- 8081
		pm2 start app.js --name="Server2" --watch -- 8082

		-- Modo Cluster --
		pm2 start app.js --name="ServerX" --watch -i max -- PORT
		pm2 start app.js --name="Server3" --watch -i max -- 8083
		pm2 start app.js --name="Server4" --watch -i max -- 8083

## Usar PM2

- Podemos listar todas las aplicaciones que se están ejecutando con

		$ pm2 list

- Para detener, reiniciar o eliminar una de las aplicaciones de la lista, podemos ejecutar alguno de los siguientes comandos

		$ pm2 stop <app_name|namespace|id|'all'|json_conf>
		$ pm2 restart <app_name|namespace|id|'all'|json_conf>
		$ pm2 delete <app_name|namespace|id|'all'|json_conf>

- Para obtener detalle de una aplicación: 

		$ pm2 describe <id|app_name>


- Para monitorear sus logs, métricas e información: $ pm2 monit
- Para consultar logs: $ pm2 logs
- Para hacer flush de logs: $pm2 flush
- Para ver las opciones de comandos disponibles: $ pm2 --help
