const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    codeOwnership: {
        averageOwnership: {
            type: Number,
            required: true
        },
        highestOwnershipFile: {
            type: String,
            required: true
        }
    },
    fileActivity: {
        activeFiles: {
            type: [String],
            required: true
        },
        stableFiles: {
            type: [String],
            required: true
        },
        recurrentlyActiveFiles: {
            type: [String],
            required: true
        }
    }
});

module.exports = mongoose.model('Metrics', metricsSchema);


