import React from "react";
import { Heart, Droplet, Home } from "lucide-react";
import CornerPatterns from "../ui/CornerPatterns";
import "./WhatWeDo.css";
const NICHES = [
  {
    name: "Health & Wellness Coaches",
    line: "Fill your calendar with clients who are ready to change — not tire-kickers.",
    Icon: Heart,
  },
  {
    name: "Restoration Companies",
    line: "When disaster strikes, be the first call — not the third search result.",
    Icon: Droplet,
    featured: true,
  },
  {
    name: "Dubai Real Estate",
    line: "Stand out in the world\u2019s most competitive property market.",
    Icon: Home,
  },
];
export default function WhatWeDo() {
  return (
    <section id="industries" className="wwd-section">
      <CornerPatterns />
      <div className="wwd-inner">
        <div className="wwd-eyebrow">
          <span className="wwd-eyebrow-dot" />
          Who We Build For
        </div>
        <h2 className="wwd-title">
          Built for Your Industry.
          <br />
          Not &ldquo;Businesses in General.&rdquo;
        </h2>
        <p className="wwd-subtitle">
          Generic marketing gets generic results. We specialize in three
          industries — and we speak your language.
        </p>
      </div>
      <div className="wwd-grid">
        {NICHES.map(({ name, line, Icon, featured }) => (
          <div
            key={name}
            className={`wwd-card${featured ? " wwd-card--featured" : ""}`}
          >
            <Icon className="wwd-card-icon" strokeWidth={1.75} />
            <h3 className="wwd-card-title">{name}</h3>
            <p className="wwd-card-line">{line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}