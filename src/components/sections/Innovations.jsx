import React, { useState } from 'react';
import './Innovations.css';

const Innovations = () => {
  const [activeFilter, setActiveFilter] = useState("Website");
  const filters = ["Website", "Mobile App", "SMM", "PPC", "Print", "SEO", "Branding", "View All"];

  const portfolioItems = [
    { title: "Digital Uplift for DIFC", type: "tablet" },
    { title: "Engineered DP World for Global Reach", type: "laptop" },
    { title: "Sephora – Beauty brand, Powered by Tech", type: "sephora" },
    { title: "Sephora – Beauty brand, Powered by Tech", type: "sephora" },
    { title: "Sephora – Beauty brand, Powered by Tech", type: "sephora" },
    { title: "Sephora – Beauty brand, Powered by Tech", type: "sephora" },
  ];

  return (
    <section className="innovations-section">
      <button className="vertical-quote-btn visible">
        <span>Get A Quote</span>
      </button>

     

      <div className="innovations-container">
        <div className="innovations-header">
          <div className="section-badge-premium">
            <span className="badge-dot"></span>
            <span>Our Work</span>
          </div>
          <h2 className="innovations-title-premium">
            10+ Years Exp but
            <br />
            Countless Innovations
          </h2>

          <div className="category-filter">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-item ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {activeFilter === filter && <span className="filter-arrow">→</span>}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <div key={i} className="portfolio-card">
              <div className="card-media">
                <div className={`card-thumbnail ${item.type}-preview`}>
                  {item.type === 'tablet' && (
                    <div className="device-mockup tablet">
                      <div className="device-screen">
                        <div className="preview-content">
                          <div className="preview-header"></div>
                          <div className="preview-text"></div>
                          <div className="preview-text short"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {item.type === 'laptop' && (
                    <div className="device-mockup laptop">
                      <div className="laptop-screen">
                        <div className="preview-content industrial">
                          <div className="industrial-overlay">
                            <span className="company-name">DP WORLD</span>
                          </div>
                        </div>
                      </div>
                      <div className="laptop-base"></div>
                    </div>
                  )}
                  {item.type === 'sephora' && (
                    <div className="sephora-brand-overlay">
                      <div className="brand-name">SEPHORA</div>
                      <div className="campaign-name">SQUAD</div>
                    </div>
                  )}
                </div>
                <div className="card-overlay"></div>
              </div>
              <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;