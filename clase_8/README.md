# Teoria

## Middlewares

Las funciones de middleware son aquellas que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación (next)

- Las funciones de middleware pueden realizar las siguientes tareas:
- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuestas.
- Invocar la siguiente función de middleware en la pila.

## Tipos de Middlewares  
Una aplicación Express puede utilizar los siguientes tipos de middleware:
- Middleware a nivel de aplicación
- Middleware a nivel del Router
- Middleware de manejo de errores
- Middleware incorporado
- Middleware de terceros

Veamos cada uno de ellos.

- Middleware a nivel de aplicacion  
Este ejemplo muestra una función de middleware sin ninguna vía de acceso de montaje. La función se ejecuta cada vez que la aplicación recibe una solicitud.
    var app = express();
    
    app.use(function (req, res, next) {
      console.log('Time:', Date.now());
      next();
    });

- Middleware a nivel del Router  
Se pueden agregar una o múltiples funciones middlewares en los procesos de atención de las rutas como se muestra a continuación:

    function miMiddleware(req, res, next){
      req.miAporte1 = 'Dato aportado por el Middleware 1'
      next()
    }
    
    app.get('/miRuta', miMiddleware, (req,res) => {
      let miAporte = req.miAporte
      res.send({ miAporte })
    })

- Middleware de manejo de errores  
Estas funciones se definen de la misma forma que otras funciones de middleware, excepto que llevan cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next):

    app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

- Middleware Incorporado  
La única función de middleware incorporado en Express es express.static. Esta función es responsable del servicio de archivos estáticos:   

    app.use(express.static('public', options));

  - express.static(root, [options])
    - El argumento root especifica el directorio raíz desde el que se realiza el servicio de activos estáticos.
    - El objeto options opcional puede tener las siguientes propiedades: dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders

- Middeware de terceros  
Podemos instalar y utilizar middlewares de terceros para añadir funcionalidad a nuestra aplicación. El uso puede ser a nivel de aplicación o a nivel de Router. Por ejemplo, instalamos y usamos la función de middleware de análisis de cookies cookie-parser.
    $ npm install cookie-parser

    var express = require('express');
    var app = express();
    var cookieParser = require('cookie-parser');
    
    // load the cookie-parsing middleware
    app.use(cookieParser());


