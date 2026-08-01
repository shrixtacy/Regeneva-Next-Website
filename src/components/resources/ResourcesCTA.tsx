"use client";
import React, { useState } from 'react';

export const ResourcesCTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#1A2F25', padding: '6rem 2rem', color: '#FFFFFF' }}>
      <div className="container w-container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '36px',
          padding: '4rem 2rem',
          border: '1px solid rgba(84, 191, 68, 0.3)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#54BF44',
            display: 'block',
            marginBottom: '1rem'
          }}>
            SUSTAINABILITY BRIEFING
          </span>

          <h2 className="text-140-regular" style={{ fontSize: '3.2rem', marginBottom: '1rem', color: '#FFFFFF' }}>
            Stay Ahead of Global ESG Changes
          </h2>

          <p className="text-16-regular" style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#C7BFAC', fontSize: '1.1rem' }}>
            Subscribe to the ReGeneva Monthly Digest for executive summaries, upcoming regulatory deadlines, and practical decarbonization blueprints delivered to your inbox.
          </p>

          {subscribed ? (
            <div style={{
              padding: '1.2rem 2rem',
              borderRadius: '20px',
              backgroundColor: '#54BF44',
              color: '#1A2F25',
              fontWeight: '700',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              ✓ Thank you for subscribing! Check your email for our latest Sustainability Report.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              maxWidth: '550px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input
                type="email"
                placeholder="Enter your corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1',
                  minWidth: '260px',
                  padding: '1rem 1.5rem',
                  borderRadius: '30px',
                  border: 'none',
                  outline: 'none',
                  fontSize: '15px',
                  backgroundColor: '#FFFFFF',
                  color: '#1A2F25'
                }}
              />
              <button
                type="submit"
                className="contact-btn white w-inline-block"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <div className="dot-contact-btn green"></div>
                <div style={{ color: '#1A2F25' }}>Subscribe Now</div>
              </button>
            </form>
          )}

          <div style={{ marginTop: '2.5rem', fontSize: '13px', color: '#889988', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <span>🔒 Zero Spam Guarantee</span>
            <span>📑 Unsubscribe Anytime</span>
            <span>🌍 Join 12,000+ ESG Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};
