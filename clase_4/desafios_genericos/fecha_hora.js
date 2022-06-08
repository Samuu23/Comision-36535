const fs = require('fs')

try {
    fs.writeFileSync('./fecha_hora.txt', new Date().toLocaleString())
} catch(e) {
    console.log(e)
}

try {
    const contenido = fs.readFileSync('fecha_hora.txt', 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}
