const express = require('express')
const app = express()

const frase = "Hola mundo como estan"

app.get('/', (req, res) => {
  res.redirect('/api/frase')
})

app.get('/api/frase', (req, res) => {
  res.send(frase)
})

app.get('/api/letters/:num', (req, res) => {
  let num = 0
  try {
    num = parseInt(req.params.num)
  } catch (err) {
    res.json({ error: 'Out of range' })
  }
  console.log(num, frase.length)
  if(isNaN(num) || (num > frase.length || num <= 0)){
    res.json({ error: 'Out of range' })
  } else {
    console.log(num, frase.length)
    res.send(frase[num - 1])
  }

})

app.get('/api/words/:num', (req, res) => {
  let fraseArr = frase.split(' ')
  console.log(fraseArr)

  let num = 0
  try {
    num = parseInt(req.params.num)
    console.log(num)
  } catch (err) {
    console.log(num)
    res.json({ error: 'Out of range' })
  }
  if(isNaN(num) || num > fraseArr.length){
    res.json({ error: 'Out of range' })
  }

  res.send(fraseArr[num - 1])

})

app.listen(8080, () => console.log('Server on port', 8080))
