import man1 from '@assets/img/man-1.jpg';
import man2 from '@assets/img/man-2.jpg';
import woman1 from '@assets/img/woman-1.jpg';
import TestimonialCard from '@components/common/TestimonialCard';
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
        <TestimonialCard
          img={man1}
          quote="Since I started working with SPG Consulting I've seen the
              results of investing in our own company with the power of digital
              marketing by adapting to the digital era."
          name="Alexander McKenzie"
          occupation="Owner of Le Bistro"
        />
        <TestimonialCard
          img={woman1}
          quote="SPG Consulting has changed my life because they've helped me so much with my business to allow pets find a new home and a
          family who could take care of them with love."
          name="Jane Cooksey"
          occupation="CEO of FindUrPet"
        />
        <TestimonialCard
          img={man2}
          quote="SPG Consulting has made my company more profitable because now we are able to reach thousands of potential clients by certain
          demographics with real state offers."
          name="Ryan Smith"
          occupation="CEO of Palm Real Estate"
        />
      </section>
    </article>
  );
}
