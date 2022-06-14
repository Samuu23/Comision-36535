const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
  let { min, level, max, title } = req.query
  res.render('level', { min, max, level, title })
})

app.listen(3000, () => console.log(`Server on Port 3000`))
