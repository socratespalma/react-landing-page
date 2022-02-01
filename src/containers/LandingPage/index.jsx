import About from '@components/layout/About';
import Contact from '@components/layout/Contact';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Hero from '@components/layout/Hero';
import Services from '@components/layout/Services';
import Testimonials from '@components/layout/Testimonials';
import React from 'react';

export default function LandingPage() {
  return (
    <div className="main-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
