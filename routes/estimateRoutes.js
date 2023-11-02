const express = require('express');
const { calculate, getEstimate } = require('../controllers/estimateController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/calculate', authenticateJWT, calculate);
router.get('/', authenticateJWT, getEstimate);

module.exports = router;
