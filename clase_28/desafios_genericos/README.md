# Consignas

1. Uso del objeto process

Realizar una aplicación en Node.js que permita recibir como parámetros una cantidad ilimitada de números, con los cuales debe confeccionar el siguiente objeto (se imprimirá por consola):


		[
			datos: {
				numeros: [los, números, ingresados].
				promedio : (el promedio entre ellos),
				max: (vallor máximo),
				min: (valor minimo),
				ejecutable: (nombre del ejecutable),
				pid: (process id)
			}
		]

En el caso de ingresar un número no válido, se creará un objeto de error con el siguiente formato (se imprimirá por consola):

		{
		  error: {
		    descripcion : 'error de tipo',
		    numeros: [array, de, entrada].  // Ej. [1, 2, 'pepe', 4, true]
		    tipos: [array, con, tipos, de, entrada] // ej. [number, number, string, number, boo lean ]
		  }
		}

En este caso de error, la aplicación saldrá con código de error -5

Si no ingresó ningún número, el objeto de error será:

		{
			error: {
				descripcion: 'Entrada vacía'
			}
		}

En este caso de error, la aplicación saldrá con código de error -4

En los casos de error, se representará en consola el código antes de finalizar.

## Child_Process con Fork

- Realizar un servidor en express que contenga una ruta raíz '/' donde se represente la cantidad de visitas totales a este endpoint (no usar session).
- Se implementará otra ruta '/calculo-bloq', que permita realizar una suma incremental de los números del 0 al 100000 con el siguiente algoritmo.
- Comprobar que al alcanzar esta ruta en una pestaña del navegador, el proceso queda en espera del resultado. Constatar que durante dicha espera, la ruta de visitas no responde hasta terminar este proceso.
- Luego crear la ruta '/calculo-nobloq' que hará dicho cálculo forkeando el algoritmo en un child_process, comprobando ahora que el request a esta ruta no bloquee la ruta de visitas. Asegurarse de que una vez finalizado el proceso, el worker se cierra correctamente.


