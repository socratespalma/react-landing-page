import ServiceCard from '@components/common/ServiceCard';
import React from 'react';

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
        <ServiceCard
          title="Social media marketing"
          info="We give precious feedback to our clients about investing in
          targetted ads to their customers in social media platforms like:
          Facebook, Twitter and Instagram."
        />
        <ServiceCard
          title="Branding consulting"
          info="We provide our clients with the tools to optimize their brand so
          they could reach broader audiences of potential customers."
        />
        <ServiceCard
          title="Market analysis"
          info="We use a methodology called benchmarking so our clients could reach their biggest potential by looking at what their competitors are
          doing."
        />
        <ServiceCard
          title="Website auditing"
          info="Websites need to be audited so it keeps improving towards the best user experience of customers in terms of loading speed, usability,
          intuitiveness."
        />
      </section>
    </article>
  );
}
