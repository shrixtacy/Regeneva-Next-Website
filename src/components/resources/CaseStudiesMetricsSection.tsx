"use client";
import React from 'react';

const metrics = [
  { val: "540,000+", unit: "Tons", label: "Industrial Waste Processed & Diverted from Landfills" },
  { val: "380,000", unit: "tCO2e", label: "Verified Greenhouse Gas Emissions Abated" },
  { val: "$42.5M", unit: "USD", label: "Energy & Materials Cost Savings Generated for Clients" },
  { val: "100%", unit: "Audited", label: "Regulatory Compliance Across GCC & Global Mandates" }
];

export const CaseStudiesMetricsSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            MEASURABLE IMPACT
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Quantifiable Results Across Every Engagement
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {metrics.map((m, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '28px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(84, 191, 68, 0.3)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#54BF44', marginBottom: '0.3rem' }}>
                {m.val}
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                {m.unit}
              </div>
              <p style={{ color: '#C7BFAC', fontSize: '14px', lineHeight: '1.5' }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
