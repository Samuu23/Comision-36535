# Proceso Hijo

## Proceso secundario con exec()

- Requerimos el comando exec del módulo child_process.
- En la ejecución de la función exec, el primer argumento es el comando ls-lh. Este, enumera todos los archivos y carpetas del directorio actual en formato largo, con un tamaño total de archivo en unidades legibles por el ser humano en la parte superior del resultado.

		const { exec }= require('child_process');
		exec('ls -lh', (error, stdout, stderr) => {
			if (error) {
				console.error(error: ${error.message}");
				return;
			}
			if (stderr) {
				console.error (" stderr: $(stderr)');
				return;
			}
		
			console.log(" stdout: \n${stdout} );
		
		})

- El segundo argumento es el callback, el cual a su vez tiene 3 parámetros.
- Si el comando no se ejecuta, se imprime el motivo en error.
- Si el comando se ejecutó correctamente, cualquier dato que escriba al flujo de resultado estándar se captura en stdout y cualquier dato que escriba al flujo error estándar se captura en stderr.
- Al ejecutar el archivo en la terminal el output será como el que se muestra en la imagen.

		Output
		stdout:
		total 4.eK
		rw-rw-- 1 samny samy 280 Jul 27 16:35 listFiles .js

- Esto enumera el contenido del directorio child-processes en formato largo, junto con el tamaño del contenido en la parte superior. Sus resultados tendrán su propio usuario y grupo en lugar de sammy. 
- Esto muestra que el programa listFiles.js ejecutó correctamente el comando shell ls -lh.

## Proceso secundario con execFile()

- La diferencia principal entre las funciones execFile() y exec() es que el primer argumento de execFile() es ahora una ruta a un archivo ejecutable en vez de un comando.
- El resultado del archivo ejecutable se guarda en un búfer como exec(), al que accedemos a través de una función callback con los parámetros error, stdout y stderr.

- Ahora requerimos el método execFile del módulo child_process.
- Como observamos en el código, ahora el primer parámetro es la ruta, en este caso, de un script de bash.
- Luego, el código funciona de igual forma que con el comando exec.

		const { execFile } = require('child_process');
			execFile(__dirname + '/processNodejs Image.sh', (error, stdout, stderr)=>{
				if (error) {
					console.error ('error: S{error.message)");
					return;
				}

				if (stderr) {
					console.error( stderr: S{stderr)");
					return;
				}

				console. log( stdout: \ns (stdout)" );
		})

## Proceso secundario con spawn()

- La función spawn() ejecuta un comando en un proceso. Esta función devuelve datos a través de la API del flujo. Por tanto, para obtener el resultado del proceso secundario, debemos escuchar los eventos del flujo.
- Con exec() y execFile(), todos los datos procesados se guardan en la memoria de la computadora. Para cantidades de datos más grandes, esto puede degradar el rendimiento del sistema. 
- En el caso de spawn(), con un flujo, los datos se procesan y transfieren en pequeños trozos. Por lo tanto, puede procesar una gran cantidad de datos sin usar demasiada memoria en un momento dado.

- Requerimos el método spawn del módulo child_process.
- El primer argumento de spawn es el comando find.
- El segundo argumento es un array que contiene los argumentos para el comando ejecutado.
- Le estamos indicando a Node que ejecute el comando find con el argumento ‘.’, lo que hace que el comando encuentre todos los activos en el directorio actual.

		const { spawn } = require('childe_process')
		const child = spawn('find', ['.'])

- Los comandos pueden devolver datos en el flujo stdout o el flujo stderr.
- Puede añadir oyentes invocando el método on() de cada objeto de los flujos.
- El evento datos de los flujos nos proporciona el resultado de los comandos para ese flujo. Siempre que obtengamos datos sobre ese flujo, los registramos en la consola.

		const { spawn } = require('childe_process')
		const child = spawn('find', ['.'])

		child.stdout.on("data", data =>{
			console.log (`stdout: \n ${data}`);
		})
		
		child.stderr.on("data", data =>{
			console.error (`stderr: ${data}` );
		})

- Escuchamos los dos otros eventos: el evento error si el comando no se ejecuta o se interrumpe y el evento close para cuando el comando haya terminado la ejecución, cerrando así el flujo.
- En estos casos, se configura directo en la variable child.

		child.on(error, (error) => {
		  console.error(`error: s{error.message}`)
		})
		
		child.on(close, (code) =>
		  console. log(`child process exited with code ${code}` )
		})

## Proceso secundario con fork()

- La función fork() es una variación de spawn() que permite la comunicación entre el proceso principal y el secundario.
- Además de recuperar datos desde el proceso secundario, un proceso principal puede enviar mensajes al proceso secundario en ejecución. Del mismo modo, el proceso secundario puede enviar mensajes al proceso principal.
- Si un servidor web está bloqueado, no puede procesar ninguna nueva solicitud entrante hasta que el código de bloqueo haya completado su ejecución. Fork evita el bloqueo corriendo el proceso secundario bloqueante en un hilo aparte.
￼￼
- Creamos un servidor, que ejecuta la función calculo().
- Se puede ver que se va a ejecutar de forma muy lenta, ya que el bucle de la función va a iterar hasta que el contador sea 6e9.
- Por lo tanto, este es un servidor bloqueante. Es decir, que todos los otros procesos o request se bloquean por el tiempo que tarda en ejecutarse la función calcular.

		const http = require("http')
		const calculo = () => {
			let sun = 0
		for(let i=0; i<6e9; i++) {
			sun+=1
		}
		
		return sun
		}
		
		let visitas = 0
		
		const server = http.createServer()
		server.on('request, (req,res) => {
			let { url } = req
			if(url == "/calcular") {
				const sum = calculo()
				res.end(`La suma es ${sum}`)
			}
			else if(url == '/'){
				res.end('Ok ', (++visitas))
				}
		})
		
		const PORT = 8080
		server.listen(PORT, err => {
			if(err) { throw ne Error(`Error en servidor: ${er}`) }
			console. log(`Servidor http escuchando en el puerto ${PORT}`)
		}

- En este caso, tenemos un servidor no-bloqueante.
- La función calcular, ahora se encuentra en el archivo computo.js.
- Cuando se quiere acceder a la ruta /calcular se crea un proceso secundario con fork.
- De esta forma, cualquier otro request se atenderá en forma correcta cuando se esté realizando la operación de cálculo.

- En este ejemplo, tenemos un componente hijo, llamado child.js (primera imágen) el cual se va a ejecutar en un proceso secundario conectado con el proceso principal (segunda imágen).
- En la tercera imagen, podemos observar el intercambio de mensajes entre el proceso hijo y el proceso padre al ejecutarlo en la terminal.

- Cuando trabajamos con Módulos de ES6, debemos considerar que la carga de archivos es no-bloqueante, por lo que debemos añadir un paso extra al cargar el nuevo proceso, que consiste en hacer que el proceso cargado envíe un mensaje indicando que ya está listo, y recién ahí podemos enviarle nosotros la indicación de que comience a procesar lo que le pasemos. Ejemplo:


