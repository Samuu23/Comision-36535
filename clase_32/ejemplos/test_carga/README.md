# Realizando Test de carga

1. Para empezar debemos como siempre crear un servidor. Vamos a usar exactamente el mismo que usamos en el ejemplo de Profiling.
2. Generamos la ruta de registro de usuario (/newUser) y las rutas de login bloqueante (/auth-bloq) y no bloqueante (/auth-nobloq).
3. Procedemos a instalar Autocannon y 0x:
	- Autocannon lo vamos a instalar como dependencia del proyecto, ya que como dijimos, los test los vamos a realizar por código.
	- 0x lo instalamos de forma global.

		$ npm install autocannon --save
		$ npm instal -g 0x

4. Hacemos parecido a lo anterior, y con la función run ejecutamos el test para la ruta del proceso bloqueante y para la del no bloqueante.

- Los test los vamos a realizar en un archivo llamado benchmark.js.
- En él, requerimos Autocannon y creamos el test.

		const autocannon = require('autocannon')
		const { PassThrough } = require('stream')

		function run(url) {
			const buf = []
			const outputStream = new PassThrough()

			const inst = autocannon({
				url,
				connections: 100,
				duration: 20
			})

			autocannon.track(inst, { outputStream })

				outputStream.on('data', data => buf.push(data))
				inst.on('done', function() {
					process.stdout.write(Buffer.concat(buff))
				})
		}

		console.log('Running all benchmarks in parallel...')

		run('http://localhost:8080/auth-bloq?username=dani&password=qwerty123')
		run('http://localhost:8080/auth-nobloq?username=dani&password=qwerty123')

En el package.json cambiamos en el script “start”, en vez de Node como siempre, ponemos 0x.

- Con esto, lo que hacemos es que se genere el gráfico de flama.
- Además, en el script “test” tenemos que decirle qué archivo va a testear, aclarando que es de Node (como vemos en el código).

		"scripts": {
			"test": "node benchmark.js",
			"start": "0x server.js"
		}

- Prendemos el servidor con *$ __npm__ start* 
- Luego, en otra terminal, registramos un usuario, con el comando que usamos en profiling.

		$ curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

- Finalmente, ejecutamos los test con el comando *$ __npm__ test*
- Ambos test se ejecutan en paralelo.
- Se genera en consola un reporte parecido a los que vimos con los métodos anteriores. Uno por cada test.

- Cuando apagamos el servidor, se crea una carpeta de nombre aleatorio.
- Esta contiene los resultados en archivo Isolate, similar a los visto y además un html con los diagramas de flama.
- Este archivo HTML lo podemos abrir en un navegador, y de esa forma podemos ver los diagramas.

## Explorar y navegar el diagrama

- Con los botones de abajo en el medio, podemos ir cambiando el color, eligiendo qué procesos se muestran, cuáles no, etc.
- La altura del diagrama representa la profundidad del stack de Node. Cuanto más arriba llegue el diagrama de flamas, más anidado está dentro del stack de procesos.
- Los procesos de más arriba son los que primero tienen que resolverse para dejar liberados los procesos de abajo. Es decir, los procesos de arriba son los que bloquean a los de abajo y son los que están en color más oscuro (“hot”).
- Esto es justamente porque es el test sobre el proceso bloqueante.
- La horizontalidad es la duración en el stack, entonces cuanto más largos sean, mayor duración tienen. Por eso observamos que en el proceso bloqueante, los procesos duran mucho tiempo en el stack. Y con esto vemos también su planitud, no tiene picos, como si tiene el no bloqueante.

- Al ver la horizontalidad, vemos que los varios procesos, sobretodo los que están más arriba, son cortos, y esa es su duración en el stack, por lo que al durar poco no bloquean a los que siguen más abajo, a diferencia de lo que pasaba en el proceso bloqueante.
- Entonces, estos procesos cortos tienen poca permanencia en el stack y son por ende, no bloqueantes. Se observan picos que no existían en el proceso bloqueante.
- La forma que deberían tener los diagramas de flama para que el proceso sea eficiente es con la mayor cantidad de picos y lo más finos posibles.

## Bloqueante vs No Bloqueante

- Para poder compararlos mejor, a la izquierda vemos el proceso bloqueante y a la derecha el no bloqueante, ambos con la misma escala.
- El no bloqueante casi no lo vemos, por lo que podemos decir que sus procesos duran muchísimo menos tiempo en el stack (mi finos) como debe suceder en procesos más eficientes.
