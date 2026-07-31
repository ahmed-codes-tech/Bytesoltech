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
import { useState, useEffect, useRef } from "react";

const FILTERS = ["All Work", "Website", "Web Applications", "Mobile Apps", "Branding", "SEO / PPC", "UI / UX"];

const PROJECTS = [
  {
    id: "nexora",
    categories: ["Mobile Apps", "Web Applications", "UI / UX"],
    brand: "NEXORA", tag: "FINTECH", title: "Nexora Banking App",
    desc: "Modern banking experience for the next generation.",
    image: nexoraImg, imageAlt: "Nexora banking app", layout: "image",
  },
  {
    id: "medicare",
    categories: ["Web Applications", "Website", "UI / UX"],
    brand: "MediCare+", tag: "HEALTHCARE", title: "MediCare Plus",
    desc: "Healthcare platform connecting patients with specialists.",
    image: medicareImg, imageAlt: "MediCare Plus", layout: "split",
    copyTitle: "Your Health, Our Priority",
    copyText: <>Expert care.<br />Better results.<br />Healthier tomorrow.</>,
  },
  {
    id: "travora",
    categories: ["Website", "Branding", "SEO / PPC"],
    brand: "TRAVORA", tag: "TRAVEL", title: "Travora Adventures",
    desc: "Travel platform inspiring journeys around the world.",
    image: travoraImg, imageAlt: "Travora", layout: "split",
    copyTitle: <>Explore.<br />Dream.<br />Discover.</>,
  },
  {
    id: "luxoria-store",
    categories: ["Website", "SEO / PPC", "Branding"],
    brand: "LUXORIA", tag: "E-COMMERCE", title: "Luxoria Storefront",
    desc: "Luxury commerce experience with a 180% revenue lift.",
    image: luxoriaImg, imageAlt: "Luxoria storefront", layout: "image",
  },
  {
    id: "nexora-brand",
    categories: ["Branding", "UI / UX"],
    brand: "NEXORA", tag: "IDENTITY", title: "Nexora Brand System",
    desc: "A full identity system, from logo marks to product UI.",
    image: nexoraImg, imageAlt: "Nexora brand system", layout: "split",
    copyTitle: <>Bold.<br />Clear.<br />Timeless.</>,
  },
  {
    id: "medicare-growth",
    categories: ["SEO / PPC", "Web Applications"],
    brand: "MediCare+", tag: "GROWTH", title: "MediCare Growth Engine",
    desc: "Paid search and SEO program driving qualified patient leads.",
    image: medicareImg, imageAlt: "MediCare growth campaign", layout: "image",
  },
];

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

function StatNumber({ value, suffix = "", active }) {
  const n = useCountUp(value, active);
  return <div className="portfolio-stat-num">{n}{suffix}</div>;
}

export default function Portfolio() {
  const [active, setActive] = useState("All Work");
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setStatsVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const visible =
    active === "All Work"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(active));


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

          <div className="portfolio-stats" ref={statsRef}>
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconBox /></div>
              <StatNumber value={150} suffix="+" active={statsVisible} />
              <div className="portfolio-stat-label"><b>Projects</b>Delivered</div>
            </div>
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconGlobe /></div>
              <StatNumber value={30} suffix="+" active={statsVisible} />
              <div className="portfolio-stat-label"><b>Industries</b>Served</div>
            </div>
            <div className="portfolio-stat">
              <div className="portfolio-stat-icon"><IconUsers /></div>
              <StatNumber value={98} suffix="%" active={statsVisible} />
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
          <button className="portfolio-view-all" onClick={() => setActive("All Work")}>
            View All Projects <IconArrow />
          </button>
        </div>

        {/* FEATURED */}
        {active === "All Work" && (
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
        )}

        {/* GRID */}
        {visible.length > 0 ? (
          <div className="portfolio-grid">
            {visible.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="portfolio-empty">
            No projects in this category yet — check back soon.
          </div>
        )}

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
