// API routes
const express = require('express');
const router = express.Router();
module.exports = router;
router.post('/resources', (req, res) => {
    res.json({ success: true });
  });
  