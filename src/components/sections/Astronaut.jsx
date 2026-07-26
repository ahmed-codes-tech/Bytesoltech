import React from 'react';
import astronautImg from '../../assets/bg-astrounout.png';
import './Astronaut.css';

const Astronaut = ({ onScheduleClick }) => {
  return (
    <section className="astronout-section">
      <div className="astronout-grid" />
      <div className="astronout-fog-left" />
      <div className="astronout-fog-right" />

      <div className="astronout-img-wrap">
        <div className="astronout-planet-glow" />
        <div className="astronout-planet-ring" />
        <img src={astronautImg} alt="Astronaut on glowing planet" className="astronout-img" />
      </div>

      <div className="astronout-left">
        <h2 className="astronout-heading">
          <span className="astronout-line1">Digital Gravity's</span>
          <span className="astronout-line2">Tech Nerds</span>
          <span className="astronout-line3">are here</span>
        </h2>
      </div>

      <div className="astronout-right">
        <p className="astronout-body">
          Client satisfaction is one of our top priorities. At Digital Gravity, our consistency, dedication towards work, 
          and continuous drive for innovation have won us several accolades.
        </p>
        <p className="astronout-body">
          Hire web designers and web developers at Digital Gravity to build highly responsive, scalable, 
          and feature-rich websites and applications with a touch of finesse.
        </p>
        <button className="astronout-cta" onClick={onScheduleClick}>
          Start A Project
        </button>
      </div>
    </section>
  );
};

export default Astronaut;