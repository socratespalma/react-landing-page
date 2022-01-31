/* eslint-disable global-require */
import womanFace from '@assets/img/woman-smiling.jpeg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Hero from '@components/layout/Hero';
import React from 'react';
import { FaRegGrinStars } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { MdAdsClick, MdManageSearch } from 'react-icons/md';

export default function LandingPage() {
  return (
    <div className="main-page">
      <Header />
      <main>
        <Hero />
        <article id="about-us" className="about-us">
          <h2>
            We make <span className="underline">businesses</span> stand out
          </h2>
          <p className="subtext">
            We work with up to date industry standards to help our clients scale
            up their businesses through digital marketing.
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
        <article id="services" className="services">
          <h2>
            Ou<span className="underline">r servic</span>es
          </h2>
          <p className="subtext">
            As a startup we provide different services to guarantee the variety
            of needs from different business to make sure we could help them
            cover all their needs.
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
                We use a methodology called benchmarking so our clients could
                reach their biggest potential by looking at what their
                competitors are doing.
              </p>
            </div>
            <div className="card">
              <MdManageSearch className="icon" />
              <h3>
                <span className="first-letter">W</span>ebsite auditing
              </h3>
              <p>
                Websites need to be audited so it keeps improving towards the
                best user experience of customers in terms of loading speed,
                usability, intuitiveness.
              </p>
            </div>
          </section>
        </article>
        <article className="testimonials">
          <h2>What our clients are saying</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            quod. Sunt ad quaerat nobis repudiandae. Doloribus ex a quis saepe!
          </p>
        </article>
        <article className="contact">
          <h2>Get your free audit and updated news</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            debitis maxime quasi distinctio fuga quod molestias placeat enim
            rerum atque.
          </p>
          <form>
            <label htmlFor="nameInput">
              Name
              <input type="text" id="nameInput" placeholder="Enter your name" />
            </label>

            <label htmlFor="emailInput">
              Email
              <input
                type="text"
                id="emailInput"
                placeholder="Enter your email"
              />
            </label>
            <label htmlFor="messageInput">
              Message
              <textarea
                name=""
                id="messageInput"
                placeholder="Enter your message"
              />
            </label>

            <input type="submit" />
          </form>
        </article>
      </main>
      <Footer />
    </div>
  );
}
