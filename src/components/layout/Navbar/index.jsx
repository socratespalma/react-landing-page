import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const showNavRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      navRef.current.style.visibility = 'visible';
      showNavRef.current.style.transform = 'translateY(0)';
    } else {
      navRef.current.style.visibility = 'hidden';
      showNavRef.current.style.transform = 'translateY(-100%)';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="nav" ref={navRef}>
        <ul className="menu-nav" ref={showNavRef}>
          <li className="menu-nav__item">
            <NavLink
              className="menu-nav__link"
              to="/"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </NavLink>
          </li>
          <li className="menu-nav__item">
            <a
              href="#services"
              className="menu-nav__link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Services
            </a>
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
      <button
        type="button"
        className="menu-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </>
  );
}
