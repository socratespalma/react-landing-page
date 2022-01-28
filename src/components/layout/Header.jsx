import React from 'react';
// import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        SPG
      </Link>

      <Navbar />
      <MenuButton />
    </header>
  );
}
