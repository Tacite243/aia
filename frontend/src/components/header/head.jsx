import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/aia_logo.png'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" height="70" />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/home">Acceuil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/help">Aide</Link></li>
          <li><Link to="/">Déconnexion</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
