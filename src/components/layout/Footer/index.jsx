import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="footer">
      <section className="footer__container">
        <div className="footer__main">
          <h3>SPG Consulting</h3>
          <p>
            SPG is a company that provides digital marketing and consulting
            services for businesses in any industry.
          </p>
          <div className="social">
            <FaFacebookF className="social__icon" />
            <FaInstagram className="social__icon" />
            <FaTwitter className="social__icon" />
            <FaLinkedinIn className="social__icon" />
          </div>
        </div>
        <div className="footer__links">
          <h3>Links</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__links">
          <h3>Resources</h3>
          <nav>
            <ul>
              <li>
                <a href="#about">Pricing</a>
              </li>
              <li>
                <a href="#services">FAQ</a>
              </li>
              <li>
                <a href="#contact">Career</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__links">
          <h3>Legal</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <a href="#about">Terms of Use</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <p className="footer__copyright">
        Copyright &copy;2022 | SPG Consulting | All Rights Reserved{' '}
      </p>
    </section>
  );
}
