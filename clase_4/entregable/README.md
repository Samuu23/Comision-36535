# Consigna
__Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:__

- [x] __save(Object):__ 
Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

- [x] __getById(Number):__
Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

- [x] __getAll(): Object[]__ 
Devuelve un array con los objetos presentes en el archivo.

- [x] __deleteById(Number): void__
Elimina del archivo el objeto con el id buscado.

- [x] __deleteAll(): void__
Elimina todos los objetos presentes en el archivo.

## Aspectos a incluir en el entregable: 
- El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
- Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
- Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
- Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
- Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
- El formato de cada producto será : 

    {
      title: (nombre del producto),
      price: (precio),
      thumbnail: (url de la foto del producto)
    }
