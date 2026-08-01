"use client";
import React from 'react';

const flagshipProjects = [
  {
    name: "Project Zero-Landfill Metropolis",
    partner: "Greater UAE Municipal Consortium",
    impact: "180,000 Tons/Yr Waste Processed",
    desc: "Deploying a network of 12 mobile thermal waste units to eliminate organic and industrial municipal landfill dumping."
  },
  {
    name: "Industrial Scope 3 Alliance",
    partner: "Regional Energy & Steel Producers",
    impact: "420,000 tCO2e Annual Reduction",
    desc: "Multi-enterprise decarbonization initiative establishing automated carbon telemetry across 60+ Tier-1 & Tier-2 suppliers."
  },
  {
    name: "LEED Platinum Commercial Hub",
    partner: "DIFC Financial Infrastructure Group",
    impact: "100% Recycled Aggregate On-Site",
    desc: "Complete circular waste recycling during skyscraper construction phase, setting a regional green building benchmark."
  }
];

export const ClientsProjects = () => {
  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            FLAGSHIP COLLABORATIONS
          </span>
          <h2 className="text-140-regular" style={{ color: '#FFFFFF', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Joint Sustainability Initiatives
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {flagshipProjects.map((p, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '28px',
              padding: '2.5rem',
              border: '1px solid rgba(84, 191, 68, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  backgroundColor: '#54BF44',
                  color: '#1A2F25',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  {p.impact}
                </span>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#FFFFFF', marginTop: '1.2rem', marginBottom: '0.5rem' }}>
                  {p.name}
                </h3>

                <div style={{ fontSize: '14px', color: '#C7BFAC', fontWeight: '600', marginBottom: '1rem' }}>
                  Partner: {p.partner}
                </div>

                <p style={{ color: '#889988', fontSize: '14px', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="/resources/case-studies" style={{
                  color: '#54BF44',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  Read Case Study Breakdown &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
