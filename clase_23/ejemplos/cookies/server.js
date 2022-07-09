// Implementacion
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

// app.use(cookieParser())

// Cookie Parser con Secret
app.use(cookieParser('papafrita'))
// Tambien se puede poner con un array de strings


// Creando una Cookie
// En la ruta /set se crea una cookie de nombre “server” y valor “express”. La misma no tiene un tiempo de vida límite.

app.get('/set', (req, res) => {
	res.cookie('server', 'express').send('Cookie Set')
})

// En la ruta /setEX se crea una cookie de nombre “server2” y valor “express”. En esta, se le seteó un tiempo de vida máximo de 30 segundos.

app.get('/setEX', (req, res) => {
	res.cookie('server2', 'express2', { maxAge: 30000 }).send('Cookie SetEX')
})

// Obtener una Cookie
app.get('/get', (req, res) => {
	res.send(req.cookies)
})

// Borrar una Cookie
// El parámetro que se le pasa al método es el nombre de la cookie que se desea borrar.
app.get('/clr', (req, res) => {
  for (const cookieName of Object.keys(req.cookies)) {
    res.clearCookie(cookieName)
  }
  for (const signedCookieName of Object.keys(req.signedCookies)) {
    res.clearCookie(signedCookieName)
  }
  res.send('Clear Cookies')
})

// Cookie Firmada
app.get('/setSigned', (req, res) => {
	res.cookie('server3', 'express3', { signed: true }).send('Set Signed Cookie')
})

app.listen(3000, () => console.log(`Server on Port ${3000}`))
