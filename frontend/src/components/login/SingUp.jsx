import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css';

function SignUpForm({ toggleForm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signup', { email, password, name }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('User signed up:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <Container maxWidth="xs" className="form-container">
            <Box className="form-box">
                <Typography variant="h5" component="h1" gutterBottom>
                    Création de compte
                </Typography>
                <form onSubmit={handleSignUp}>
                    <TextField
                        label="Nom"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <TextField
                        label="Mot de passe"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        margin="normal"
                        variant="outlined"
                        className="form-field"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="form-button"
                    >
                        Créer un compte
                    </Button>
                </form>
                <Button onClick={toggleForm} fullWidth className="toggle-button">
                    Se connecter
                </Button>
            </Box>
        </Container>
    );
}

export default SignUpForm;
