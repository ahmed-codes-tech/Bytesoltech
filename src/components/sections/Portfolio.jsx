import "./Portfolio.css";
import {
  LeftPattern, RightPattern, BottomRightPattern,
  IconBox, IconGlobe, IconUsers, IconTrend, IconClock, IconGauge,
  IconArrow, IconPlay, IconExternal, IconDot,
} from "./../ui/CornerPatterns";
import luxoriaImg from "./../../assets/portfolio-luxoria.jpg";
import nexoraImg from "./../../assets/portfolio-nexora.jpg";
import medicareImg from "./../../assets/portfolio-medicare.jpg";
import travoraImg from "./../../assets/portfolio-travora.jpg";
import { useState } from "react";

const FILTERS = ["All Work", "Website", "Web Applications", "Mobile Apps", "Branding", "SEO / PPC", "UI / UX"];

export default function Portfolio() {
  const [active, setActive] = useState("All Work");

  return (
    <section className="portfolio">
      <LeftPattern />
      <RightPattern />


      <div className="portfolio-container">
        {/* HEADER */}
        <div className="portfolio-header">
          <div>
            <div className="portfolio-eyebrow"><IconDot /> OUR WORK</div>
            <h1 className="portfolio-title">
              Digital Experiences<br />
              That Drive <span className="portfolio-title-accent">Real Results</span>
            </h1>
            <p className="portfolio-sub">
              We design, build and scale digital products that help businesses grow faster and smarter.
            </p>
          </div>

          <div className="portfolio-stats">
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconBox /></div>
              <div className="portfolio-stat-num">150+</div>
              <div className="portfolio-stat-label"><b>Projects</b>Delivered</div>
            </div>
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconGlobe /></div>
              <div className="portfolio-stat-num">30+</div>
              <div className="portfolio-stat-label"><b>Industries</b>Served</div>
            </div>
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconUsers /></div>
              <div className="portfolio-stat-num">98%</div>
              <div className="portfolio-stat-label"><b>Client</b>Satisfaction</div>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="portfolio-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`portfolio-chip ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
          <button className="portfolio-view-all">View All Projects <IconArrow /></button>
        </div>

        {/* FEATURED */}
        <div className="portfolio-featured">
          <div className="portfolio-featured-tag">
            <span>FEATURED CASE STUDY</span>
            <div className="star">★</div>
          </div>
          <div className="portfolio-featured-image">
            <img src={luxoriaImg} alt="Luxoria Watches case study" loading="lazy" />
          </div>
          <div className="portfolio-featured-body">
            <div>
              <h3>Luxoria Watches</h3>
              <p>A premium e-commerce experience crafted for a luxury brand with a global audience.</p>
            </div>
            <div className="portfolio-metrics">
              <div>
                <div className="portfolio-metric-top"><IconTrend /> +180%</div>
                <div className="portfolio-metric-label">Revenue Growth</div>
              </div>
              <div>
                <div className="portfolio-metric-top"><IconClock /> 5 Weeks</div>
                <div className="portfolio-metric-label">Project Duration</div>
              </div>
              <div>
                <div className="portfolio-metric-top"><IconGauge /> 98/100</div>
                <div className="portfolio-metric-label">Performance Score</div>
              </div>
            </div>
            <div className="portfolio-featured-actions">
              <button className="btn-primary">View Case Study <IconArrow /></button>
              <button className="btn-secondary"><IconPlay /> View Project Demo</button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="portfolio-grid">
          <ProjectCard
            brand="NEXORA" tag="FINTECH" title="Nexora Banking App"
            desc="Modern banking experience for the next generation."
            image={nexoraImg} imageAlt="Nexora banking app"
            layout="image"
          />
          <ProjectCard
            brand="MediCare+" tag="HEALTHCARE" title="MediCare Plus"
            desc="Healthcare platform connecting patients with specialists."
            image={medicareImg} imageAlt="MediCare Plus"
            layout="split"
            copyTitle="Your Health, Our Priority"
            copyText={<>Expert care.<br />Better results.<br />Healthier tomorrow.</>}
          />
          <ProjectCard
            brand="TRAVORA" tag="TRAVEL" title="Travora Adventures"
            desc="Travel platform inspiring journeys around the world."
            image={travoraImg} imageAlt="Travora"
            layout="split"
            copyTitle={<>Explore.<br />Dream.<br />Discover.</>}
          />
        </div>

        <BottomRightPattern />
      </div>
    </section>
  );
}

function ProjectCard({ brand, tag, title, desc, image, imageAlt, layout, copyTitle, copyText }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card-media">
        <div className="portfolio-card-brand">
          <div className="portfolio-card-brand-name"><IconDot /> {brand}</div>
          <IconExternal />
        </div>
        {layout === "split" ? (
          <div className="portfolio-card-media-inner">
            <div className="card-copy">
              <h4>{copyTitle}</h4>
              {copyText && <p>{copyText}</p>}
            </div>
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        ) : (
          <div style={{ paddingTop: 8 }}>
            <img src={image} alt={imageAlt} loading="lazy" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
          </div>
        )}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-tag">{tag}</div>
        <h3 className="portfolio-card-title">{title}</h3>
        <p className="portfolio-card-desc">{desc}</p>
        <div className="portfolio-card-footer">
          <a href="/" className="portfolio-card-link">View Project <IconArrow /></a>
          <button className="portfolio-card-arrow"><IconArrow /></button>
        </div>
      </div>
    </article>
  );
}
