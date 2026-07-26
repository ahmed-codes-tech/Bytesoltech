import React, { useState, useRef, useEffect } from 'react';
import { faqs } from '../../data/faqs';
import './Faq.css';

const Faq = ({ onScheduleClick }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="faq-container">
        <div className="faq-left-column">
          <div className="faq-badge">
            <span className="faq-badge-dot"></span>
            <span>FAQs</span>
          </div>
          <h2 className={`faq-title ${visible ? "visible" : ""}`}>
            Transformation with<br />
            Smart UX &<br />
            Scalable Tech
          </h2>
          <p className={`faq-description ${visible ? "visible" : ""}`}>
            You have the vision — we build the system around it. At Bytesoltech, we combine web development, local SEO, and AI automation to turn your online presence into your best salesperson.
          </p>
        </div>

        <div className="faq-right-column">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${openIndex === index ? "active" : ""} ${visible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-fixed-button">
        <button className="get-a-quote-btn" onClick={onScheduleClick}>
          Get A Quote
        </button>
      </div>

      <div className="faq-social-icons">
        {['linkedin', 'instagram', 'facebook', 'youtube', 'whatsapp', 'email', 'phone'].map((platform, i) => (
          <button key={i} className="faq-social-icon" aria-label={platform}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Faq;