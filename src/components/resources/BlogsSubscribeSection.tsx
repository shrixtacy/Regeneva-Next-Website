"use client";
import React from 'react';

export const BlogsSubscribeSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#F8F6F0',
          borderRadius: '32px',
          padding: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          border: '2px dashed rgba(84, 191, 68, 0.4)'
        }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
              CONTRIBUTE TO REGENEVA
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1A2F25', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Have a Sustainability Perspective to Share?
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We invite guest articles, academic research summaries, and corporate case studies from ESG practitioners and industry experts worldwide.
            </p>
          </div>

          <div style={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1A2F25', marginBottom: '0.8rem' }}>
              Submit an Editorial Proposal
            </h3>
            <p style={{ fontSize: '14px', color: '#718096', marginBottom: '1.5rem' }}>
              Our editorial panel reviews submissions weekly for publication across ReGeneva channels.
            </p>
            <a href="mailto:editorial@regeneva.com" className="contact-btn w-inline-block" style={{ display: 'inline-flex' }}>
              <div className="dot-contact-btn"></div>
              <div>Submit Article Pitch</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
