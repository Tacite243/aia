import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';
import HelpPage from '../pages/helpPage';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import VideoPage from '../pages/videoPage';
import QuestionSpace from '../pages/questionsPage';
import CreateEventForm from '../components/createEvent';
import Board from '../pages/board';
import FileUpload from '../pages/upload';
import Intervenant from '../components/intervenants';
import IntervenantPage from '../pages/IntervenantPage';

function AppRoutes() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/home" element={token ? <HomePage /> : <Navigate to="/" />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/dashboard/:eventId" element={<Board />} />
      <Route path='/video' element={<VideoPage />} />
      <Route path='/questions' element={<QuestionSpace />} />
      <Route path='/default' element={<CreateEventForm />} />
      <Route path='/ressources' element={<FileUpload />} />
      <Route path='/intervenant' element={<IntervenantPage />}/>
    </Routes>
  );
}

export default AppRoutes;
