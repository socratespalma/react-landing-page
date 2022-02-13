import womanFace from '@assets/img/woman-smiling.jpeg';
import InfoStatsCard from '@components/common/InfoStatsCard';
import React from 'react';

export default function About() {
  return (
    <article id="about" className="about-us">
      <h2>
        A<span className="underline">bout u</span>s
      </h2>
      <p className="subtext">
        We work with up to date industry standards to help our clients scale up
        their businesses through digital marketing.
      </p>
      <section className="statistics">
        <section className="info-stats">
          <InfoStatsCard qty="100+" text="Happy customers" />
          <InfoStatsCard qty="10x" text="Value delivered" />
          <InfoStatsCard qty="10%" text="Traffic increase" />
          <InfoStatsCard qty="10+" text="Active employees" />
        </section>
        <figure className="img-container">
          <img className="woman-img" src={womanFace} alt="woman smiling" />
        </figure>
      </section>
    </article>
  );
}
