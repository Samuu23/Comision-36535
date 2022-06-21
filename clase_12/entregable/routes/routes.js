const { Router } = require('express')
const data = []
const router = Router()


// GET
router.get('/', (req, res) => {
  res.json({ products: data })
})

router.get('/:id', (req, res) => {
  let { id } = req.params
  let product = data.find(prod => id == prod.id)
  res.json({ result: product })
})

// POST
router.post('/', (req, res) => {
  let product = req.body
  if(data.length == 0){
    product.id = 1
  } else {
    product.id = data[data.length - 1].id + 1
  }
  data.push(product)
  res.json({ product })
})

router.put('/:id', (req,res) => {
  let { id } = req.params
  let newProduct = req.body
  newProduct.id = id
  let prodId = data.findIndex(prod => prod.id == id)
  data[prodId] = newProduct
 
  res.json({status: "Updated", product: newProduct})
})

// DELETE
router.delete('/:id', (req, res) => {
  let { id } = req.params
  let prodId = data.findIndex(prod => prod.id == id)
  data.splice(prodId, 1)
  res.json({ status: 'deleted' })

})

module.exports = router
