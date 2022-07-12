import express from 'express'
import compression from 'compression'

const app = express()
app.use(compression())
const PORT = 3000
const saludo = 'Hola Coders';

app.get('/hi', (req, res) => {
	let message = ''

	for(let i = 0; i < 1000; i++){
		message += saludo + ' '
	}

	res.send(message)
})

app.listen(PORT, err => { 
	if(!err){ console.log(`Server on Port ${PORT}`) }
})
