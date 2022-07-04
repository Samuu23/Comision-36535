# Teoría

## ¿Qué es normalizar datos?

Es un proceso de estandarización y validación de datos que consiste en eliminar las redundancias o inconsistencias, completando datos mediante una serie de reglas que actualizan la información, protegiendo su integridad y favoreciendo la interpretación, para que así sea más fácil de consultar y más útil para quien la gestiona.

## ¿Cómo y cuando se utiliza?

La normalización de datos es útil cuando un repositorio de datos es demasiado grande, contiene redundancias, tiene información profundamente anidada y/o es difícil de usar. 

Al normalizar los datos, debemos seguir algunas reglas:

- La estructura de datos debe ser plana.
- Cada entidad debe almacenarse como propiedad de objeto diferente.
- Las relaciones con otras entidades deben crearse basadas en identificadores: ‘id’.

## Normalizr

- Es un paquete muy útil que utiliza la definición de esquemas personalizados para crear datos normalizados.
- Se puede instalar desde npm a través de npm i normalizr

Normalizr npm site: https://www.npmjs.com/package/normalizr 

Normalizr github site: https://github.com/paularmstrong/normalizr

## Ejemplo de uso

Las publicaciones en un blog pueden tener este formato de datos:

Este tipo de estructura parece totalmente correcta, pero cuando almacenemos más publicaciones de blog, se duplicarán los datos de los autores. A medida que nuestro blog crece, podemos agregar categorías y relaciones entre comentarios y usuarios.

No es necesario almacenar todo en un objeto.

## Solución: Normalizr
- Normalizr funciona definiendo esquemas y luego declarando cómo estos esquemas se representan a través de entidades.
- El único requisito es que cada entidad (publicación, comentario, autor) tenga la propiedad ‘id’. Se puede cambiar con la opción idAttribute

## Resultado
- Este objeto es el resultado del proceso de normalización.
- Los datos están agrupados por ‘entidades’, y ‘result’ es el punto de entrada. 
- Logramos desanidar y aplanar la información. Esto nos va a ayudar a quitar redundancias.

## Pros y Contras

### Pros

- Actualizar los datos de los comentarios y del autor es muy fácil.
- Posibilidad de mostrar fácilmente todas las publicaciones, autores y comentarios.
- No hay duplicación de datos.

### Contras

- Mostrar pocos comentarios en una publicación requiere pasar un objeto con todos los comentarios.
- En aplicaciones pequeñas sin mucha duplicación de datos, es posible que no sea necesario normalizar los datos.

## Conclusiones

- normalizedData es es objeto resultante del proceso de normalización.
- Al revisar su estructura, se puede comprobar que las redundancias fueron eliminadas y su tamaño es menor que el del objeto original.
- Luego hacemos el proceso inverso con denormalize
- Verificamos la estructura del objeto desnormalizado y vemos que hemos recuperado los datos originales y el tamaño del objeto corresponde.
- Para el ejemplo dado, logramos una reducción de tamaño de 1381 bytes de los datos originales a 961 bytes normalizados, lo que representa un 30% de compresión de la información.
- Le eliminación de las redundancias implica una disminución del tamaño de la estructura que contiene nuestros datos.

