import womanFace from '@assets/img/woman-smiling.jpeg';
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
          <div className="info-stats__card">
            <h3>100+</h3>
            <p>Happy customers</p>
          </div>
          <div className="info-stats__card">
            <h3>10x</h3>
            <p>Value delivered</p>
          </div>
          <div className="info-stats__card">
            <h3>10%</h3>
            <p>Traffic increase</p>
          </div>
          <div className="info-stats__card">
            <h3>10+</h3>
            <p>Active employees</p>
          </div>
        </section>
        <figure className="img-container">
          <img className="woman-img" src={womanFace} alt="woman smiling" />
        </figure>
      </section>
    </article>
  );
}
