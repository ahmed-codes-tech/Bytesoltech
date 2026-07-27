import React from 'react';
import { CircuitPattern, DotGridPattern } from '../ui/CornerPatterns';
import './WhatWeDo.css';


// This section previously claimed "Fueled Up 500+ Brands," showed fake
// press logos (Al Jazeera, Gulf News, etc.), and listed a fabricated
// multi-country "Global Presence" (USA/UAE/Saudi Arabia/Pakistan) —
// none of which is true for Bytesoltech. Replaced with the blueprint's
// own Section 6 ("Industries We Serve") copy: real niches, real
// one-liners, nothing invented. This is a condensed teaser bridging
// Hero -> Portfolio; the full clickable 3-panel "Industries router"
// from the blueprint is separate, larger work still ahead.
//
// UI/UX pass: dropped the Earth-image backdrop entirely. It was carried
// over from the old "Global Presence" framing (implying worldwide
// operations), which doesn't fit an honest "three specific niches"
// section — and three dark sections in a row (Hero -> this -> Services)
// was flattening the page's visual rhythm. This section is now a light
// surface, breaking that up, with an abstract decorative glow instead
// of the mismatched globe photo.
const NICHES = [
  {
    name: 'Health & Wellness Coaches',
    line: 'Fill your calendar with clients who are ready to change — not tire-kickers.',
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.5C11.5 6.2 13 5 15 5c3.5 0 5.5 3.5 3.5 7.5C16 16.65 12 21 12 21z" />
    ),
  },
  {
    name: 'Restoration Companies',
    line: 'When disaster strikes, be the first call — not the third search result.',
    icon: (
      <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    ),
  },
  {
    name: 'Dubai Real Estate',
    line: 'Stand out in the world\u2019s most competitive property market.',
    icon: (
      <path d="M4 21V9l8-5 8 5v12h-5v-6H9v6H4z" />
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section" id="industries">
      <div className="what-we-do-glow" aria-hidden="true" />

      <CircuitPattern variant="primary" className="wwd-corner-pattern wwd-corner-pattern--top-left" />
      <CircuitPattern variant="variant" className="wwd-corner-pattern wwd-corner-pattern--bottom-right" />
      <DotGridPattern className="wwd-dot-grid wwd-dot-grid--top-right" />
      <DotGridPattern className="wwd-dot-grid wwd-dot-grid--bottom-left" />
      <div className="wwd-center-glow" aria-hidden="true" />

      <div className="what-we-do-content">
        <div className="section-badge">
          <span className="badge-dot" />
          Who We Build For
        </div>

        <h2 className="section-title">
          Built for Your Industry.
          <br />
          Not &ldquo;Businesses in General.&rdquo;
        </h2>

        <p className="section-subline">
          Generic marketing gets generic results. We specialize in three industries — and
          we speak your language.
        </p>

        <div className="niche-grid">
          {NICHES.map((niche) => (
            <div key={niche.name} className="niche-card">
              <svg className="niche-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
                {niche.icon}
              </svg>
              <h3 className="niche-name">{niche.name}</h3>
              <p className="niche-line">{niche.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;