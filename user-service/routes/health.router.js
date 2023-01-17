const express = require('express');
const router = express.Router();
const { checkHealth } = require('../controllers/health.controller');

router.get('/', (req, res) => {
    const result = checkHealth();
    res.json(result);
});
module.exports = router;