"use client";
import React from 'react';

const stats = [
  { val: "120+", label: "Multidisciplinary ESG Engineers & Consultants" },
  { val: "14", label: "Global Regional Offices & Operations Hubs" },
  { val: "45%", label: "Female Leadership Representation Across Departments" },
  { val: "100%", label: "Certified GRI, ISSB & LEED Practitioners" }
];

export const AboutTeamSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            GLOBAL PEOPLE & CULTURE
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Driven by Passionate Climate Innovators
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem'
        }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '28px',
              padding: '2.5rem',
              textAlign: 'center',
              border: '1px solid rgba(84, 191, 68, 0.2)'
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#54BF44', marginBottom: '0.8rem' }}>
                {s.val}
              </div>
              <p style={{ color: '#C7BFAC', fontSize: '15px', lineHeight: '1.5' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
