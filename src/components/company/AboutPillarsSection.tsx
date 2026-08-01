"use client";
import React from 'react';

const pillars = [
  { title: "Environmental Stewardship", icon: "🌱", desc: "Protecting biodiversity, achieving zero-landfill waste diversion, and decarbonizing supply chains." },
  { title: "Social Impact & Community", icon: "🤝", desc: "Fostering inclusive workplace cultures, fair labor standards, and community resilience programs." },
  { title: "Governance & Ethics", icon: "⚖️", desc: "Enforcing board oversight, zero tolerance for greenwashing, and empirical auditability." },
  { title: "Innovation & Technology", icon: "🚀", desc: "Pioneering patent-pending thermal processing hardware and AI-driven telemetry platforms." }
];

export const AboutPillarsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            OPERATIONAL FOUNDATION
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            The Four Pillars of ReGeneva
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{p.icon}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.8rem', lineHeight: '1.3' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
