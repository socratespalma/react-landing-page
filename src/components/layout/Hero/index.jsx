import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__elements">
        <h2>
          <span className="copy-1">Grow</span> your business with industry
          leading <span className="copy-2">best practices</span>
        </h2>
        <h3>We help you with consulting and digital marketing services</h3>
        <a href="#about-us" className="hero__cta">
          Learn more
        </a>
        <a href="#about-us" className="hero__chevron">
          {' '}
          <BsChevronDown />
        </a>
      </div>
    </section>
  );
}
