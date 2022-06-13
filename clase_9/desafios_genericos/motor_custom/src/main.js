const express = require('express')
const { promises: fs } = require('fs')

const app = express()

// Configuracion plantilla personalizada
app.engine('cte', async (filePath, options, callback) => {
  try {
    const content = await fs.readFile(filePath)
    const rendered = content.toString()
      .replace('^^titulo$$', '' + options.titulo + '')
      .replace('^^mensaje$$', '' + options.mensaje + '')
      .replace('^^autor$$', '' + options.autor + '')
      .replace('^^version$$', '' + options.version + '')
    return callback(null, rendered)
  } catch (err) {
    return callback(new Error(err))
  }
})

app.set('views', './views')
app.set('view engine', 'cte')

// Utilizacion
app.get('/cte1', (req, res) => {
  const datos = {
    titulo: 'CTE1',
    mensaje: 'Hello World',
    autor: 'Coderhouse',
    version: 'v1'
  }

  res.render('plantilla', datos)
})

app.get('/cte2', (req, res) => {
  const datos = {
    titulo: 'CTE2',
    mensaje: 'Hello Friends',
    autor: 'Coder',
    version: 'v2'
  }

  res.render('plantilla', datos)
})

app.listen(3000, () => console.log(`Server on Port ${3000}`))
