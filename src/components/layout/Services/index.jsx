import React from 'react';
import { FaRegGrinStars } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { MdAdsClick, MdManageSearch } from 'react-icons/md';

export default function Services() {
  return (
    <article id="services" className="services">
      <h2>
        Ou<span className="underline">r servic</span>es
      </h2>
      <p className="subtext">
        As a startup we provide different services to guarantee the variety of
        needs from different business to make sure we could help them cover all
        their needs.
      </p>
      <section className="services__cards">
        <div className="card">
          <MdAdsClick className="icon" />
          <h3>
            <span className="first-letter">S</span>ocial media marketing
          </h3>
          <p>
            We give precious feedback to our clients about investing in
            targetted ads to their customers in social media platforms like:
            Facebook, Twitter and Instagram.
          </p>
        </div>
        <div className="card">
          <FaRegGrinStars className="icon" />
          <h3>
            <span className="first-letter">B</span>randing consulting
          </h3>
          <p>
            We provide our clients with the tools to optimize their brand so
            they could reach broader audiences of potential customers.
          </p>
        </div>
        <div className="card">
          <IoAnalytics className="icon" />
          <h3>
            <span className="first-letter">M</span>arket analysis
          </h3>
          <p>
            We use a methodology called benchmarking so our clients could reach
            their biggest potential by looking at what their competitors are
            doing.
          </p>
        </div>
        <div className="card">
          <MdManageSearch className="icon" />
          <h3>
            <span className="first-letter">W</span>ebsite auditing
          </h3>
          <p>
            Websites need to be audited so it keeps improving towards the best
            user experience of customers in terms of loading speed, usability,
            intuitiveness.
          </p>
        </div>
      </section>
    </article>
  );
}
