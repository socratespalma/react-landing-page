import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <Header />
      <h3>Error 404 | Page Not Found</h3>
      <Link to="/">Back Home</Link>
      <Footer />
    </div>
  );
}
