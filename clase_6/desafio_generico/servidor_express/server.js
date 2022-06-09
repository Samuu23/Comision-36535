const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1 style="color:blue; font-family: Helvetica"> Bienvenidos al servidor express </h1> <br> <a style="font-family: Helvetica" href="/visitas"> Contador de visitas </a> <br> <a style="font-family: Helvetica" href="/fyh"> Fecha y hora actuales </a>')
})

let contador = 0
app.get('/visitas', (req, res) => {
  contador++
  res.send(`<h1 style="color:green; font-family: Helvetica"> Visitas: ${contador} </h1>`)
})

app.get('/fyh', (req, res) => {
  let date = new Date()
  let fecha = `<h1 style="color: DarkGoldenRod; font-family: Helvetica"> ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")} </h1>`
  res.send(fecha)
})

app.listen(3000, () => {
  console.log(`Server on port ${3000}`)
})
app.on("error", error => console.log(`Error en servidor ${error}`))
