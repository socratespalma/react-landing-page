import notFound from '@assets/img/notFound.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="main-page darken-bcg">
      <Header />
      <main>
        <div className="nf__container">
          <img className="nf__container--img" src={notFound} alt="not found" />

          <h3 className="nf__container--text">
            Oops! We couldn&apos;t find that page
          </h3>

          <Link className="nf__container--link" to="/">
            Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
