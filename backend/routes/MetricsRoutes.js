const express = require('express');
const router = express.Router();

const metricsController = require('../controllers/metricsController');

// add metrics
router.post('/metrics', metricsController.addMetrics);

// get metrics by user id
router.get('/metrics/:userId', metricsController.getMetricsByUserId);

// update metrics
router.put('/metrics/:id', metricsController.updateMetrics);

// delete metrics
router.delete('/metrics/:id', metricsController.deleteMetrics);

module.exports = router;
