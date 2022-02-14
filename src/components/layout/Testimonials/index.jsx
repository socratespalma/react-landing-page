import TestimonialCard from '@components/common/TestimonialCard';
import testimonials from '@utils/testimonials';
import React from 'react';

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
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>
    </article>
  );
}
