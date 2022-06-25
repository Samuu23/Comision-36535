const express = require('express')
const cartRouter = require('./routes/cart')
const productsRouter = require('./routes/products')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)


// Listen
app.listen(PORT, () => console.log(`Server on Port ${PORT}`))
