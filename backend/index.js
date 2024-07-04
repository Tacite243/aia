const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const secretKey = 'your_secret_key'; // Remplacez par une clé secrète plus forte

// Middleware pour vérifier les tokens
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Inscription
app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, name },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Email already exists' });
    }
});

// Connexion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

// Route protégée
app.get('/profile', authenticateToken, async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
