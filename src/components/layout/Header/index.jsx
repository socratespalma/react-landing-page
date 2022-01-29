import Navbar from '@components/layout/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        SPG
      </Link>
      <Navbar />
    </header>
  );
}
