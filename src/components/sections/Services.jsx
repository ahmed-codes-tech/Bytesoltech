import React, { useState } from 'react';
import { serviceCategories } from '../../data/services';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("development");
  const activeServices = serviceCategories.find(cat => cat.id === activeCategory)?.services || [];

  return (
    <section className="services-section-container" id="services">
      <div className="services-bg-grid"></div>
      <div className="services-bg-glow"></div>

      <div className="services-content">
        <div className="services-left-column">
          <div className="services-label">
            <span className="services-dot"></span>
            <span className="services-label-text">Our Services</span>
          </div>

          <div className="services-category-list">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`category-item ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {activeCategory === category.id && (
                  <span className="category-icon">{category.icon}</span>
                )}
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="services-right-column">
          <div className="services-detail-panel">
            <div className="services-detail-content">
              {activeServices.map((service, index) => (
                <div key={index} className="service-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;