const express = require('express')
const app = express()

app.use(express.static())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(3000, () => { console.log(`Server on Port 3000`) })
