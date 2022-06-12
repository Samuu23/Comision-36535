const express = require('express')
const app = express()

let users = [
      {
	name: 'Emiliano',
	age: 25
      },
      {
	name: 'Yessica',
	age: 26
      },
      {
	name: 'Matias',
	age: 25
      },
      {
	name: 'Ezequiel',
	age: 25
      }
    ]

let messages = [
  {
    id: 1,
    message: 'Buenos días',
    user: 'Emiliano'
  },
  {
    id: 2,
    message: 'Buenos días',
    user: 'Ezequiel'
  },
  {
    id: 3,
    message: 'Que onda',
    user: 'Matias'
  },
  {
    id: 4,
    message: 'Que pasaaa',
    user: 'Emiliano'
  }
]

app.get('/api/users', (req, res) => {
  console.log('Request recieved')

  res.json({ users: users })
})

app.get('/api/messages', (req, res) => {
  console.log('GET Request recieved')

  // Ejemplo link: localhost:3000/api/messages?<clave>=<valor>
  // Donde la clave y el valor pueden ser cualquier cosa
  // Para agregar mas datos se agrega un & y otro par clave=valor
  if(Object.entries(req.query).length > 0) {
    res.json({
      result: 'GET with query params: OK!',
      query: req.query
    })
  } else {
    res.json({
      result: 'GET all: OK!'
    })
  }
})

app.get('/api/messages/:id', (req, res) => {
  console.log('GET Request recieved')

  message = messages.find(msg => req.params.id == msg.id)
  
  res.json({ resut: message ? message : 'Not found' })
})

app.listen(3000, () => console.log(`Server on port ${3000}`))
