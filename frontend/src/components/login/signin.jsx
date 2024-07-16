import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, colors } from '@mui/material';
import axios from 'axios';
import './login.css';

function SignInForm({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      localStorage.setItem('token', response.data.token);
      console.log('logged');
      navigate('/home'); // Redirection après succès
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <Container maxWidth="xs" className="form-container" >
      <div className="content">
        <Box className="form-box">
          <Typography variant="h5" component="h1" gutterBottom style={{ fontWeight: 'bold', color: '#fff' }}>
            Connexion
          </Typography>
          <form onSubmit={handleSignIn}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
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
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              className="form-field"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ color: 'white' }}
              className="form-button"
            >
              Se connecter
            </Button>
          </form>
          <span>Ou</span>
          <Button onClick={toggleForm} fullWidth className="toggle-button" color='primary' style={{ color: 'white' }}>
            Créer un compte
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default SignInForm;
