import success from '@assets/img/success.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div className="main-page darken-bcg">
      <Header />
      <main>
        <div className="nf__container">
          <img className="nf__container--img" src={success} alt="success" />

          <h3 className="nf__container--text">
            Thank you for submitting your message
          </h3>
          <p className="nf__container--p">
            We will get in touch with you as soon as possible
          </p>
          <Link className="nf__container--link" to="/">
            Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
