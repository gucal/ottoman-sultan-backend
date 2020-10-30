var express = require('express');
var router = express.Router();

const SultanController = require('../contoller/SultanController');

router.get('/', SultanController.getAllSultans);

router.get('/:id', SultanController.getSultanById);

router.post('/', SultanController.postSultan);

module.exports = router;
