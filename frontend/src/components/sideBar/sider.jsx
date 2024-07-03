import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sider.css'; // Assurez-vous d'ajouter du CSS pour styliser la sidebar


export default function Sider() {
  return (
    <div className="sider">
      <ul className="sider-liste">
        <li>
          <NavLink to="/dashboard" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/video" activeClassName="active-link">
            Vidéo
          </NavLink>
        </li>
        <li>
          <NavLink to="/questions" activeClassName="active-link">
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to="/supports" activeClassName="active-link">
            Supports
          </NavLink>
        </li>
        <li>
          <NavLink to="/intervenant" activeClassName="active-link">
            Intervenant
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
