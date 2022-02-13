import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export default function TestimonialCard({ img, quote, name, occupation }) {
  return (
    <div className="testimonials__person">
      <figure className="img-container">
        <img className="testimonial-img" src={img} alt="client" />
      </figure>
      <div className="quote">
        <ImQuotesLeft className="quote__symbol" />
        <p>{quote}</p>
        <div className="quote__right">
          <ImQuotesRight className="quote__symbol" />
        </div>
        <h3>{name}</h3>
        <h4>{occupation}</h4>
      </div>
    </div>
  );
}
