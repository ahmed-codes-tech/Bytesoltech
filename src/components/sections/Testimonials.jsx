import React, { useRef, useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const trackRef = useRef(null);
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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const cardWidth = track.scrollWidth / testimonials.length;
      setActiveIndex(Math.round(track.scrollLeft / cardWidth));
    };
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const onMouseDown = (e) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollStart(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart - (x - startX);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const scrollToTestimonial = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / testimonials.length;
    track.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  // No real client testimonials exist yet. Per the Bytesoltech blueprint
  // (Part 2, Section 9), we show the "founder credibility" placeholder
  // instead of fabricating quotes, clients, or results. Once real
  // testimonials are collected, populate `data/testimonials.jsx` and this
  // section will automatically switch back to the carousel below.
  if (testimonials.length === 0) {
    return (
      <section className="testi-section" id="proof">
        <div className="testi-inner">
          <div className="testi-header visible">
            <div className="testi-label">
              <span className="testi-label-dot" />
              Client Testimonials
            </div>
            <h2 className="testi-heading">
              Don't Take <em>Our Word</em>
              <br />
              For It
            </h2>
          </div>
          <div className="testi-promise">
            <h3 className="testi-promise-title">We're Selective. Here's Our Promise Instead.</h3>
            <p className="testi-promise-body">
              We take on a limited number of clients so every project gets our full attention.
              Before you spend a dollar, you'll see exactly what we plan to build, why, and what
              success looks like. And if we don't believe we can grow your business, we'll tell
              you on the first call.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testi-section" id="proof" ref={sectionRef}>
      <div className="testi-inner">
        <div className="testi-count">{String(activeIndex + 1).padStart(2, "0")}</div>

        <div className={`testi-header ${visible ? "visible" : ""}`}>
          <div className="testi-label">
            <span className="testi-label-dot" />
            Client Testimonials
          </div>
          <h2 className="testi-heading">
            What Our <em>Happy Clients</em>
            <br />
            Say About Us
          </h2>
        </div>

        <div className="testi-track-wrapper">
          <div className="testi-fade-left" />
          <div className="testi-fade-right" />

          <div
            className="testi-track"
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {testimonials.map((t, i) => (
              <div key={t.id} className={`testi-card ${visible ? "visible" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="card-media">
                  <div className="card-bg" style={{ background: t.bg }}>
                    <div className="card-avatar-ring">
                      <span className="card-initials">{t.initials}</span>
                    </div>
                    <div className="card-quote-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.12 }}>
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="card-quote-text">"{t.quote}"</p>
                    <div className="card-stars">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <button className="card-lightning-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13L13 2z" />
                    </svg>
                  </button>
                </div>
                <div className="card-footer">
                  <span className="card-brand-name">{t.brand}</span>
                  {t.brandSubtext && <span className="card-brand-sub">{t.brandSubtext}</span>}
                  <span className="card-client-role">{t.clientName} · {t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`testi-nav ${visible ? "visible" : ""}`}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => scrollToTestimonial(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;