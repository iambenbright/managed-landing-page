import React from "react";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import Container from "@material-ui/core/Container";

const Landing = () => {
  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <NavBar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Landing;
