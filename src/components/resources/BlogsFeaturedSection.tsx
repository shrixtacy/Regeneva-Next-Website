"use client";
import React from 'react';

export const BlogsFeaturedSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#1A2F25',
          borderRadius: '36px',
          padding: '4rem',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{
                backgroundColor: '#54BF44',
                color: '#1A2F25',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                EDITOR'S CHOICE
              </span>
              <span style={{ color: '#C7BFAC', fontSize: '14px' }}>July 24, 2026</span>
              <span style={{ color: '#C7BFAC', fontSize: '14px' }}>• 8 min read</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.25', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              How Artificial Intelligence is Revolutionizing Real-Time Scope 1, 2, & 3 Carbon Auditing
            </h2>

            <p style={{ color: '#C7BFAC', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Manual GHG data collection is becoming obsolete. Explore how automated IoT telemetry and LLM-powered invoice parsing are cutting ESG reporting cycles from months to days.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#54BF44',
                color: '#1A2F25',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '18px'
              }}>
                DR
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '16px' }}>Dr. Rashid Al-Maktoum</div>
                <div style={{ fontSize: '13px', color: '#889988' }}>Head of Climate AI & Analytics</div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#263228',
            borderRadius: '28px',
            padding: '3rem',
            border: '1px solid rgba(84, 191, 68, 0.3)',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🤖🌱</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem' }}>
              AI Carbon Accounting Benchmark
            </h3>
            <p style={{ color: '#C7BFAC', fontSize: '14px', lineHeight: '1.6', marginBottom: '2rem' }}>
              Download our benchmark comparison testing top automated carbon accounting platforms across 500 enterprise datasets.
            </p>
            <button 
              onClick={() => alert('Opening featured article...')}
              className="contact-btn white w-inline-block" 
              style={{ display: 'inline-flex', border: 'none', cursor: 'pointer' }}
            >
              <div className="dot-contact-btn green"></div>
              <div style={{ color: '#1A2F25' }}>Read Full Story</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
