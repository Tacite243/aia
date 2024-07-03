import { TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEvent({ isOpen, onClose }) {
    const navigate = useNavigate();

    function handleCreate(event){
        event.preventDefault()
        navigate('/dashboard')
    }

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <form>
                    <TextField
                        label="Titre de l'événement"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label="lieu de l'événement"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label=""
                        type="date"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label=""
                        type="time"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label="Nombre des places"
                        type="text"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                </form>
                <button onClick={handleCreate}>Close</button>
            </div>
        </div>
    );
};
