"use client";
import React from 'react';

const testimonials = [
  {
    quote: "ReGeneva’s mobile thermal waste system completely revolutionized our plant’s waste diversion metrics. Within 90 days, we reached 94% zero-landfill status without stopping production.",
    author: "Mohammed Al-Nuaimi",
    title: "Director of Operations & Sustainability",
    company: "Emirates Industrial Holdings"
  },
  {
    quote: "The Double Materiality and BRSR audit framework provided by ReGeneva allowed us to satisfy stringent European investor mandates and successfully close our $150M Sustainability-Linked Loan.",
    author: "Claire Dupont",
    title: "VP of Environmental Compliance",
    company: "Global Infrastructure Capital"
  },
  {
    quote: "ReGeneva Academy trained over 200 of our corporate managers. The hands-on carbon accounting and Scope 3 supply chain modules are second to none in the MENA region.",
    author: "Fahad Al-Subaiei",
    title: "Head of Learning & Corporate Development",
    company: "KSA Urban Development Authority"
  }
];

export const ClientsTestimonials = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            What Our Partners Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              padding: '3rem 2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div>
                <div style={{ color: '#54BF44', fontSize: '2.5rem', lineHeight: '1', marginBottom: '1rem' }}>“</div>
                <p style={{ color: '#1A2F25', fontSize: '1.05rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '2rem' }}>
                  {t.quote}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', color: '#1A2F25' }}>{t.author}</div>
                <div style={{ fontSize: '13px', color: '#54BF44', fontWeight: '600', marginTop: '0.2rem' }}>{t.title}</div>
                <div style={{ fontSize: '13px', color: '#718096', marginTop: '0.1rem' }}>{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
