// routes/spotsRoutes.js
const express = require('express');
const { listSpots, getSpot } = require('../controllers/spotsController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, listSpots);
router.get('/:spotName', authenticateJWT, getSpot);

module.exports = router;
