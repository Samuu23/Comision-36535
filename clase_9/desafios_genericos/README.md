# Consignas

1. Datos Personales  
Realizar una página web que permita mostrar datos personales de la siguiente forma:  
    <h1>Datos Personales</h1>
    <ul>
        <li>(nombre)</li>
        <li>(apellido)</li>
        <li>(edad)</li>
        <li>(email)</li>
        <li>(teléfono)</li>
    </ul>
Con los datos que provienen desde un objeto:   
    {
        nombre: '...',
        apellido: '...',
        edad: ...,
        email: '...',
        telefono: '...'
    }    

Importar Handlebars vía CDN en el frontend para crear dicha vista en forma dinámica. Esta página será servida desde el espacio público de un servidor basado en node.js y express.

2. Motor de plantilla Custom  
Desarrollar un motor de plantillas custom para un servidor basado en express, que permita representar en la ruta '/cte1' el siguiente archivo de plantilla 'plantilla1.cte':  

    <h1>^^titulo$$</h1>
    <p>^^mensaje$$</p>
    <b>^^autor$$</b>
    <hr>
    <i><b>Versión: ^^version$$</b></i>

Con los datos que provienen desde un objeto:

    { 
        titulo: (algún título en string),
        mensaje:(algún mensaje en string),
        autor: (algun autor en string),
        version: (numerica)
    }

Este motor personalizado debe permitir parsear objetos de datos con claves dinámicas y volcar sus valores en la plantilla seleccionada.  
Crear otra ruta '/cte2' que represente otro archivo de plantilla: 'plantilla2.cte' con los datos nombre, apellido y la fecha/hora provenientes de un objeto.

3. Handlebars con Express  
- Transformar el primer desafío, pero esta vez la página dinámica la creará el servidor desde handlebars instalado y configurado para trabajar con express.
- Utilizar la misma estructura de plantilla HTML dentro de una pagina web con encabezado y el mismo objeto de datos.
- El servidor escuchará en el puerto 8080 y el resultado lo ofrecerá en su ruta root.
