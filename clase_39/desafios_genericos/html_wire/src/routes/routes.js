const router = require('express').Router()
const controller = require('../controller/controller')

router.get('/html-onwire', controller.htmlOnWire)

module.exports = router
