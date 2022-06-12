const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = 'Frase Inicial'

// Gets
app.get('/api/frase', (req, res) => {
  res.json({
    frase
  })
})

app.get('/api/palabras/:posicion', (req, res) => {
  let { posicion } = req.params
  let fraseArr = frase.split(' ')

  if(posicion > fraseArr.length){
    res.json({ error: 'Out of index' })
  } else {

    res.json({
      buscada: fraseArr[posicion - 1]
    })
  }
})

app.post('/api/palabras', (req, res) => {
  let { palabra } = req.body 
  frase += ` ${palabra}`
  
  res.json({
    agregada: {
      palabra,
      posicion: frase.split(' ').length
    }
  })

})

app.put('/api/palabras/:posicion', (req, res) => {
  let { posicion } = req.params
  let { palabra } = req.body

  let fraseArr = frase.split(' ')
  if(posicion > fraseArr.length || posicion < fraseArr.length){
    res.json({ error: 'Out of index' })
  } else {
    let anterior = fraseArr[posicion - 1]
    fraseArr[posicion - 1] = palabra
    frase = fraseArr.join(' ')

    res.json({
      actualizada: {
	palabraNueva: palabra,
	anterior

      }
    })
  }

})

app.delete('/api/palabras/:posicion', (req, res) => {
  let { posicion } = req.params
  let fraseArr = frase.split(' ')

  if(posicion > fraseArr.length){
    console.log(fraseArr.length, posicion) 
    res.json({ error: 'Out of index' })
  } else {
    let eliminado = fraseArr.splice((posicion - 1), 1)
    frase = fraseArr.join(' ')
    res.json({ eliminado })
  }
})


// Listen
app.listen(8080, () => console.log('Server on port', 8080))
