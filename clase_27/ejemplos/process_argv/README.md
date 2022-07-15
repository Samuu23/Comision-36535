# Uso de process.argv

- La forma más sencilla de recuperar argumentos en Node es a través del process.argv. Este es un objeto global que podemos usar sin importar bibliotecas adicionales.
- Simplemente necesitamos pasar argumentos a una aplicación Node, tal como mostramos anteriormente, y se puede acceder a estos argumentos dentro de la aplicación a través del process.argv.

1. El primer elemento del process.argv, el array, siempre será una ruta del sistema de archivos que apunta al Node ejecutable. 
2. El segundo elemento es el nombre del archivo JavaScript que se está ejecutando.
3. El tercer elemento es el primer argumento que realmente pasó el usuario.

- Vemos un script de Node simple que imprima todos los argumentos de la línea de comando pasados ​​a la aplicación, junto con su índice. En el archivo “processargv.js”
- Lo que hace este script es recorrer el process.argv array e imprime los índices, junto con los elementos almacenados en esos índices. Es muy útil para depurar si alguna vez nos preguntamos qué argumentos estamos recibiendo y en qué orden.
- Vemos un script de Node simple que imprima todos los argumentos de la línea de comando pasados ​​a la aplicación, junto con su índice. En el archivo “processargv.js”
- Lo que hace este script es recorrer el process.argv array e imprime los índices, junto con los elementos almacenados en esos índices. Es muy útil para depurar si alguna vez nos preguntamos qué argumentos estamos recibiendo y en qué orden.

		for(let j = 0; j < process.argv.length; i++) {
			console.log(j + ' -> ' + (process.argv[j]))
		}

- Para ejecutar el script, en la terminal nos posicionamos sobre el directorio de ese archivo y ejecutamos el comando:

		$ node server.js tom jack 43

- Acá estamos pasando tres argumentos al programa “processargv.js”. El argumento “tom” se almacenará en el segundo índice, mientras que “jack” y “43” se almacenarán en el tercer y cuarto índice, respectivamente. La salida será:

		0 -> /home/emi/.nvm/versions/node/v16.15.0/bin/node
		1 -> /home/emi/Programacion/Comision-36535/clase_27/ejemplos/process_argv/server.js
		2 -> tom
		3 -> jack
		4 -> 43

- El primer índice contiene la ruta a nuestro node ejecutable y el segundo índice contiene la ruta al archivo de script.


