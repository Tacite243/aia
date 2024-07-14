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
    const [errorMessage, setErrorMessage] = useState('');

    const handleNavigateToDashboard = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
            if (response.status === 200){
                navigate(`/dashboard/${eventId}`);
            }
        } catch (error){
            setErrorMessage('Event not found. Please check the code and try again.')
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
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
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
