import React, { useEffect, useRef, useState } from 'react';
// import heroBgWebp from '../../assets/hero/hero-astronaut.webp';
import heroBgPng from '../../assets/hero/hero-astronaut.png';
import './Hero.css';

// Rendered word-by-word so the headline can fade up on load per the
// blueprint's hero design direction ("Headline fades up word by word").
const HEADLINE_LINE_1 = ['Your', 'Website', 'Should', 'Be', 'Your'];
const HEADLINE_EMPHASIS = 'Best Salesperson.';

// Honest, non-numeric versions of premium "stat card" UI. Your examples
// (+180% Organic Traffic, +250% Leads Generated, 5★ reviews) are
// fabricated — Bytesoltech has no client data yet, so specific invented
// percentages or review counts would be fake claims. These describe
// real build standards/capabilities instead (forward-looking promises,
// not claimed past results) — same "no fabricated proof" rule applied
// everywhere else in this project.
const FLOATING_CARDS = [
  {
    id: 'speed',
    label: 'Sub-2s Load Times',
    sub: 'Engineered for speed, not just design',
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    id: 'automation',
    label: '24/7 AI Lead Response',
    sub: 'No inquiry waits until morning',
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  },
  {
    id: 'seo',
    label: 'SEO-First Architecture',
    sub: 'Built to rank from day one',
    icon: <path d="M3 17l6-6 4 4 7-8M20 7h-4v4" />,
  },
];

// Neutral platform mentions, not certification claims — Bytesoltech isn't
// a verified "Google Partner" etc. today, so we don't say it is.
const TRUST_PILLS = [
  { label: 'ROI-Focused Websites', icon: <path d="M12 20V10M18 20V4M6 20v-6" /> },
  { label: 'AI-Powered Automation', icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /> },
  { label: 'Rank Higher on Google', icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10m0-20C9.5 4.7 8 8.1 8 12s1.5 7.3 4 10M2 12h20" /> },
  { label: 'Built for Scale', icon: <path d="M4 21V9l8-5 8 5v12h-5v-6H9v6H4z" /> },
];

const Hero = ({ onPrimaryCtaClick, onSecondaryCtaClick }) => {
  const heroRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    // Very subtle gentle parallax on the background image — capped small,
    // and the image is sized ~112% via CSS so a shift never reveals an
    // edge gap.
    const MAX_OFFSET = 8;
    let frame = null;

    const handleMouseMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const section = heroRef.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          setParallax({ x: relX * MAX_OFFSET * -1, y: relY * MAX_OFFSET * -1 });
        }
        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg" aria-hidden="true" style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}>
        <picture>
          <source srcSet={heroBgPng} type="image/png" />
          <img
            src={heroBgPng}
            alt=""
            width="1693"
            height="929"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      {FLOATING_CARDS.map((card, i) => (
        <div key={card.id} className={`hero-float-card hero-float-card--${i + 1}`} aria-hidden="true">
          <span className="hero-float-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {card.icon}
            </svg>
          </span>
          <div>
            <strong>{card.label}</strong>
            <span>{card.sub}</span>
          </div>
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-eyebrow">Build. Rank. Automate. Grow.</span>

          <h1 className="hero-headline">
            {HEADLINE_LINE_1.map((word, i) => (
              <span key={`${word}-${i}`} className="hero-word" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
                {word}&nbsp;
              </span>
            ))}
            <span className="hero-word hero-word--emphasis" style={{ animationDelay: `${0.15 + HEADLINE_LINE_1.length * 0.08}s` }}>
              {HEADLINE_EMPHASIS}
            </span>
          </h1>

          <p className="hero-subhead">
            We build high-converting websites, get you found on Google, and automate the
            busywork with AI — so your business grows while you work on what you love.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onPrimaryCtaClick}>
              Book My Free Strategy Call
              <span className="primary-btn-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </button>
            <button className="secondary-btn" onClick={onSecondaryCtaClick}>
              Get My Free Website Audit
            </button>
          </div>

          <p className="hero-microtrust">
            No pressure. No jargon. Just a clear plan you can keep — even if we never work
            together.
          </p>

          <div className="hero-trust-strip">
            {TRUST_PILLS.map((pill) => (
              <span key={pill.label} className="hero-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {pill.icon}
                </svg>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;