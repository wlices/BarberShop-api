const express = require('express');
let router = express.Router();
const controller = require('../controllers/service-controller');

router.get('/:serviceId', controller.getById);
router.put('/:serviceId', controller.put);
router.delete('/:serviceId', controller.delete);
router.post('/', controller.post);
router.get('/', controller.getAll);

module.exports = router;