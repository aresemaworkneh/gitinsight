// API routes
const express = require('express');
const router = express.Router();

// Routes
const UserRoutes = require('../routes/UserRoutes');
const MetricsRoutes = require('../routes/MetricsRoutes');

// Testing 
router.get('/', (req, res) => {
    res.send('Hello A!');
});


router.use('/users', UserRoutes);
router.use('/metrics', MetricsRoutes);

module.exports = router;
