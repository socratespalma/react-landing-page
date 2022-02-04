import man1 from '@assets/img/man-1.jpg';
import man2 from '@assets/img/man-2.jpg';
import woman1 from '@assets/img/woman-1.jpg';
import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export default function Testimonials() {
  return (
    <article className="testimonials">
      <h2>
        Te<span className="underline">stimonia</span>ls
      </h2>
      <p className="subtext">
        These are some happy clients who work with us and have scaled up their
        own business with our work in digital marketing and consuting.
      </p>
      <section className="testimonials__container">
        <div className="testimonials__person">
          <figure className="img-container">
            <img className="testimonial-img" src={man1} alt="client" />
          </figure>
          <div className="quote">
            <ImQuotesLeft className="quote__symbol" />
            <p>
              Since I started working with SPG Consulting I&apos;ve seen the
              results of investing in our own company with the power of digital
              marketing by adapting to the digital era.
            </p>
            <div className="quote__right">
              <ImQuotesRight className="quote__symbol" />
            </div>
            <h3>Alexander McKenzie</h3>
            <h4>Owner of Le Bistro</h4>
          </div>
        </div>
        <div className="testimonials__person">
          <figure className="img-container">
            <img className="testimonial-img" src={woman1} alt="client" />
          </figure>
          <div className="quote">
            <ImQuotesLeft className="quote__symbol" />
            <p>
              SPG Consulting has changed my life because they&apos;ve helped me
              so much with my business to allow pets find a new home and a
              family who could take care of them with love.
            </p>
            <div className="quote__right">
              <ImQuotesRight className="quote__symbol" />
            </div>
            <h3>Jane Cooksey</h3>
            <h4>CEO of FindUrPet</h4>
          </div>
        </div>
        <div className="testimonials__person">
          <figure className="img-container">
            <img className="testimonial-img" src={man2} alt="client" />
          </figure>
          <div className="quote">
            <ImQuotesLeft className="quote__symbol" />
            <p>
              SPG Consulting has made my company more profitable because now we
              are able to reach thousands of potential clients by certain
              demographics with real state offers.
            </p>
            <div className="quote__right">
              <ImQuotesRight className="quote__symbol" />
            </div>
            <h3>Ryan Smith</h3>
            <h4>CEO of Palm Real Estate</h4>
          </div>
        </div>
      </section>
    </article>
  );
}
