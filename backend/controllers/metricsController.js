// Metics Controller

const Metrics = require('../models/metrics');

// Add Metrics
exports.addMetrics = async (req, res) => {
    try
    {
        const newMetrics = new Metrics(req.body);
        const savedMetrics = await newMetrics.save();
        res.status(201).json(newMetrics);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get metrics by user id

exports.getMetricsByUserId = async (req, res) => {
    try {
        const metrics = await Metrics.find({ userId: req.params.userId });
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Update Metrics

exports.updateMetrics = async (req, res) => {
    try {
        const updatedMetrics = await Metrics.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMetrics);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// Delete Metrics
exports.deleteMetrics = async (req, res) => {
    
    try {
        await Metrics.findByIdAndRemove(req.params.id);
        res.json({ message: 'Metrics deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};