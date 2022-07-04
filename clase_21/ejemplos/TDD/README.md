# Calculadora

1. Supongamos que el cliente nos pide que desarrollemos una calculadora que sume números.
2. Acordamos que el criterio de aceptación sería que si introduces en la calculadora dos números y le das a la operación de suma, la calculadora te muestra el resultado de la suma en la pantalla.
3. Partiendo de este criterio, comenzamos a definir el funcionamiento del algoritmo de suma y convertimos el criterio de aceptación en una prueba concreta. Por ejemplo: un algoritmo al que al introducir 3 y 5 devuelve 8:

		function testSuma() { assertEquals(8, Calculadora.suma(3,5)); }

## Analisis del ultimo paso

- Es el punto es el más importante del TDD y que supone un cambio de mentalidad: primero escribo cómo debe funcionar mi programa y una vez que lo tengo claro, paso a codificarlo.
- Al escribir el test estamos diseñando cómo va a funcionar el software.
- Para cubrir la prueba vamos a necesitar una clase ‘Calculadora’ con una función que se llame ‘Suma’ y que tenga dos parámetros.
- Esta clase todavía no existe pero cuando la creemos, sabremos cómo va a funcionar. Por supuesto, si intentamos pasar este test nos dará un error, porque la clase Calculadora aún no existe.

## Escritura del Código y Prueba

- Ahora pasamos a escribir el código de la clase. Será fácil, porque ya sabemos exactamente cómo se va a comportar:

		class Calculadora { 
			static suma (a, b) { 
				const c = a + b;
				return c; 
			} 
		}

- Ejecutamos la prueba y ya tenemos el código funcionado con la prueba pasada.

## Refactorizacion
 

- Una vez que todo esté funcionando, pasamos a refactorizar y a eliminar código duplicado. Este ejemplo es sencillo y en un caso real no haríamos tantos pasos para algo tan evidente, pero el código mejorado podría ser:

		class Calculadora {
			static suma (a, b) {
				return a+b; 
			}
		}

- En ejemplos más complejos, deberíamos buscar código duplicado y agruparlo en funciones, o utilizar la herencia o el polimorfismo.

## Detalles

- Es importante pasar todos los tests después de refactorizar por si nos olvidado de algo.
- Ahora deberíamos volver al punto 3 con tests más complicados y repetir el proceso. Por ejemplo, podríamos hacer que el algoritmo admita sumar números decimales.
- Esta forma de trabajar es también muy buena para entender el código. La calidad del diseño de un software está también relacionada con el conocimiento del equipo de desarrollo en relación al dominio en cuestión.
