import express from 'express'

const nombres = [ 'Luis', 'Lucía', 'Juan', 'Augusto', 'Ana' ]
const apellidos = [ 'Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei' ]
const colores = [ 'rojo', 'verde', 'azul', 'amarillo', 'magenta' ]

const getRandomElement = (arr) => {
	return arr[ Math.floor(arr.length * Math.random()) ]
}

const randomCombination = () => {
	return {
		nombre: getRandomElement(nombres),
		apellido: getRandomElement(apellidos),
		colores: getRandomElement(colores)
	}
}

const generarNPersonas = (cant) => {
	const personas = []
	for (let i = 0; i < cant; i++){
		personas.push(randomCombination())
	}
	return personas
}

const app = express()

const CANT_PERS_DEFAULT = 10

app.get('/api/personas', (req, res) => {
    res.json(generarNPersonas(CANT_PERS_DEFAULT))
})

const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`Servidor Http Mocking escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en servidor ${error}`))
