const express = require('express')
const router = express.Router()
const controller = require('../controllers/user-controller')
const authService = require('../services/auth-service')

router.get('/', authService.authorize, controller.get)
router.post('/', controller.post)
router.get('/:userId', authService.authorize, controller.getById)
router.put('/:userId', authService.authorize, controller.put)
router.delete('/:userId', authService.authorize, controller.delete)
router.post('/authenticate', controller.authenticate)


module.exports = router