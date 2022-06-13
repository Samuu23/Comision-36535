const fs = require('fs')
const MotorDePlantillas = require('./motor_plantillas.js')

const textoPlantilla = fs.readFileSync('./views/index.plantilla', 'utf-8')

const generarHtml = MotorDePlantillas.compilar(textoPlantilla)

const contexto = {
    nombre: 'marian',
    apellido: 'aquino',
    cantVisitas: 2
}

const html = generarHtml(contexto)

// console.log(html)

fs.writeFileSync('index.html', html)
