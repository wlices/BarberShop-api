const express = require('express')
const router = express.Router()
const controller = require('../controllers/customer-controller')

router.get('/', controller.getAll)
router.get('/:customerId', controller.getById)
router.put('/:customerId', controller.put)
router.delete('/:customerId', controller.delete)
router.post('/', controller.post)

module.exports = router