const express = require('express')
const router = express.Router()
const controller = require('../controllers/scheduling-controller')
const authService = require('../services/auth-service')

router.get('/', authService.authorize, controller.getAll)
router.get('/:scheduleId', authService.authorize, controller.getById)
router.put('/:schedulerId', authService.authorize, controller.put)
router.delete('/:scheduleId', authService.authorize, controller.delete)
router.post('/', authService.authorize, controller.post)

module.exports = router;