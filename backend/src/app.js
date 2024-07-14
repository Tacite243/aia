const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventsRoutes = require('./routes/eventRoutes');
const { authenticateToken } = require('./middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api/events', authenticateToken, eventsRoutes);
app.use('/api', eventsRoutes)

module.exports = app;