import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';

// TODO(Phase 2): replace this scroll-to-contact fallback with a real
// booking modal / lead-capture form. Until that exists, every CTA
// (Navbar + both Hero buttons) scrolls to the #contact anchor in the
// footer so nothing on the page is a dead click.
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
  return (
    <>
      <Navbar onScheduleClick={scrollToContact} />
      <Hero onPrimaryCtaClick={scrollToContact} onSecondaryCtaClick={scrollToContact} />
    </>
  );
};

export default Home;