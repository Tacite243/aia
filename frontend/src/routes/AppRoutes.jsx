import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';
import HelpPage from '../pages/helpPage';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import VideoPage from '../pages/videoPage';
import QuestionSpace from '../pages/questionsPage';
import CreateEventForm from '../components/createEvent';
import FileUpload from '../pages/upload';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/video' element={<VideoPage />} />
      <Route path='/questions' element={<QuestionSpace />} />
      <Route path='/ressources' element={<FileUpload />} />
    </Routes>
  );
}

export default AppRoutes;
