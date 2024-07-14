import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Boutton from './bouton';
import axios from 'axios';

export default function CreateEvent({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState('');

    function handleCreate(event) {
        event.preventDefault();
        const newEvent = {
            title: title,
            location: location,
            date: `${date}`,
            time: `${time}`,
            seats: seats,
        };
        
        console.log('Creating event with data:', newEvent); // Log des valeurs avant l'envoi
        const token = localStorage.getItem('token');

        axios.post('https://aia-backend-7qd3.onrender.com/api/events/create', newEvent, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log('Event created: ', response.data);
            navigate('/dashboard');
        }).catch(error => {
            console.error('There was an error creating the event !', error.message);
        });
    }

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <form onSubmit={handleCreate}>
                    <TextField
                        label="Titre de l'événement"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className="form-field"
                    />
                    <TextField
                        label="Lieu de l'événement"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                        className="form-field"
                    />
                    <TextField
                        label="Date de l'événement"
                        type="date"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-field"
                    />
                    <TextField
                        label="Heure de l'événement"
                        type="time"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="form-field"
                    />
                    <TextField
                        label="Nombre de places"
                        type="number"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={seats}
                        onChange={(e) => { setSeats(e.target.value) }}
                        className="form-field"
                    />
                    <Boutton text={"Créer l'événement"} type='submit' />
                </form>
            </div>
        </div>
    );
}
