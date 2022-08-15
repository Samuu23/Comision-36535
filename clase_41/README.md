# Teoría

## Objetivos

- Identificar los marcos de MERN stack.
- Configurar CORS.
- Crear una aplicación completa con API RESTful y un front-end simple.
- Conocer sobre las pruebas de servidores y los tipos.

## Stack MERN

- Como vimos al principio del curso, el stack MERN es un conjunto de marcos/tecnologías utilizados para el desarrollo web de aplicaciones que consta de MongoDB, React JS, Express JS y Node JS como sus componentes.
- La combinación de estas cuatro tecnologías nos permite como desarrolladores crear sitios web (y aplicaciones) completos usando React (con JavaScript o TypeScript) del lado del cliente (front-end) y Node JS del lado del servidor (back-end). Así podremos dominar tanto la parte visual (la experiencia del usuario) como la parte lógica del servidor.
- Entonces con este stack, usamos Javascript tanto del lado del cliente como del lado del servidor.

### Caracteristicas

- MongoDB 
  - Es una base de datos no relacional. 
  - Los registros son similares a un objeto JSON.
  - Es una base de datos muy flexible.

- ExpressJS 
  - Es un framework de Node diseñado para escribir aplicaciones simplificadas, rápidas y seguras, del lado del servidor.

- ReactJS 
  - Es una biblioteca de código abierto, que se utiliza para desarrollar la parte de front-end (interfaces de usuario).
  - Permite a los desarrolladores modificar y actualizar la página para ver los cambios, sin tener que reiniciarla.
  - Aplicaciones rápidas y escalables.

- NodeJS 
  - Es un entorno de ejecución de JavaScript de código abierto, multiplataforma y diseñado para ejecutarse en el lado del servidor.
  - Orientado a eventos asíncronos y diseñado para crear aplicaciones escalables.

### Ventajas

- El stack MERN es un marco sólido para desarrollar aplicaciones dinámicas, interactivas y avanzadas. Tiene alta flexibilidad y escalabilidad.
- Su uso reduce los gastos, necesitando menos personal para obtener el mismo resultado, ya que el stack completo se programa con JavaScript.
- Facilita el proceso de trabajar con una arquitectura modelo vista controlador (MVC) haciendo que el desarrollo fluya sin problemas.
- Ayuda a evitar el trabajo pesado innecesario, por lo que mantiene el desarrollo de la aplicación web muy organizado.
- Frameworks basados en código abierto y con el respaldado por los apoyos de su comunidad.

## Cors
 
- El Intercambio de Recursos de Origen Cruzado, CORS, es un mecanismo para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP.
- Esto se utiliza para proteger un determinado servidor web del acceso de otro sitio web o dominio. Por ejemplo, solo los dominios permitidos podrán acceder a los archivos alojados en un servidor, como una hoja de estilo, una imagen o un script.
- Por razones de seguridad, los navegadores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un script.

- Por ejemplo, si nos encontramos en http://example.com/page1 y estamos haciendo referencia a una imagen de http://image.com/myimage.jpg, no podremos recuperar esa imagen a menos que http://image.com permita compartir orígenes cruzados con http://example.com.
- Hay un encabezado HTTP llamado origin en cada solicitud HTTP el cual define desde dónde se originó la solicitud de dominio. Podemos usar la información del encabezado para restringir o permitir que los recursos de nuestro servidor web los protejan.

> Usando Cors
