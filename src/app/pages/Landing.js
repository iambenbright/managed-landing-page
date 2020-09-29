import React from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Comments from '../components/Comments';

const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Comments />
    </>
  );
};

export default Landing;
