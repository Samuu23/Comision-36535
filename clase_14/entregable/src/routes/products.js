const { Router } = require('express')
const File = require('../container/File')

const productsRouter = Router()
const controller = new File('products')
const productModel = new 

productsRouter.get('/', (req, res) => {
	res.json(controller.getAll())
})
productsRouter.get('/:id', (req, res) => {
	res.json(controller.getById(req.params.id))
})
productsRouter.post('/', (req, res) => {
	res.json(controller.save(req.body))
})
productsRouter.put('/:id', (req, res) => {
	res.json(controller)
})
productsRouter.delete('/')


module.exports = productsRouter
