import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = ['facebook', 'instagram', 'youtube', 'linkedin', 'behance'];
  
  // TODO(Phase 1): move these into a central site-config file so contact
  // info is edited in one place instead of hardcoded here.
  const columns = [
    {
      title: "Contact Us",
      content: [
        "[TODO: business location]",
        "[TODO: contact email]",
        "[TODO: WhatsApp / phone number]"
      ]
    },
    {
      title: "Overview",
      links: ["About Us", "Services", "Our Work", "Pricing", "Contact us"]
    },
    {
      title: "Services",
      links: ["Web Development", "Local SEO & Google Business Profile", "Personal Branding", "Social Media Marketing", "AI Automation & AI Agents"]
    },
    {
      title: "Industries We Serve",
      links: ["Health & Wellness Coaches", "Restoration Companies", "Dubai Real Estate"]
    }
  ];

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-small">byte</span>
            <span className="footer-logo-big">soltech</span>
          </div>
          <div className="footer-social-icons">
            {/* TODO(pre-launch): swap these buttons for real <a href> links
                once the Bytesoltech social profiles are live. */}
            {socialLinks.map((platform, i) => (
              <button key={i} type="button" aria-label={platform} className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </button>
            ))}
          </div>
          <div className="footer-divider" />
        </div>

        <div className="footer-columns">
          {columns.map((col, idx) => (
            <div key={idx} className="footer-column">
              <h3 className="footer-column-title">{col.title}</h3>
              {col.content ? (
                <div className="footer-column-content">
                  {col.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              ) : (
                <ul className="footer-column-list">
                  {col.links.map((link, i) => (
                    <li key={i}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-watermark" aria-hidden="true">
          @BYTESOLTECH
        </div>
      </div>
    </footer>
  );
};

export default Footer;