import womanFace from '@assets/img/woman-smiling.jpeg';
import InfoStatsCard from '@components/common/InfoStatsCard';
import React from 'react';
import infoStats from '../../../utils/infoStats';

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
          {infoStats.map((stat) => (
            <InfoStatsCard key={stat.id} stat={stat} />
          ))}
        </section>
        <figure className="img-container">
          <img className="woman-img" src={womanFace} alt="woman smiling" />
        </figure>
      </section>
    </article>
  );
}
