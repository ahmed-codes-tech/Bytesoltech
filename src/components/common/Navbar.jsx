import React, { useState, useEffect } from 'react';
import logo from '../../assets/brand/bytesoltech-logo-white.png';
import './Navbar.css';

// Real in-page anchors. Update these once dedicated routes exist
// (Industries, About, Portfolio, etc. — see Phase 1 of the audit roadmap);
// until then we only link to sections that actually exist on the page.
const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Proof', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onScheduleClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Let keyboard users close the mobile menu with Escape, not just the
  // hamburger button.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Primary">
      <a href="#home" className="logo" aria-label="Bytesoltech — back to top">
        <img src={logo} alt="Bytesoltech" className="logo-image" />
      </a>

      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href} className="nav-items">
            <a href={item.href} onClick={closeMenu}>{item.label}</a>
          </li>
        ))}
      </ul>

      <button className="cta-btn" onClick={onScheduleClick}>
        Book a Free Call
      </button>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;