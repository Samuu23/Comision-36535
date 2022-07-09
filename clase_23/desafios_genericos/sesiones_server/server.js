const express = require('express')
const session = require('express-session')

const app = express()

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
)

const getNombreSession = req => req.session.nombre || ''

app.get('/', (req, res) => {
  if (req.session.contador) {
    if (req.session.contador < 3) req.session.contador++
    res.send(
      `${getNombreSession(req)} visitaste la página ${req.session.contador} veces.`
    )
  } else {
    req.session.nombre = req.query.nombre
    req.session.contador = 1
    res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
  }
})

app.get('/olvidar', (req, res) => {
	let nombre = getNombreSession(req)
  req.session.destroy(err => {
    if (err) {
      res.json({ error: 'olvidar', body: err })
    } else {
      res.send(`Hasta luego ${nombre}`)
    }
  })
})

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
