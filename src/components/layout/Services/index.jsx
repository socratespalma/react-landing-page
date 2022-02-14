import ServiceCard from '@components/common/ServiceCard';
import services from '@utils/services';
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
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </article>
  );
}
