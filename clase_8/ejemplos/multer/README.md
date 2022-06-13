# Configuracion del proyecto
1. Creamos un archivo server.js. En el mismo, inicializamos todos los módulos. Crearemos una aplicación Express y crearemos un servidor para conectarse a los navegadores.

2. Creamos un archivo index.html

3. Este archivo contendrá los diferentes formularios que utilizaremos para cargar nuestros diferentes tipos de archivos.

4. Modificamos server.js escribiendo una ruta GET que muestre el archivo index.html en lugar del mensaje "WELCOME" ("BIENVENIDO", en español).  
    res.sendFile(__dirname + '/index.html')

5. Multer ofrece la opción de almacenar archivos en el disco. Definimos una ubicación de almacenamiento para nuestros archivos. 

6. Configuramos Multer con esas opciones.

    var storage=multer.diskStorage
      destination:function(req,file,cb){
        cb(null,'uploads')
      },
      filename:function(req,file,cb){
        cb(null,file.fieldname+-+Date.now())
      }
    })
    var upload=multer({storage:storage})
