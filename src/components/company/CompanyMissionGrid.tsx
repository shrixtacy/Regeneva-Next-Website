"use client";
import React from 'react';

export const CompanyMissionGrid = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            PURPOSE & VISION
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.5rem', marginTop: '0.5rem' }}>
            Built for a Net-Zero World
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {/* Mission Card */}
          <div style={{
            backgroundColor: '#1A2F25',
            borderRadius: '32px',
            padding: '3rem',
            color: '#FFFFFF',
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#FFFFFF' }}>Our Mission</h3>
            <p style={{ color: '#C7BFAC', fontSize: '1.05rem', lineHeight: '1.6' }}>
              To empower organizations across public and private sectors to achieve true net-zero operations through scalable waste technology, verified carbon accounting, and strategic ESG advisory.
            </p>
          </div>

          {/* Vision Card */}
          <div style={{
            backgroundColor: '#F8F6F0',
            borderRadius: '32px',
            padding: '3rem',
            color: '#1A2F25',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#1A2F25' }}>Our Vision</h3>
            <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: '1.6' }}>
              A regenerative global economy where zero landfill waste, circular resource loops, and climate transparency are standard operating requirements for all enterprise market leaders.
            </p>
          </div>

          {/* Values Card */}
          <div style={{
            backgroundColor: '#E8F5E9',
            borderRadius: '32px',
            padding: '3rem',
            color: '#1A2F25'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☘️</div>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#1A2F25' }}>Core Values</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.8rem', fontSize: '15px', fontWeight: '600', color: '#1A2F25' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><span style={{ color: '#54BF44' }}>✓</span> Rigorous Empirical Science</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><span style={{ color: '#54BF44' }}>✓</span> Uncompromising Data Transparency</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><span style={{ color: '#54BF44' }}>✓</span> Rapid Turnkey Scalability</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><span style={{ color: '#54BF44' }}>✓</span> Regenerative Circular Economy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
