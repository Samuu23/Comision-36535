# Usando Artillery

- Instalacion

		$ npm i -g artillery

## Uso

1. Prendemos el servidor en modo Fork con el comando:

		$ node server.js 8081 FORK

2. Abrimos otra terminal sobre la carpeta del proyecto y con el siguiente comando hacemos el test de carga:

		$ artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_fork.txt

- --count -> Cantidad de request
- -n -> Cantidad de usuarios conectados
- 50 request por 40 usuarios

El resultado se va a guardar en el archivo result_fork.txt. Para poder visualizar el archivo, debemos apagar el servidor una vez finalizado el test.

3. Hacemos lo mismo con el servidor en modo Cluster:

		$ node server.js 8081 FORK
		$ artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_cluster.txt

📝 NOTA: En las query seteamos max en 100000 para calcular números primos hasta 100.000.


