const express = require('express')
const { Router } = express
const personas = [
  {
    "nombre": "emiliano",
    "apellido": "perez",
    "edad": 25
  },
  {
    "nombre": "Yessica",
    "apellido": "Cantera",
    "edad": 26
  }
]
const mascotas = [
  {
    "nombre": "Minnie",
    "raza": "callejera",
    "edad": 3
  },
  {
    "nombre": "Michi",
    "raza": "domestico",
    "edad": 5
  }
]


const app = express()
const routerMascotas = Router()
const routerPersonas = Router()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// console.log(personas)
// console.log(mascotas)

// MASCOTAS ROUTER
routerMascotas.get('/', (req, res) => {
  res.json(mascotas)
})

routerMascotas.post('/', (req, res) => {
  let { nombre, raza, edad } = req.body
  mascotas.push({nombre, raza, edad})
  res.json({ respuesta: 'Datos guardados', data: { nombre, raza, edad }, mascotas })
  // res.json(req.body)
})

// PERSONAS ROUTER
routerPersonas.get('/', (req, res) => {
  res.json(personas)
})

routerPersonas.post('/', (req, res) => {
  let { nombre, apellido, edad } = req.body
  personas.push({ nombre, apellido, edad })
  res.json({ respuesta: 'Datos guardados', data: { nombre, apellido, edad }, personas })
})

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

// Router App
app.get('/', (req, res) => {
  res.json('Bienvenido')
})

// Listen
app.listen(8080, () => console.log(`Server on Port http://localhost:8080/`))
