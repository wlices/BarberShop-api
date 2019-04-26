const express = require('express')
const router = express.Router()
const controller = require('../controllers/customer-controller')
const authService = require('../services/auth-service')

router.get('/', authService.authorize, controller.getAll)
router.get('/:customerId', authService.authorize, controller.getById)
router.put('/:customerId', authService.authorize, controller.put)
router.delete('/:customerId', authService.authorize, controller.delete)
router.post('/', controller.post)

module.exports = router