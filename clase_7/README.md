# Teoria

## ¿Qué es una API REST?  
- Es un tipo de API que no dispone de interfaz gráfica.
- Se utiliza exclusivamente para comunicación entre sistemas, mediante el protocolo HTTP.
- Para que una API se considere REST, debe cumplir con las siguientes características:
  - Arquitectura Cliente-Servidor sin estado 
  - Cacheable
  - Operaciones comunes 
  - Interfaz uniforme 
  - Utilización de hipermedios

## Caracteristicas API REST  
### Arquitectura Cliente-Servidor sin estado   
- Cada mensaje HTTP contiene toda la información necesaria para comprender la petición. 
- Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes. 
- Esta restricción mantiene al cliente y al servidor débilmente acoplados: el cliente no necesita conocer los detalles de implementación del servidor y el servidor se “despreocupa” de cómo son usados los datos que envía al cliente.

### Cacheable  
- Debe admitir un sistema de almacenamiento en caché. 
- La infraestructura de red debe soportar una caché de varios niveles. 
- Este almacenamiento evita repetir varias conexiones entre el servidor y el cliente, en casos en que peticiones idénticas fueran a generar la misma respuesta.

### Operaciones Comunes  
- Todos los recursos detrás de nuestra API deben poder ser consumidos mediante peticiones HTTP, preferentemente sus principales (POST, GET, PUT y DELETE). 
- Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos (en inglés: Create, Read, Update, Delete, en español: Alta, Lectura, Modificación, y Baja). 
- Al tratarse de peticiones HTTP, éstas deberán devolver con sus respuestas los correspondientes códigos de estado, informando el resultado de las mismas. 

### Interfaz Uniforme  
- En un sistema REST, cada acción (más correctamente, cada recurso) debe contar con una URI (Uniform Resource Identifier), un identificador único. 
- Ésta nos facilita el acceso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también para compartir su ubicación exacta a terceros.

### Utilización de hipermedios  
- Cada vez que se hace una petición al servidor y este devuelve una respuesta, parte de la información devuelta pueden ser también hipervínculos de navegación asociada a otros recursos del cliente.
- Como resultado de esto, es posible navegar de un recurso REST a muchos otros, simplemente siguiendo enlaces sin requerir el uso de registros u otra infraestructura adicional. 

---

## Principios RESTful API  
- Una aplicación RESTful requiere un enfoque de diseño distinto a la forma típica de pensar en un sistema: lo contrario a RPC
- RPC (Remote Procedure Calls, llamadas a procedimientos remotos) basa su funcionamiento en las operaciones que puede realizar el sistema (acciones, usualmente verbos). Ej: getUsuario()
- En REST, por el contrario, el énfasis se pone en los recursos (usualmente sustantivos), especialmente en los nombres que se le asigna a cada tipo de recurso. Ej. Usuarios.
- Cada funcionalidad relacionada con este recurso tendría sus propios identificadores y peticiones en HTTP.
