const express = require('express')
const session = require('express-session')

const app = express()

// Implementacion
// Se utiliza false para prevenir que haya sesiones vacias
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

// Guardar datos en sesion
app.get('/con-sesion', (req, res) => {
	showSession(req)
	if(!req.session.contador){
		req.session.contador = 1
		res.send('Bienvenido!')
	} else {
		req.session.contador++
		res.send(`Usted a visitado el sitio ${req.session.contador} veces`)
	}
})

// Borrar datos de sesion
app.get('/logout', (req, res) => {
	req.session.destroy(err => {
		if(err){
			res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }	
	})
})

// Login Con Sesion
app.get('/login', (req, res) => {
	console.log(req.query)
	const { username, password } = req.query
	if (username !== 'pepe' || password !== 'pepepass') {
		return res.send('login failed')
	}
	req.session.user = username
	req.session.admin = true
	res.send('login success!')
})

app.get('/info', (req, res) => {
  showSession(req)
  res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

function showSession(req) {
  console.log('------------ req.session -------------')
  console.log(req.session)

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)

  console.log('----------- req.cookies ------------')
  console.log(req.cookies)

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
}
