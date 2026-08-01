"use client";
import React from 'react';

const stats = [
  { metric: "84%", label: "Investors mandating verified Scope 1-3 audit trails before equity deployment" },
  { metric: "3.2x", label: "Capital inflow growth into ESG-compliant commercial real estate assets" },
  { metric: "-40%", label: "Average operational expenditure reduction from mobile zero-waste processing" },
  { metric: "100%", label: "Traceability required under newly implemented EU Digital Product Passports" }
];

export const InsightsTrendsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            BY THE NUMBERS
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Data Points Driving Sustainable Capital
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '28px',
              padding: '2.5rem',
              textAlign: 'center',
              border: '1px solid rgba(84, 191, 68, 0.2)'
            }}>
              <div style={{ fontSize: '3.8rem', fontWeight: '800', color: '#54BF44', marginBottom: '1rem', lineHeight: '1' }}>
                {s.metric}
              </div>
              <p style={{ color: '#C7BFAC', fontSize: '15px', lineHeight: '1.6' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
