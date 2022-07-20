# Consignas

1. Analisis de performance: bloq vs no-bloq

	1. Realizar un servidor que calcule 10000 números aleatorios entre el 0 y el 9 inclusive.
	- El servidor devolverá los números calculados en un array dentro de un objeto en formato JSON: {randoms: [array de randoms]}.
	- Se van a utilizar dos rutas en las que el cliente puede requerir la información: '/randoms-nodebug' y '/randoms-debug', la última contendrá un console.log que enviará el array calculado a la consola del servidor.

	2. Realizar un análisis de performance a través del profiler (--prof) de node.js y del modo inspect (--inspect) para las dos rutas, utilizando Artillery como generador de carga con 50 usuarios virtuales emitiendo 50 request cada uno.
	- Verificar que los tiempos de proceso en la ruta '/randoms-debug' sean mayores a los de la ruta '/randoms-nodebug', debido a la operación sincrónica bloqueante del console.log.

2. Analisis de performance: fork vs cluster

	- Utilizando el desafío anterior, agregar un parámetro (FORK ó CLUSTER) en línea de comandos que permita habilitar o deshabilitar el modo cluster en el servidor.
	- Realizar un análisis de performance sobre la ruta '/randoms-debug' en modo fork y cluster utilizando Artillery como generador de carga con 50 usuarios virtuales con 50 request cada uno.
	- Revisar los reportes de Artillery, corroborando que los request por segundo y la latencia del servidor en modo cluster tengan mejores resultados que en modo fork.

3. Analisis de performance con Autocannon y Ox
	
	1. Realizar un análisis de performance sobre el desafío anterior, utilizando 0x y autocannon en modo consola. Con autocannon realizar un test con el servidor corriendo con 0x, emulando 500 conexiones concurrentes realizadas en 20 segundos de test.
	2. Hacer el procedimiento mencionado con el servidor en modo fork y sobre los endpoint '/randoms-debug' y '/randoms-nodebug' obteniendo en cada caso el reporte de autocannon y el diagrama de flama.
	3. Analizar para cada caso los datos y gráficos obtenidos, y revisar que los resultados concuerden con los esperado: la ruta con debug por console.log es menos performante (bloquea más el servidor) que la que no lo contiene.
