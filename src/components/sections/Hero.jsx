import React from 'react';
import Stars from '../ui/Stars';
import './Hero.css';

// Rendered word-by-word so the headline can fade up on load per the
// blueprint's hero design direction ("Headline fades up word by word").
const HEADLINE_WORDS = ['Your', 'Website', 'Should', 'Be', 'Your', 'Best', 'Salesperson.'];

// Neutral platform mentions, not certification claims — Bytesoltech isn't
// a verified "Google Partner" etc. today, so we don't say it is. This is
// the blueprint's suggested fallback trust element ("industry badges
// instead" of client logos) without overstating anything.
const PLATFORMS = ['WordPress', 'Shopify', 'Google Business Profile', 'Meta Ads'];

const Hero = ({ onPrimaryCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="hero" id="home">
      <Stars />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-headline">
            {HEADLINE_WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="hero-word"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <p className="hero-subhead">
            We build high-converting websites, get you found on Google, and automate the
            busywork with AI — so your business grows while you work on what you love.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onPrimaryCtaClick}>
              Book My Free Strategy Call
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
            <span className="hero-trust-label">Trusted by businesses in wellness, restoration &amp; real estate</span>
            <div className="hero-platform-list" aria-label="Platforms we build on">
              {PLATFORMS.map((platform) => (
                <span key={platform} className="hero-platform">{platform}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mockup-window">
            <div className="mockup-topbar">
              <span className="mockup-dot" />
              <span className="mockup-dot" />
              <span className="mockup-dot" />
            </div>
            <div className="mockup-body">
              <div className="mockup-line mockup-line--title" />
              <div className="mockup-line mockup-line--wide" />
              <div className="mockup-line mockup-line--medium" />
              <div className="mockup-cards">
                <div className="mockup-card" />
                <div className="mockup-card" />
                <div className="mockup-card" />
              </div>
            </div>
            <div className="mockup-toast">
              <span className="mockup-toast-dot" />
              New lead just booked a call
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;