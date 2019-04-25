const express = require('express')
const router = express.Router()
const controller = require('../controllers/service-controller')

router.get('/', controller.getAll)
router.get('/:scheduleId', controller.getById)
router.put('/:schedulerId',controller.put)
router.delete('/:scheduleId', controller.delete)
router.post('/', controller.post)


module.exports = router;