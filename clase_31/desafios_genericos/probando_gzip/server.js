import express from 'express'
import compression from 'compression'

const app = express()
const PORT = parseInt(process.argv[2]) || 3000
const mensaje = 'Hola Coders'
const mensajeLargo = mensaje.repeat(1000)

app.get('/saludo', (req, res) => {
	res.send(mensajeLargo)
})

app.get('/saludozip', compression(), (req, res) => {
	res.send(mensajeLargo)
})

app.listen(PORT, err => { 
	if(!err){ console.log(`Server on Port ${PORT}`) }
})
