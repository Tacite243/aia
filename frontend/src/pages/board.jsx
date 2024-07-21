import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header/head';
import Sider from '../components/sideBar/sider';

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
            <div className="dashboard">
                <Header />
                <div className="body">
                    <Sider />
                    <div className="main">
                        <h2 className="title">{event.title}</h2>
                        <div className="main-grid">
                            <div className='event-details'>
                                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                <p>Time: {event.time}</p>
                                <p>Place disponible : {event.seats}</p>
                                <p>Id de l'event : {event.id}</p>
                                <p>Lieu: {event.location}</p>
                                <div className="description">
                                    {/* <p>{event.description}</p> */}
                                </div>
                            </div>
                            {/* <Intervenant /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
