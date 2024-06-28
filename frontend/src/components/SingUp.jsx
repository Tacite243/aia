import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUpForm({ toggleForm }) {
    const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // Logique de connexion ici
    navigate('/home');
  };
    return (
        <Container maxWidth="xs" className="form-container">
            <Box className="form-box">
                <Typography variant="h5" component="h1" gutterBottom>
                    Inscription
                </Typography>
                <form onSubmit={handleSignUp}>
                    <TextField label="Email" type="email" fullWidth required margin="normal" variant="outlined" className="form-field" />
                    <TextField label="Mot de passe" type="password" fullWidth required margin="normal" variant="outlined" className="form-field" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="form-button">
                        S'inscrire
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
