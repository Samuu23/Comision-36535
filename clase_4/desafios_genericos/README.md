# Consignas
1. Asincronismo y Callbacks

  - Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
  - Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro:
    const fin = () => console.log('terminé')
  - Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

2. Fecha y Hora 
  - Realizar un programa que:
  - A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
  - B) Lea nuestro propio archivo de programa y lo muestre por consola.
  - C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

  - Aclaración: utilizar las funciones sincrónicas de lectura y escritura de archivos del módulo fs de node.js

3. Lectura y Escritura de archivos
  Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
  - A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y. Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
  - B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
    const info = {
      contenidoStr: (contenido del archivo leído en formato string),
      contenidoObj: (contenido del archivo leído en formato objeto),
      size: (tamaño en bytes del archivo)
    }
  - C) Muestre por consola el objeto info luego de leer el archivo
  - D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
  - E) Incluir el manejo de errores (con throw new Error)

  Aclaraciones:
  - Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
  - Consigna B): Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
  - Consigna C): Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

  Ayuda:
  Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).

4. Lectura y Escritura de archivo con Promesas
  Realizar un programa que ejecute las siguientes tareas:
  - A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
  - B) Mostrar este objeto info en la consola.
  - C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
  - D) Mostrar los errores por consola.


  Aclaraciones:
  Trabajar con fs.promises (then/catch).

  Ayuda:
  Para el punto 3 considerar usar JSON.stringify(info.contenidoObj, null,2) para preservar el formato de representación del objeto en el archivo.
