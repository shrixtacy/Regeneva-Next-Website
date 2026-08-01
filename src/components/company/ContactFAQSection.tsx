"use client";
import React, { useState } from 'react';

const faqs = [
  {
    q: "How fast can ReGeneva deploy mobile waste processing technology?",
    a: "Our modular mobile waste units can be delivered, calibrated, and operational on-site within 14 to 21 business days following baseline site audit approval."
  },
  {
    q: "Do you offer customized corporate training for internal sustainability teams?",
    a: "Yes. ReGeneva Academy designs bespoke corporate masterclasses tailored to your industry's specific compliance requirements, GHG reporting software, and double materiality frameworks."
  },
  {
    q: "What standards do your ESG reports and carbon audits comply with?",
    a: "All audits and reports adhere to GRI (Global Reporting Initiative), ISSB (IFRS S1/S2), BRSR Core, GHG Protocol Corporate Standard, and ISO 14064 criteria."
  }
];

export const ContactFAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3rem', marginTop: '0.5rem' }}>
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1.2rem' }}>
          {faqs.map((f, idx) => (
            <div key={idx} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.8rem 2.2rem',
              border: '1px solid rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1A2F25', margin: 0 }}>
                  {f.q}
                </h3>
                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#54BF44' }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </div>
              {openIdx === idx && (
                <p style={{ marginTop: '1rem', color: '#4A5568', fontSize: '15px', lineHeight: '1.6' }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
