import React, { useState } from 'react';
import Header from '../components/header/head';
import Boutton from '../components/bouton';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import CreateEvent from '../components/createEvent';


export default function HomePage() {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleNavigateToDashboard = (event) => {
        event.preventDefault();
        navigate('/dashboard')
    }

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
                    {/* <input type="text" placeholder='entrer le code ici' /> */}
                    <TextField
                        label="code"
                        type="text"
                        required
                        variant="outlined"
                        className='input'
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
};
