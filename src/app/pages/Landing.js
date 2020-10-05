import React, { Fragment } from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Landing;
