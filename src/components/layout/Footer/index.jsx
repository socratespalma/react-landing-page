import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';

export default function Footer() {
  return (
    <section>
      <section>
        <div>
          <h3>SPG</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            consequuntur dolore nam iusto necessitatibus sed?
          </p>
          <div className="social">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div>
          <h3>Links</h3>
        </div>
        <div>
          <h3>Resources</h3>
        </div>
        <div>
          <h3>Legal</h3>
        </div>
      </section>
      <p>Copyright &copy;2022 | SPG </p>
    </section>
  );
}
