let nombre = "pepe"
let edad = 25
let precio = 99.90
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"]
let peliculasFavoritas = [
  {
    nombre: "The Avengers: Los Vengadores",
    estreno: 2012,
    protagonistas: ["Robert Downey Jr", "Chris Evans", "Jeremy Renner"]
  }, {
    nombre: "Capian America y e Soldado del Invierno",
    estreno: 2014,
    protagonistas: ["Chris Evans", "Anthony Mackie", "Sebastian Stan"]
  }
]

console.log(nombre, edad, precio, seriesFavoritas, peliculasFavoritas)
console.log(++edad)

peliculasFavoritas.push({
  nombre: "Avengers: Endgame",
  estreno: 2019,
  protagonistas: ["Chris Evans", "Robert Downey Jr", "Tom Holland"]
})
