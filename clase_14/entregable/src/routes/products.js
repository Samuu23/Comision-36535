const { Router } = require('express')

const productsRouter = Router()

productsRouter.get('/')
productsRouter.get('/:id')
productsRouter.post('/')
productsRouter.put('/:id')
productsRouter.delete('/')


module.exports = productsRouter
