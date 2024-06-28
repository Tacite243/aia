import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="frontend\src\assets\AIA event.App..jpg" alt="Logo" height="40" />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/help">Aide</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
