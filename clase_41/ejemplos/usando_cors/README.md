# Usando Cors

- Npm tiene un módulo llamado CORS, para poder configurar fácilmente las cabeceras, y decidir si permitimos o no el acceso a ciertas solicitudes de dominio cruzado.
- En primer lugar, instalamos el módulo con el comando:

    $ npm i cors

- Luego, lo requerimos en el archivo server.js. 

    const express = require('express')
    const cors = require('cors') 
    const app = express()

- Si deseamos habilitar CORS para todas las solicitudes, simplemente podemos usar el middleware cors antes de configurar las rutas, configurándolo a nivel global:

    app.use(cors())

- Esto nos permitirá acceder a todas las rutas desde cualquier lugar de la web si eso es lo que necesitamos. Entonces, las rutas que configuremos serán accesibles para todos los dominios.   
- Si necesitamos que una determinada ruta sea accesible y no otras rutas, podemos configurar cors en una determinada ruta como middleware en lugar de configurarlo para toda la aplicación:

    app.get('/', cors(), (req, res) => {
	res.json({
	  message: 'Hello World'
	})
    })

- Esto permitirá que una determinada ruta sea accesible por cualquier dominio. Entonces, en este caso, solo la ruta “/” será accesible para cada dominio. Las demás rutas solo serán accesibles para las solicitudes que se iniciaron en el mismo dominio que la API en la que estén definidas.

## Configurar con Options
- Podemos usar las opciones de configuración con CORS para personalizar ésto aún más. 
- Podemos usar la configuración para permitir el acceso de un solo dominio o subdominios, configurar métodos HTTP que estén permitidos, como GET y POST, según nuestros requisitos.
- Así es como podemos permitir el acceso de un solo dominio usando las opciones de CORS:

    let corsOptions = {
      origin: 'http://localhost:8080',
      optionSuccessStatus: 200 // For legacy browser support
    }
    
    app.use(cors(corsOptions))

- También podemos configurar los métodos HTTP que estén permitidos:


    let corsOptions = {
      origin: 'http://localhost:8080',
      optionSuccessStatus: 200 // For legacy browser support
      methods: "GET, PUT"
    }
    
    app.use(cors(corsOptions))

- Si enviamos una solicitud POST desde http://localhost: 8080, el navegador la bloqueará, ya que solo se admiten GET y PUT según los métodos especificados en esta configuración.

- Si las configuraciones no satisfacen nuestros requisitos, podemos crear una función personalizada para CORS.

- Por ejemplo, supongamos que deseamos permitir el uso compartido de CORS para archivos .jpg http://something.com y http://example.com.


