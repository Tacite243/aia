import React from 'react';
import './Sider.css'; // Assurez-vous d'ajouter du CSS pour styliser la sidebar
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes/routesConfig';

export default function Sider() {
  const location = useLocation;
  
  return (
    <div className="siderbar">
      <div className="sider">
        <ul className="sider-liste">
          {routes.map((route, index) => (
            <li key={index} className={location.pathname === route.path ? 'active' : ''}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
