const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// Persistencia por fileStore
const FileStore = require('session-file-store')(session)

// Inicializacion
const app = express()
app.use(cookieParser())
app.use(session({
	// Persistencia fileStore
	store: new FileStore({path: './sesiones', ttl: 300, retries: 0}),

	secret: 'secret',
	resave: false,
	saveUninitialized: false
}))

app.get('/login', (req, res) => {
  const { username, password } = req.query

  if (username !== 'pepe' || password !== 'pepepass') {
    return res.send('login failed')
  }

  req.session.user = username
  req.session.admin = true
  res.send('login success!')
})

function auth(req, res, next) {
  if (req.session?.user === 'pepe' && req.session?.admin) {
    return next()
  }
  return res.status(401).send('error de autorización!')
}

// Autenticacion
app.get('/privado', auth, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
