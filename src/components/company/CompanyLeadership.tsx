"use client";
import React from 'react';

const leaders = [
  { name: "Dr. Rashid Al-Maktoum", role: "Chief Executive Officer & Founder", bio: "Former Climate Policy Advisor with 18+ years leading regional sustainability transformation." },
  { name: "Elena Rostova", role: "Chief Sustainability Officer", bio: "GRI & ISSB certified auditor specializing in Scope 3 decarbonization and corporate ESG." },
  { name: "Tariq Al-Mansoor", role: "Head of ESG Advisory", bio: "Ex-Big4 Senior Director advising Fortune 500 boards on Double Materiality and CSRD." },
  { name: "Amira Al-Farsi", role: "Director of Clean Technology", bio: "Doctorate in Environmental Engineering leading zero-emission mobile waste technology." }
];

export const CompanyLeadership = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            EXECUTIVE LEADERSHIP
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', marginTop: '0.5rem' }}>
            Guided by Industry Visionaries
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem'
        }}>
          {leaders.map((l, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F8F6F0',
              borderRadius: '28px',
              padding: '2.5rem',
              textAlign: 'center',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                backgroundColor: '#1A2F25',
                color: '#54BF44',
                fontSize: '2rem',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '3px solid #54BF44'
              }}>
                {l.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.4rem' }}>
                {l.name}
              </h3>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#54BF44', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {l.role}
              </div>
              <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: '1.6' }}>
                {l.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
