# Teoría

## Global Process

### Objeto Process

- Como ya hemos visto, el objeto process es una variable global disponible en NodeJS que nos ofrece diversas informaciones y utilidades acerca del proceso que está ejecutando un script Node. 
- Contiene diversos métodos, eventos y propiedades que nos sirven no solo para obtener datos del proceso actual, sino también para controlarlo.
- Al ser un objeto global quiere decir que lo puedes usar en cualquier localización de tu código NodeJS, sin tener que hacer el correspondiente require().

### Datos del proceso
Algunos ejemplos de los datos del proceso que se pueden consultar con el objeto process.
	
		'Directorio actual de trabajo:'+ process.cwd();
		'Id del proceso: '+ process.pid;
		'Versión de Node:'+ proce5s. version;
		'Titulo del proceso:'+ process.title;
		'Sistema operativo: '+ process.platform;
		'Uso de la memoria: '+ process. memoryUsage();

### Salir de la ejecucion

- A veces, se necesita salir de la ejecución de un programa en Node. Esto lo podemos conseguir mediante el método exit del objeto process.

		process.exit()

- Provocará que el programa acabe, incluso en el caso que haya operaciones asíncronas que no se hayan completado o que se esté escuchando eventos diversos en el programa.

El método exit puede recibir opcionalmente un código de salida. Si no indicamos nada se entiende "0" como código de salida.

		process.exit(3)

### Funcion .on()

- La mayor funcionalidad de process está contenida en la función ‘.on()’. 
- Dicha función está escuchando durante todo el proceso que se ejecuta, es por eso que solo se puede actuar sobre su callback.
- Se define como se definen los eventos en Javascript. En el método on, indicando el tipo de evento que queremos escuchar y un callback que se ejecutará cuando ese evento se dispare.

		process.on('evento', callback)

### Evento 'beforeExit'

- Normalmente, el proceso de Node se cerrará cuando no haya trabajo programado, pero un oyente registrado en el evento beforeExit puede realizar llamadas asincrónicas y, por lo tanto, hacer que el proceso de Node continúe.
- No debe usarse como una alternativa al evento de exit a menos que la intención sea programar trabajo adicional.

		process.on('beforeExit', (code) => {
			console.log('Process beforeExit event with code: ', code)
		})

### Evento 'exit'

- El evento exit se emite cuando el proceso de Node está a punto de salir como resultado de que:
- El método process.exit( ) se llama explícitamente.
- El ciclo de eventos de Node ya no tiene ningún trabajo adicional que realizar.
- No hay forma de evitar la salida del bucle de eventos en este punto, y una vez que todos los oyentes de 'salida' hayan terminado de ejecutar, el proceso de Node terminará.

		process.on('exit', (code) => console.log('About to exit wiht code: ', code))

### Evento 'uncaughtException'
￼￼
- Se emite cuando una excepción es devuelta hacia el bucle de evento. 
- Si se agregó un listener a esta excepción, no se producirá la acción por defecto (imprimir una traza del stack y salir).
- Es un mecanismo muy básico para manejar excepciones.

		process.on('uncaught Exception', function (err) {
		console.log("Excepción recogida:" + err);
		})
		
		setTimeout (function () {
		console. 1og ( 'Esto seguirá ejecutándose. ');
		}, 500);
		// Se fuerza una excepción, pero no se recoge.
		nonexistentFunc();
		console. log ('Esto no se ejecutará.')

### process.execPath

- Esta propiedad devuelve el nombre de la ruta absoluta del ejecutable que inició el proceso Node. Los enlaces simbólicos, si los hay, se resuelven.
- Ejemplo de ruta '/usr/local/bin/node'

- La propiedad process.stdout devuelve una secuencia conectada a stdout.
- Es un stream de escritura para stdout.

- Ejemplo de la definición de console.log: 

		console.log = function(d) {
			process.stdout.write(d + '\n')
	 	}

### Single Thread (único hilo)

- Cuando ponemos en marcha un programa escrito en NodeJS se dispone de un único hilo de ejecución.
- Una ventaja de esto es que permite atender mayor demanda con menos recursos.
- Todas las operaciones que NodeJS no puede realizar al instante (operaciones no bloqueantes), liberan el proceso, es decir, se libera para atender otras solicitudes.
- El hilo principal podrá estar atento a solicitudes, pero una vez que se atiendan, Node podrá levantar de manera interna otros procesos para realizar todo tipo de acciones que se deban producir como respuesta a esas solicitudes. Estos procesos secundarios pueden crearse con el módulo child_process.
- Un proceso hijo es un proceso creado por un proceso padre.
- Node nos permite ejecutar un comando del sistema dentro de un proceso hijo y escuchar su entrada / salida. 
- Los desarrolladores crean de forma habitual procesos secundarios para ejecutar comandos sobre su sistema operativo cuando necesitan manipular el resultado de sus programas Node con un shell.
- Podemos crear procesos hijo de 4 formas diferentes:
	- exec()
	- execFile()
	- spawn()
	- fork()

> Formas de crear Procesos hijo


