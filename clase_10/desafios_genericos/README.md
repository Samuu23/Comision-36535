# Consignas

1. PUG  
- Realizar un servidor que reciba por query params (mediante la ruta get '/datos') el valor que debe representar una barra de medición (usando el tag de html meter). 
- Asimismo recibirá además los valores mínimos y máximos permitidos y el título que se pondrá por arriba de la barra, en un elemento h1 en color azul (debe permitir formato HTML).
 
**Ejemplo de petición:**  
http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>

- Como respuesta a este request, el servidor devolverá al frontend una plantilla armada con los datos recibidos.
- Utilizar pug integrado a express, manejando una plantilla común y una particular con la representación requerida.

2. EJS  
Realizar el mismo ejercicio que en el desafío anterior, utilizando ejs.

## Links de ejemplo  
- http://localhost:3000/datos?min=10&level=15&max=20&title=<i>Medidor</i>

3. Formulario + Hisotiral  
- Desarrollar un servidor basado en node.js, express y ejs que disponga de un formulario en su ruta raíz (creado con una plantilla de ejs) para ingresar los siguientes datos de una persona: nombre, apellido y edad. 
- La información será enviada mediante el método post al endpoint '/personas
- Representar por debajo del mismo formulario los datos históricos ingresados más el actual en forma de tabla. En el caso de no encontrarse información mostrar el mensaje 'No se encontraron datos' en lugar de la tabla.
