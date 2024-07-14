import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Board() {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`/api/events/${eventId}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEvent();
    }, [eventId]);

    if (!event) return <p>Loading...</p>;

    return (
        <div>
            <h1>{event.title}</h1>
            <p>Location: {event.location}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Seats: {event.seats}</p>
            {/* Afficher d'autres informations sur l'événement */}
        </div>
    );
}
