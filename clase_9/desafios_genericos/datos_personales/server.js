const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(3000, () => console.log(`Server on Port 3000`))
