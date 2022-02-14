import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonials__person">
      <figure className="img-container">
        <img className="testimonial-img" src={testimonial.img} alt="client" />
      </figure>
      <div className="quote">
        <ImQuotesLeft className="quote__symbol" />
        <p>{testimonial.quote}</p>
        <div className="quote__right">
          <ImQuotesRight className="quote__symbol" />
        </div>
        <h3>{testimonial.name}</h3>
        <h4>{testimonial.occupation}</h4>
      </div>
    </div>
  );
}
