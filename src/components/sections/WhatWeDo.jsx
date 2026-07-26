import React from 'react';
import earthImg from '../../assets/earth-bg.png';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const logoItems = ["arabianpost", "ALJAZEERA", "ZAWYA", "GULF NEWS", "Khaleej Times"];
  const locations = ["USA", "UAE", "Saudi Arabia", "Pakistan"];

  return (
    <section className="what-we-do-section">
      <div className="section-badge">
        <span className="badge-dot"></span>
        What We Do
      </div>

      <h2 className="section-title">
        Fueled Up 500+ Brands to
        <br />
        Roar with Next-GenTech
      </h2>

      <div className="planet-scene">
        <div className="planet-earth-wrapper">
          <div className="planet-earth">
            <img src={earthImg} className="earth-image" alt="Earth" />
          </div>
        </div>

        <div className="brand-logos-overlay">
          <div className="brand-logos-track">
            {[...logoItems, ...logoItems].map((logo, i) => (
              <div key={i} className="logo-item">{logo}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="global-presence">
        <span className="presence-label">Our Global Presence</span>
        <div className="presence-locations">
          {locations.map((location, i) => (
            <React.Fragment key={i}>
              <span className="location-dot"></span>
              <span className="location-text">{location}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;