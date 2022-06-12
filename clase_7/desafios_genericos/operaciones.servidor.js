const express = require('express')
const app = express()

app.get('/api/sumar/:num1/:num2', (req, res) => {
  let { num1, num2 } = req.params
  let resultado = parseInt(num1) + parseInt(num2)

  res.json(resultado)
})

app.get('/api/sumar', (req, res) => {
  console.log('App sumar')
  if(Object.entries(req.query).length > 0){
    let { num1, num2 } = req.query
    let resultado = parseInt(num1) + parseInt(num2)
    res.json(resultado)
  } else {
    res.json({ error: 'Algo fallo' })
  }
})

app.get('/api/sumar/:num1:num2', (req, res) => {
  console.log(req.params.num1)
  let { num1, num2 } = req.params
  let resultado = parseInt(num1) + parseInt(num2)

  res.json(resultado)
})

app.post('/api', (req, res) => {
  res.json({ message: 'Ok Post' })
})

app.put('/api', (req, res) => {
  res.json({ message: 'Ok Put' })
})

app.delete('/api', (req, res) => {
  res.json({ message: 'Ok Delete' })
})

app.listen(8080, () => console.log('Server on port 8080'))
