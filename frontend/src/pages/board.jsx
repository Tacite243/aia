import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header/head';
import Sider from '../components/sideBar/sider';
import Intervenant from '../components/intervenants';
import Video from '../components/video';

export default function Board() {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage
                const response = await axios.get(`http://localhost:5000/api/events/${eventId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data);
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
            {/* <h1>{event.title}</h1>
            <p>Location: {event.location}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Seats: {event.seats}</p> */}
            <div className="dashboard">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <h4 className="title">{event.title}</h4>
                    <p>Place disponible : {event.seats}</p>
                    <p>Id de l'event : {event.id}</p>
                    <div className="description">
                        {/* <p>{event.description}</p> */}
                    </div>
                    <div className="main-grid">
                        <Intervenant />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
