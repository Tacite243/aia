import React, { useState } from 'react';
import Header from '../components/header/head';
import Boutton from '../components/bouton';
import { useNavigate } from 'react-router-dom';
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
            if (response.status === 200) {
                navigate(`/dashboard/${eventId}`);
            }
        } catch (error) {
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
            <div className="content">
                <div className='homePageContainer'>
                    <form onSubmit={handleNavigateToDashboard} className='join-event'>
                        <h4 className='home-title'>Rejoindre un événement</h4>
                        <input
                            type="text"
                            name=""
                            className='input'
                            value={eventId}
                            onChange={(e) => setEventId(e.target.value)}
                        /> <br />
                        <div id="error">
                            {errorMessage &&
                                <p className="error-message">
                                    <div className="errormessage" style={{color: 'red'}}>
                                        {errorMessage}
                                    </div>
                                </p>}
                        </div>
                        <Boutton text={"Réjoindre"} type={'submit'} />
                    </form>
                    <div className="medium" style={{ color: 'rgba(0, 89, 255, 0.743)' }}>Ou</div>
                    <div className='createEvent'>
                        <h4 className='home-title'>Créer un événement </h4>
                        <Boutton text={"créer un événement"} click={openPopup} />
                        <CreateEvent isOpen={isPopupOpen} onClose={closePopup} />
                    </div>
                </div>
            </div>
            <div className="description">
                <p>AIA Conf App, designed by aia team</p>
            </div>
        </div>
    );
}
