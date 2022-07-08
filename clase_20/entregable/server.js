const express = require('express')
// File
// const cartRouter = require('./routes/file/cart')
// const productsRouter = require('./routes/file/products')

//MongoDB
const cartRouter = require('./src/routes/cart')
const productsRouter = require('./src/routes/products')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)


// Listen
app.listen(PORT, () => console.log(`Server on Port ${PORT}`))
