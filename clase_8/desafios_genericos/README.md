# Consignas

1. Express Router  
Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
    - GET: devolverá la lista requerida en formato objeto.
    - POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
      - Persona -> { "nombre": ..., "apellido": ..., "edad":... }
      - Mascota -> { "nombre":..., "raza":..., "edad":... }
- Utilizar el Router de express para definir las rutas base, implementando las subrutas en los métodos correspondientes.
- Probar la funcionalidad con Postman.
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

2. Carpeta public
- Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el servidor, la cual tendrá un archivo index.html. 
- En ese archivo se encontrarán dos formularios: uno que permita ingresar mascotas y otro personas utilizando el método post
- Probar el ingreso de datos mediante los formularios y con Postman
- Verificar los datos cargados en cada caso.

3. Express y Multer
- Crear un servidor que permita elegir y subir un archivo utilizando un formulario servido desde su espacio público.
- Dicho archivo se almacenará en una carpeta propia del servidor llamada 'uploads'.
- El nombre del archivo guardado se formará con el nombre original anteponiéndole un timestamp (Date.now()) seguido con un guión. Ej: 1610894554093-clase1.zip
- Utilizar express y multer en un proyecto de servidor que escuche en el puerto 8080.
