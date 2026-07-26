import React, { useRef, useEffect, useState } from 'react';
import './Partners.css';

const Partners = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: "CNBC", icon: "📺", style: { fontSize: '40px' }, textStyle: { fontWeight: 'bold', fontSize: '24px' } },
    { name: "Clutch", subtitle: "FIRMS THAT DELIVER", icon: null },
    { name: "f", subtitle: "Marketing Partners", icon: null, special: "facebook" },
    { name: "Forbes", icon: null, style: { fontSize: '32px', fontWeight: 'bold', fontFamily: 'serif' } },
    { name: "Entrepreneur", icon: null },
    { name: "BusinessWeek", icon: null, style: { fontSize: '18px', fontWeight: 'bold', color: '#e74c3c' } },
    { name: "Inc.", icon: null, style: { fontSize: '36px', fontWeight: 'bold' } },
    { name: "Bloomberg", icon: null },
  ];

  const awards = [
    { text: "AWARD WINNER", stars: "⭐⭐⭐" },
    { text: "MENA SEARCH AWARDS 2024", winner: true, color: "#FFD700", icon: "🏆" },
    { text: "MENA SEARCH AWARDS 2023", winner: true, color: "#FF1493", icon: "🏆" },
    { text: "MENA SEARCH AWARDS 2019", winner: true, color: "#32CD32" },
    { text: "MENA SEARCH AWARDS 2018", winner: true, color: "#FF1493" },
    { text: "MENA SEARCH AWARDS 2017", winner: true, color: "#9B59B6" },
    { text: "HubSpot Certified Partner", icon: "🎯" },
    { text: "Excellence Award 2024", icon: "🌟" },
  ];

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-container">
        <div className="section-badge-partners">
          <span className="badge-dot"></span>
          <span>Partners & Recognition</span>
        </div>

        <div className={`partners-grid ${visible ? 'visible' : ''}`}>
          {partners.map((partner, i) => (
            <div key={i} className="partner-card" style={{ animationDelay: `${i * 0.1}s, 0s` }}>
              <div className={`partner-logo ${partner.special === 'facebook' ? 'facebook-partner' : ''}`}>
                {partner.icon ? (
                  <span style={partner.style}>{partner.icon}</span>
                ) : (
                  <span style={partner.style || { fontSize: '28px', fontWeight: '600' }}>{partner.name}</span>
                )}
                {partner.subtitle && <span style={{ fontSize: '11px', opacity: '0.7' }}>{partner.subtitle}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className={`partners-grid awards-grid ${visible ? 'visible' : ''}`}>
          {awards.map((award, i) => (
            <div key={i} className="partner-card award-card" style={{ animationDelay: `${0.9 + i * 0.1}s, ${i * 0.5}s` }}>
              <div className="award-badge">
                {award.stars && <div style={{ fontSize: '10px', color: '#FFD700' }}>{award.stars}</div>}
                {award.icon && <span style={{ fontSize: '20px', color: award.color || '#FFD700' }}>{award.icon}</span>}
                <div style={{ fontSize: '9px', marginTop: '4px' }}>
                  {award.text.split(' ').map((word, j) => (
                    <div key={j} style={award.winner ? { fontWeight: 'bold', color: award.color } : {}}>
                      {word}
                    </div>
                  ))}
                  {award.winner && <div style={{ fontSize: '9px', marginTop: '2px' }}>WINNER</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;