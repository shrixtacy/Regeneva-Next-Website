"use client";
import React from 'react';

export const AboutStorySection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
              ORIGIN & FOUNDATION
            </span>
            <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3rem', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              Bridging the Gap Between Ambition and Action
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              ReGeneva was founded with a singular conviction: setting net-zero targets is meaningless without scalable engineering and rigorous data transparency.
            </p>
            <p style={{ color: '#4A5568', fontSize: '1rem', lineHeight: '1.7' }}>
              Operating from the heart of the GCC and expanding internationally, our multidisciplinary team of chemical engineers, environmental scientists, and ESG auditors pioneered mobile zero-emissions waste treatment systems and real-time Scope 1–3 telemetry.
            </p>
          </div>

          <div style={{
            backgroundColor: '#1A2F25',
            borderRadius: '32px',
            padding: '3rem',
            color: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#54BF44', marginBottom: '1.5rem' }}>
              Our Impact Operating System
            </h3>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '16px', color: '#FFFFFF' }}>Mobile Waste Engineering</div>
                  <div style={{ fontSize: '13px', color: '#C7BFAC' }}>Turnkey zero-landfill thermal processing deployed on-site.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem' }}>📊</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '16px', color: '#FFFFFF' }}>Assurance-Ready Data</div>
                  <div style={{ fontSize: '13px', color: '#C7BFAC' }}>Empirical carbon accounting compliant with GRI, ISSB & BRSR.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem' }}>🎓</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '16px', color: '#FFFFFF' }}>Executive Up-skilling</div>
                  <div style={{ fontSize: '13px', color: '#C7BFAC' }}>ReGeneva Academy programs training future sustainability leaders.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
