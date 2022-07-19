# Consignas

1. Ejecutar servidor Nginx

- Descargar el servidor Nginx y ponerlo en funcionamiento.
- Verificar que se encuentre corriendo como proceso del sistema operativo.
- Hacer un request a su ruta raíz y verificar que esté ofreciendo el index.html que se encuentra en carpeta html. Realizar un cambio en dicha html y comprobar que se refleje en el navegador.
- Integrar un css al index.html que modifique algún estilo del sitio de prueba (Ej. el color de un título). Luego añadir un archivo Javascript que saque un mensaje 'Hola Nginx!!!' por consola. Verificar que estos cambios se vean al requerir la página.

2. Probar balanceador de carga

Realizar los siguientes cambios en el servidor Nginx que venimos utilizando:

- Volver a configurar el servidor Nginx con el puerto 80 como puerto de escucha.
- Derivar la información entrante en su ruta '/datos' a tres instancias Node.js escuchando en distintos puertos: ej: 8081 y 8082.
- Las instancias de node responderán en esa ruta: el número de puerto de escucha, su pid y la fecha y hora actual, ej: 'Server en PORT(puerto) - PID(pid) - FYH(fyh)' 
- En principio el balanceo de carga será equitativo para las dos instancias.
	- La primera instancias (8081) correrá en modo fork (por código), la otra (8082) en modo cluster (por código) utilizando PM2 modo fork (sin -i max).
	- Probar que con cada request cambie el servidor que responde en forma equitativa.
	- Luego cambiar la configuración del servidor para que la carga se distribuya 1-3 entre las dos instancias de Node, es decir, la instancia 8082 atenderá el triple de paquetes que la instancias 8081. Verificar esta operación.

NOTA: la instancia de servidor node deberá recibir como primer parámetro el puerto de escucha y como segundo el modo de trabajo: FORK ó CLUSTER.

3. Sitios ofrecidos por Node o Nginx

- Realizar un sitio web sencillo (con HTML, CSS y Javascript) que sea ofrecido en principio por el servidor de node.js del desafío anterior, utilizando el servicio de archivos estáticos de express.
- Las instancias de Node.js continuarán corriendo con PM2 en modo watch para incorporar nuevos cambios.
- Comprobar que el sitio web se vea correctamente desde las dos instancias de Node.js en su ruta raíz.
- Luego cambiar la configuración de Nginx para que ofrezca el sitio realizado en su ruta raíz, desactivando en las instancias de Node.js el servicio estático de archivos.
- Comprobar que ahora Nginx sea el que ofrezca el sitio web y no Node.js
