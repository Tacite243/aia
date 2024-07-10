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
                date: new Date(`${date}T${time}:00.000Z`),
                seats: parseInt(seats),
                userId: userId,
            },
        });
        res.status(201).json(event);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ details: error.message });
    }
};
