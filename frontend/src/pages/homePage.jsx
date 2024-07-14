import React, { useState } from 'react';
import Header from '../components/header/head';
import Boutton from '../components/bouton';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import CreateEvent from '../components/createEvent';
import axios from 'axios';

export default function HomePage() {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [eventId, setEventId] = useState('');

    const handleNavigateToDashboard = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://aia-backend-7qd3.onrender.com/events/${eventId}`);
            if (response.status === 200 && response.data.exists) {
                navigate(`/dashboard/${eventId}`);
            } else {
                alert("L'événement avec cet identifiant n'existe pas.");
            }
        } catch (error) {
            console.error("Erreur lors de la vérification de l'identifiant de l'événement", error);
            alert("Une erreur s'est produite lors de la vérification de l'événement.");
        }
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='homePage'>
            <Header />
            <div className='homePageContainer'>
                <form onSubmit={handleNavigateToDashboard}>
                    <h4 className='home-title'>Rejoindre un événement</h4>
                    <TextField
                        label="code"
                        type="text"
                        required
                        variant="outlined"
                        className='input'
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                    />
                    <Boutton text={"Réjoindre"} type={'submit'} />
                </form>
                <div className='createEvent'>
                    <h4 className='home-title'>Ou créer un événement </h4>
                    <Boutton text={"créer un événement"} click={openPopup} />
                    <CreateEvent isOpen={isPopupOpen} onClose={closePopup} />
                </div>
            </div>
        </div>
    );
}
