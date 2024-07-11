const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createEvent = async (req, res) => {
    const { title, location, date, time, seats } = req.body;
    const userId = req.user.id;

    try {
        const event = await prisma.event.create({
            data: {
                title,
                location,
                date: new Date(date),
                time,
                seats: parseInt(seats),
                userId,
            },
        });
        res.status(201).json(event);
    } catch (error) {
        console.log(userId);
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Error creating event' });
    }
};
