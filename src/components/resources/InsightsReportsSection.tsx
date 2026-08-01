"use client";
import React from 'react';

const reports = [
  {
    title: "Q3 2026 Middle East ESG & Carbon Market Quarterly Briefing",
    date: "July 2026",
    pages: "44 pages",
    format: "PDF Report",
    summary: "Quarterly pulse on regulatory enforcement, carbon credit liquidity, sovereign green bonds, and sector performance."
  },
  {
    title: "Real Estate & Smart Cities: Decarbonization Playbook",
    date: "June 2026",
    pages: "36 pages",
    format: "Technical Guide",
    summary: "Operational guidelines for developers to hit Net-Zero Building standards, HVAC efficiency, and waste diversion."
  },
  {
    title: "Government & Municipal Waste-to-Energy Policy Matrix",
    date: "May 2026",
    pages: "52 pages",
    format: "Policy Paper",
    summary: "Benchmarking public-private partnership models and mobile waste technology deployments in municipal zones."
  }
];

export const InsightsReportsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            RESEARCH LIBRARY
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Quarterly Intelligence & Industry Reports
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {reports.map((r, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#718096', marginBottom: '1.2rem' }}>
                  <span>📅 {r.date}</span>
                  <span>📄 {r.pages}</span>
                  <span>⚡ {r.format}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1A2F25', lineHeight: '1.3', marginBottom: '1rem' }}>
                  {r.title}
                </h3>
                <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {r.summary}
                </p>
              </div>

              <button
                onClick={() => alert(`Downloading ${r.title}...`)}
                className="contact-btn w-inline-block"
                style={{ width: '100%', border: 'none', cursor: 'pointer', justifyContent: 'center' }}
              >
                <div className="dot-contact-btn"></div>
                <div>Download Report</div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
