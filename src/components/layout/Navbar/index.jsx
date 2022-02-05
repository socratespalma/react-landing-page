import useScroll from '@hooks/useScroll';
import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const navRef = useRef(null);
  const showNavRef = useRef(null);

  /**
   * This is a function that checks the size of the window
   */
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  /**
   * This is a function that sets the state of 'isOpen' depending on the screensize
   */
  const handleClick = () => {
    if (size < 1024) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  /**
   * This is a function that handles the click on the home nav item
   */
  const handleHome = () => {
    window.scrollTo(0, 0);
    handleClick();
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    if (size < 1024) {
      setIsOpen(false);
    } else if (size >= 1024) {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [size]);

  useEffect(() => {
    if (size < 1024) {
      if (isOpen) {
        navRef.current.style.visibility = 'visible';
        showNavRef.current.style.transform = 'translateY(0)';
      } else {
        navRef.current.style.visibility = 'hidden';
        showNavRef.current.style.transform = 'translateY(-100%)';
      }
    } else if (size >= 1024) {
      navRef.current.style.visibility = 'visible';
      showNavRef.current.style.transform = 'translateY(0)';
    }
    // else {
    //   setIsOpen(true);
    // }
  }, [isOpen]);

  useScroll();

  return (
    <>
      <nav className="nav" ref={navRef}>
        <ul className="menu-nav" ref={showNavRef}>
          <li className="menu-nav__item">
            <NavLink className="menu-nav__link" to="/" onClick={handleHome}>
              Home
            </NavLink>
          </li>
          <li className="menu-nav__item">
            <a href="#about" className="menu-nav__link" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="menu-nav__item">
            <a
              href="#services"
              className="menu-nav__link"
              onClick={handleClick}
            >
              Services
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="#contact" className="menu-nav__link" onClick={handleClick}>
              Contact
            </a>
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
