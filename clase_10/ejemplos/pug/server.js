const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('hello.pug', { mensaje: 'Using Pug JS in Express' })
})

app.listen(3000, () => console.log(`Server on Port 3000`))
