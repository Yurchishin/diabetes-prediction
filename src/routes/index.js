const express = require('express');
const predict = require('./predict.route');

const router = express.Router();

router.use('/api', predict)

module.exports = router;
