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
          <h2>We make businesses stand out</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            tempora earum sequi! Cum, magnam earum hic natus ut nostrum libero!
          </p>
          <section className="statistics">
            <section className="info-stats">
              <div>
                <h3>1000+</h3>
                <p>Happy customers</p>
              </div>
              <div>
                <h3>10x</h3>
                <p>Value delivered</p>
              </div>
              <div>
                <h3>10%</h3>
                <p>Traffic increase</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Partners</p>
              </div>
            </section>
            <figure className="img-container">
              <img src={womanFace} alt="woman smiling" />
            </figure>
          </section>
        </article>
        <article className="services">
          <h2>Our services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            tempore adipisci at ipsam deleniti quis natus deserunt aliquid odit
            provident.
          </p>
          <section className="services__cards">
            <div className="card">
              <MdAdsClick />
              <h3>Social media marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis earum molestiae, nostrum cupiditate quibusdam enim?
              </p>
            </div>
            <div className="card">
              <FaRegGrinStars />
              <h3>Branding consulting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis earum molestiae, nostrum cupiditate quibusdam enim?
              </p>
            </div>
            <div className="card">
              <IoAnalytics />
              <h3>Market analysis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis earum molestiae, nostrum cupiditate quibusdam enim?
              </p>
            </div>
            <div className="card">
              <MdManageSearch />
              <h3>Website auditing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis earum molestiae, nostrum cupiditate quibusdam enim?
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
