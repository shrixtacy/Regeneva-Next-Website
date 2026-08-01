"use client";
import React from 'react';

const tools = [
  {
    icon: "📊",
    title: "Double Materiality Matrix Generator",
    desc: "Map financial impact alongside environmental & social impact to prioritize your enterprise ESG topics effectively.",
    type: "Interactive Tool",
    action: "Launch Tool"
  },
  {
    icon: "🌱",
    title: "Scope 1 & 2 Carbon Calculator",
    desc: "Calculate organizational direct and indirect fuel/electricity GHG emissions aligned with the GHG Protocol.",
    type: "Calculator",
    action: "Calculate Emissions"
  },
  {
    icon: "📋",
    title: "BRSR Core Gap Assessment Checklist",
    desc: "Audit your disclosure readiness against 9 ESG principles mandated for top listed corporate entities.",
    type: "Audit Matrix",
    action: "Start Gap Check"
  },
  {
    icon: "⚡",
    title: "Net-Zero ROI & Payback Estimator",
    desc: "Model financial returns, energy cost savings, and carbon credit yields for commercial solar & waste-to-energy investments.",
    type: "Financial Model",
    action: "Estimate ROI"
  }
];

export const ResourcesTools = () => {
  return (
    <section id="tools" className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            SELF-SERVICE SUITE
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Interactive ESG Tools & Calculators
          </h2>
          <p className="text-16-regular" style={{ maxWidth: '600px', margin: '1rem auto', color: '#4A5568' }}>
            Accelerate your sustainability workflows with our free, proprietary enterprise tools designed by certified ESG auditors.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '2rem'
        }}>
          {tools.map((t, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F8F6F0',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{t.icon}</span>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '10px',
                    backgroundColor: '#1A2F25',
                    color: '#54BF44'
                  }}>
                    {t.type}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.8rem', lineHeight: '1.3' }}>
                  {t.title}
                </h3>
                <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {t.desc}
                </p>
              </div>

              <button 
                onClick={() => alert(`Starting ${t.title}...`)}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '16px',
                  backgroundColor: '#1A2F25',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background-color 0.2s ease'
                }}
              >
                {t.action} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
