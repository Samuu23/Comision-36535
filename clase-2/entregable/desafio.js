class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    
    countMascotas() {
        return this.mascotas.length
    }
    
    addBook(nombre, autor) {
        this.libros.push({nombre, autor})
    }
    
    getBookNames() {
        let bookNames= this.libros.map(libro => libro.nombre)
        return bookNames
    }
}

let libros = [{
        nombre: "El señor de las moscas",
        autor: "William Golding"
    },
    {
        nombre: "Fundacion",
        autor: "Isaac Asimov"
    }
]

let mascotas = ["Perro", "Gato"]
const emi = new Usuario("Emiliano", "Perez", libros, mascotas)

emi.addBook("Las cronicas de Narnia", "C. S. Lewis")
console.log(emi.getFullName())
console.log(emi.countMascotas())
console.log(emi.getBookNames())
