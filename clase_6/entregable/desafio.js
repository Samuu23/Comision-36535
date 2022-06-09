const express = require('express')
const File = require('./File')
const app = express()

let products = new File('./products.txt')
let contador = 0;

app.get('/', (req, res) => {
  res.send('<h1 style="font-family: Helvetica"> <i> Products</i> </h1> <ul> <li> <a style="color: darkblue; text-decoration: none; font-size: 1.5em; font-family: Helvetica" href="/products"> Products </a> </li> <li> <a style="color: darkblue; text-decoration: none; font-size: 1.5em; font-family: Helvetica" href="randomProduct"> Random Product </a> </li> </ul>')
})

app.get('/products', (req, res) => {
  res.json(products.getAll())
})

app.get('/randomProduct', (req, res) => {
  res.send(products.getRandom())

})

app.listen('8080', () => console.log(`Server on port 8080`))
