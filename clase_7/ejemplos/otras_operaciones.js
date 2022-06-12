const express = require('express')
const app = express()

// Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON en formato urlencoded al recibirlos, debemos indicarlo en forma explícita, agregando las siguiente líneas luego de crearlo.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST
api.post('/api/messages', (req, res) => {
  console.log('POST Request recieved')

  // Aqui se deberia crear un guardar un recurso
  // const message = req.body
})

// PUT
// Se debe proveer el identificador del registro a reemplazar y el dato con el que se lo quiere sobreescribir.
api.put('/api/messages', (req, res) => {
  console.log('PUT Request recieved')

  // Aqui debo allar el recurso con id == req.params.id
  // Y luego reemplazarlo con el registro de req.body
  
  res.json({
    result: 'OK!',
    id: req.params.id,
    new: req.body
  })
})

// DEETE
app.delete('/api/messages:id', (req, res) => {
  console.log('DELETE Request recieved')

  // Aqui deberia eliminar el recurso con id == req.params.id

  res.json({
    result: 'OK!',
    id: req.params.id
  })

})

app.listen(3000, () => console.log(`Server on port ${3000}`))
