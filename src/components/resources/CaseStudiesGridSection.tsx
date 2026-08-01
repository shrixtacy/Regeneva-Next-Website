"use client";
import React from 'react';

const cases = [
  {
    client: "Global Industrial Conglomerate",
    industry: "Manufacturing & Industrial",
    challenge: "High waste disposal fees and unverified Scope 1 emissions across 14 regional manufacturing plants.",
    solution: "Deployed ReGeneva mobile waste thermal processing units and automated GHG telemetry.",
    results: [
      "94% landfill waste diversion achieved in 6 months",
      "$3.8M annual waste management savings",
      "Real-time Scope 1 carbon verification for BRSR compliance"
    ],
    bg: "#FFFFFF"
  },
  {
    client: "Tier-1 Middle East Real Estate Developer",
    industry: "Real Estate & Commercial Assets",
    challenge: "Securing green bond financing required LEED Platinum certification and zero-waste construction protocols.",
    solution: "End-to-end ESG advisory, circular material recycling, and Double Materiality disclosures.",
    results: [
      "$150M Sustainability-Linked Bond successfully issued",
      "LEED Platinum rating across 4 major tower developments",
      "45,000 tons of recycled aggregate reused on-site"
    ],
    bg: "#F8F6F0"
  },
  {
    client: "Municipal Environment Agency",
    industry: "Government & Municipalities",
    challenge: "Rapid urban growth leading to overloaded municipal landfills and methane emission spikes.",
    solution: "Implemented zero-landfill mobile waste treatment fleet with zero thermal emissions.",
    results: [
      "Zero toxic emissions certified by international auditors",
      "120,000 tons municipal solid waste treated annually",
      "Pioneered first regional mobile waste-to-energy pilot"
    ],
    bg: "#E8F5E9"
  }
];

export const CaseStudiesGridSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            FEATURED CLIENT TRANSFORMATIONS
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Case Studies by Sector
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {cases.map((c, idx) => (
            <div key={idx} style={{
              backgroundColor: c.bg,
              borderRadius: '30px',
              padding: '3rem 2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  backgroundColor: '#1A2F25',
                  color: '#54BF44'
                }}>
                  {c.industry}
                </span>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#1A2F25', marginTop: '1.2rem', marginBottom: '1rem' }}>
                  {c.client}
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A2F25', marginBottom: '0.3rem' }}>The Challenge:</div>
                  <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.5' }}>{c.challenge}</p>
                </div>

                <div style={{ marginBottom: '1.8rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A2F25', marginBottom: '0.3rem' }}>ReGeneva Solution:</div>
                  <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.5' }}>{c.solution}</p>
                </div>

                <div style={{ backgroundColor: 'rgba(26, 47, 37, 0.04)', borderRadius: '20px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A2F25', marginBottom: '0.8rem' }}>Key Verified Results:</div>
                  {c.results.map((r, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '13px', color: '#1A2F25', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#54BF44', fontWeight: '800' }}>✓</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#case-detail" className="contact-btn w-inline-block" style={{ display: 'inline-flex' }}>
                <div className="dot-contact-btn"></div>
                <div>Read Full Case Study</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
