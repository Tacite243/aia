import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import AboutPage from '../pages/aboutPage';
import HelpPage from '../pages/helpPage';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
