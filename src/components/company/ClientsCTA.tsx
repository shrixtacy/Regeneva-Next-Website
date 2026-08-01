"use client";
import React from 'react';

export const ClientsCTA = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          backgroundColor: '#F8F6F0',
          borderRadius: '36px',
          padding: '4rem 2rem',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
        }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            BECOME A REGENEVA PARTNER
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.2rem', margin: '0.8rem 0 1rem' }}>
            Transform Your Enterprise Operations Today
          </h2>
          <p style={{ color: '#4A5568', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            Join leading governments, real estate developers, and manufacturing corporations accelerating their journey to zero landfill and verified net-zero compliance.
          </p>
          <a href="/company/contact" className="contact-btn w-inline-block" style={{ display: 'inline-flex' }}>
            <div className="dot-contact-btn"></div>
            <div>Schedule Enterprise Partnership Call</div>
          </a>
        </div>
      </div>
    </section>
  );
};
