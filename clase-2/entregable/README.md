# Desafio entregable:
1. __Declarar una clase Usuario__

2. __Hacer que Usuario cuente con los siguientes atributos:__
    - nombre: String
    - apellido: String
    - libros: Object[]
    - mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3. __Hacer que Usuario cuente con los siguientes métodos:__
    - getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    - addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    - countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    - addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    - getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
4. __Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.__

## Ejemplos:
- countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.

- getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].

- getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'
