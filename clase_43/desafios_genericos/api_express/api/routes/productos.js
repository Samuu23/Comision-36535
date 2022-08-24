const express = require('express');
const router = express.Router();

function makeRandomId() {
  const nums = []
  for (let i = 0; i < 8; i++) {
    nums.push(Math.floor(10 * Math.random()))
  }
  return `${Date.now()}-${nums.join('')}`
}

productos = []

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(productos)
});

router.get('/:id', function(req, res, next) {
  res.json(productos)
});

router.post('/', function(req, res, next) {
  res.json(productos)
});

router.put('/', function(req, res, next) {
  res.json(productos)
});

router.delete('/', function(req, res, next) {
  res.json(productos)
});
module.exports = router;
