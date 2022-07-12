# Consignas

1. Guardar datos en FileSystem

Modificar el resultado del desafío de session de la clase anterior para que almacene las sesiones de usuario en el file system; en vez de que su persistencia sea en la memoria del servidor.

- La carpeta destino será 'sesiones' y estará creada en el directorio anterior al proyecto.
- Verificar que con las distintas sesiones de usuario se crean archivos dentro de esa carpeta, cuyos nombres corresponden a las cookies de sesión activas.
- Fijar la duración del tiempo de vida de la sesión y de su cookie de 1 minuto. 
- Analizar los resultados.

2. Conectar con Redis

## Parte 1

	- Poner en marcha el servidor de base de datos Redis y conectar su cliente CLI. 
	- Realizar las siguientes tareas:
		1. Listar la información total en la base.
		2. Crear 5 claves sin tiempo de expiración que contengan nombres de productos.
		3. Listar nuevamente toda la información.
		4. Mostrar el contenido de cada una de las claves de productos.
		5. Agregar un producto más, fijando un tiempo de vida de 30 segundos.
		6. Listar el nuevo producto y su tiempo de expiración.
		7. Verificar que al transcurrir ese tiempo, el producto desaparezca del listado general.

## Parte 2

Realizar nuevamente el desafío “Guardar datos en File System” pero esta vez persistiendo las sesiones de usuario en Redis.

- Fijar un tiempo de vida de la sesión de 1 minuto que será recargada en cada visita del cliente al sitio.
- Acceder con dos clientes distintos y verificar que las sesiones respectivas hayan sido creadas en la base.
- Comprobar los datos y el tiempo de vida de las sesiones en la base verificando que cuando se extingan desaparezcan de la misma y que el usuario quede automáticamente deslogueado de su sesión.

