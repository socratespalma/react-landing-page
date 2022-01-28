import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="menu-nav">
        <li className="menu-nav__item">
          <NavLink className="menu-nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="menu-nav__item">
          <NavLink className="menu-nav__link" to="/">
            Services
          </NavLink>
        </li>
        <li className="menu-nav__item">
          <NavLink className="menu-nav__link" to="/">
            About
          </NavLink>
        </li>
        <li className="menu-nav__item">
          <NavLink className="menu-nav__link" to="/">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
