import React from 'react';
import Home from './pages/Home';
import './styles/global.css';
// import Hero from './components/sections/Hero';
import WhatWeDo from './components/sections/WhatWeDo';
import Portfolio from './components/sections/Portfolio';
import Partners from './components/sections/Partners';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Faq from './components/sections/Faq';
import Astronaut from './components/sections/Astronaut';
import Footer from './components/sections/Footer';
import ChatWidget from './components/common/ChatWidget';
// import ScheduleModal from './components/ui/ScheduleModal';

function App() {
  return (
    <div className="App">
      <Home />
      <WhatWeDo />
      <Portfolio />
      <Partners />
      <Services />
      <Testimonials />
      <Faq />
      <Astronaut />
      <Footer />
      <ChatWidget />
      {/* <ScheduleModal /> */}
    </div>
  );
}

export default App;