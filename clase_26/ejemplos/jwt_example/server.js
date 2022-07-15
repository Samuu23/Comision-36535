const express = require('express')
const jwt = require('jsonwebtoken')
const PRIVATE_KEY = 'cod3rhous3'
const usuarios = []

// Middlewares
const generateToken = (user) => {
	const token = jwt.sign({data: user}, PRIVATE_KEY, { expiresIn: '24h' })
	return token
} 

const auth = (req, res, next) => {
	const authHeader = req.headers.authorization

	if(!authHeader) { return res.status(401).json({ error: 'Not autenticated' }) }

	const token = authHeader.split(' ')[1]

	jwt.verify(token, PRIVATE_KEY, (error, decode) => {
		if(error){ console.log(token); return res.status(403).json({ error: 'Not authorized' }) }

		req.user = decode.data
		next()
	})
}

// App and Settings
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.post('/register', (req, res) => {
	const { nombre, password, direccion } = req.body

	const exists = usuarios.find(usuario => usuario.nombre == nombre)

	if(exists) { return res.json({ error: 'User exists' }) }

	const usuario = { nombre, password, direccion }

	usuarios.push(usuario)

	const accessToken = generateToken(usuario)
	res.json({ accessToken })
})

app.post('/login', (req, res) => {
	const { nombre, password } = req.body

	const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

	if(!usuario) { return res.json({ error: 'User and Password incorrect' }) }

	const accessToken = generateToken(usuario)
	res.json({ accessToken })
})

app.get('/profile', auth, (req, res) => {
	// Headers
	// Key: Authorization
	// Value: Beareer <token>
	return res.json({ response: 'Esta pagina se muestra si esta logueado' })
})

const server = app.listen(3000, () => console.log(`Server on Port ${3000}`))
server.on('error', error => console.log(`Error on server: ${error}`))



