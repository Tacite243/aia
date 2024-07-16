const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/create', authenticateToken, eventController.createEvent);
router.get('/events/:id', eventController.getEventById);

module.exports = router;