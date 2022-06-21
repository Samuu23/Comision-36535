# Explicaciones

## Archivo zip  
*Nombre:* appchat.zip  
*Propósito:* Este archivo sirve para subir nuestra app a glitch

*Manual de subida:*

- En Glitch, abrir una terminal
- Arrastrar el zip al entorno de Glitch
- Copiar el link: Para este ejemplo es *"https://cdn.glitch.global/38262c3b-dba4-4b06-a071-b1e16093b86a/appchat.zip?v=1655488038470"*
- Utilizar el siguiente comando:
		$ wget -O <archivo> <link>
		$ unzip <archivo> -d .
		$ rm <archivo> index.html script.js style.css
		$ refresh 
- Modificar el port por: process.env.PORT
- Agregar "start" en el "script" de package.json
