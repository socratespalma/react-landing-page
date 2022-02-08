import Navbar from '@components/layout/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      if (headerRef.current !== show) {
        setHeaderBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      // className="header"
      className={`${headerBackground ? 'header' : 'header-transparent'}`}
    >
      <Link to="/" className="logo">
        SPG
      </Link>
      <Navbar />
    </header>
  );
}
