const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router
  .route('/predict')
  .post(controllers.predict.createPrediction)

module.exports = router;
