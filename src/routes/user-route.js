const express = require('express')
const router = express.Router()
const controller = require('../controllers/user-controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.get('/:userId', controller.getById)
router.put('/:userId', controller.put)
router.delete('/:userId', controller.delete)

module.exports = router