const express = require('express');
let router = express.Router();
const controller = require('../controllers/service-controller');
const authService = require('../services/auth-service');

router.get('/:serviceId', authService.authorize, controller.getById);
router.put('/:serviceId', authService.authorize, controller.put);
router.delete('/:serviceId', authService.authorize, controller.delete);
router.post('/', controller.post);
router.get('/', authService.authorize, controller.getAll);

module.exports = router;