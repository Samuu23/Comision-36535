const express = require('express')
const app = express()
const router = require('./routes/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/products', router)
app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

app.listen(3000, () => console.log(`Server on port ${3000}`))
