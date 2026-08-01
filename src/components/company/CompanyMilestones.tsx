"use client";
import React from 'react';

const milestones = [
  { year: "2020", title: "Foundation & R&D", desc: "ReGeneva established in Dubai with core focus on mobile waste thermal conversion technologies." },
  { year: "2022", title: "Commercial Deployment", desc: "First 10 mobile units deployed for municipal and industrial partners across the UAE." },
  { year: "2024", title: "Academy & Advisory Launch", desc: "Expanded into certified corporate ESG education, BRSR reporting, and net-zero strategy consulting." },
  { year: "2026", title: "Global Expansion", desc: "Surpassed 500,000 tons of diverted waste and established regional hubs in Europe & South Asia." }
];

export const CompanyMilestones = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            OUR JOURNEY
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Milestones of Sustainable Growth
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {milestones.map((m, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              borderTop: '4px solid #54BF44',
              position: 'relative'
            }}>
              <span style={{ fontSize: '2.8rem', fontWeight: '800', color: '#1A2F25', display: 'block', marginBottom: '0.5rem' }}>
                {m.year}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.8rem' }}>
                {m.title}
              </h3>
              <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6' }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
