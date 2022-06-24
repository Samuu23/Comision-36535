const { Router } = require('express')

const cartRouter = Router()

cartRouter.post('/')
cartRouter.delete('/:id')
cartRouter.get('/')
cartRouter.post('/:id/products')
cartRouter.delete('/:id/products/:id_prod')

module.exports = cartRouter
