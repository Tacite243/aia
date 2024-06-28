import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';


import './login.css';


function SignInForm({ toggleForm }) {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Logique de connexion ici
    navigate('/home');
  };

  return (
    <Container maxWidth="xs" className="form-container">
      <Box className="form-box">
        <Typography variant="h5" component="h1" gutterBottom>
          Connexion
        </Typography>
        <form onSubmit={handleSignIn}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            className="form-field"
          />
          <TextField
            label="Mot de passe"
            type="password"
            fullWidth
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
            Se connecter
          </Button>
        </form>
        <Button onClick={toggleForm} fullWidth className="toggle-button">
          Créer un compte
        </Button>
      </Box>
    </Container>
  );
}

export default SignInForm;
