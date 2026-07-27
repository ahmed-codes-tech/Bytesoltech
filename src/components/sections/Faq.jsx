import React, { useState, useRef, useEffect } from 'react';
import { faqs } from '../../data/faqs';
import { SOCIAL_ICONS} from '../../data/socialIcons';
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
    <button
      key={i}
      className="faq-social-icon"
      aria-label={platform}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={SOCIAL_ICONS[platform]} />
      </svg>
    </button>
  ))}
</div>
    </section>
  );
};

export default Faq;