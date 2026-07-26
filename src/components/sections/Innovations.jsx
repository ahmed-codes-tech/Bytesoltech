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

      <div className="social-icons-stack visible">
        {['behance', 'instagram', 'facebook', 'linkedin', 'youtube'].map((platform, i) => (
          <a key={i} href="#" className="social-icon" aria-label={platform}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11.987h3.813c2.171 0 2.171-3.389 0-3.389H3v3.389zm0 5.014h4.937c2.509 0 2.509-3.895 0-3.895H3v3.895z"/>
            </svg>
          </a>
        ))}
      </div>

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