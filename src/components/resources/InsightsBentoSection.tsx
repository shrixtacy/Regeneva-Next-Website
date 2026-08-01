"use client";
import React from 'react';

export const InsightsBentoSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            EXECUTIVE INTELLIGENCE
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.5rem', marginTop: '0.5rem' }}>
            2026 Macro ESG Landscape
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem'
        }}>
          {/* Main Large Card */}
          <div style={{
            gridColumn: 'span 8',
            backgroundColor: '#1A2F25',
            borderRadius: '32px',
            padding: '3.5rem',
            color: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
          }}>
            <span style={{ backgroundColor: 'rgba(84, 191, 68, 0.2)', color: '#54BF44', padding: '0.4rem 1rem', borderRadius: '16px', fontSize: '12px', fontWeight: '700' }}>
              GLOBAL DISCLOSURE REGIME
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', margin: '1.5rem 0 1rem', color: '#FFFFFF' }}>
              CSRD & ISSB Alignment: What Non-EU Entities Must Prepare For
            </h3>
            <p style={{ color: '#C7BFAC', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Extraterritorial disclosure mandates are coming into force. Over 10,000 non-EU parent enterprises will fall under direct reporting obligations starting this fiscal year.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#54BF44' }}>78%</div>
                <div style={{ fontSize: '13px', color: '#889988' }}>GCC Exporters Impacted</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFFFFF' }}>150+</div>
                <div style={{ fontSize: '13px', color: '#889988' }}>Required Data Metrics</div>
              </div>
            </div>
          </div>

          {/* Secondary Card 1 */}
          <div style={{
            gridColumn: 'span 4',
            backgroundColor: '#F8F6F0',
            borderRadius: '32px',
            padding: '2.5rem',
            color: '#1A2F25',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div>
              <span style={{ backgroundColor: 'rgba(26, 47, 37, 0.08)', color: '#1A2F25', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>
                CARBON PRICES
              </span>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '1rem', marginBottom: '0.8rem', color: '#1A2F25' }}>
                Voluntary Carbon Market Pricing Surge
              </h4>
              <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.5' }}>
                High-integrity removal credits traded at a 42% premium as buyers prioritize ICVCM-labeled credits.
              </p>
            </div>
            <div style={{ marginTop: '2rem', fontSize: '2rem', fontWeight: '800', color: '#1A2F25' }}>
              $38.50 <span style={{ fontSize: '14px', fontWeight: '500', color: '#54BF44' }}>+18% YoY</span>
            </div>
          </div>

          {/* Secondary Card 2 */}
          <div style={{
            gridColumn: 'span 4',
            backgroundColor: '#E8F5E9',
            borderRadius: '32px',
            padding: '2.5rem',
            color: '#1A2F25'
          }}>
            <span style={{ backgroundColor: '#1A2F25', color: '#54BF44', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>
              GREEN BONDS
            </span>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '1rem', marginBottom: '0.8rem', color: '#1A2F25' }}>
              Middle East Sustainable Debt Reaches $35B
            </h4>
            <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.5' }}>
              Sovereign wealth funds and regional banks double sustainability-linked debt issuance.
            </p>
          </div>

          {/* Secondary Card 3 */}
          <div style={{
            gridColumn: 'span 8',
            backgroundColor: '#F0EDE4',
            borderRadius: '32px',
            padding: '2.5rem',
            color: '#1A2F25',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ backgroundColor: 'rgba(26, 47, 37, 0.08)', color: '#1A2F25', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>
                RESOURCE EFFICIENCY
              </span>
              <h4 style={{ fontSize: '1.6rem', fontWeight: '700', marginTop: '0.8rem', color: '#1A2F25' }}>
                Industrial Water & Waste Recirculation Benchmarks
              </h4>
              <p style={{ fontSize: '14px', color: '#4A5568', marginTop: '0.5rem' }}>
                Top manufacturing plants achieved 92% water reuse efficiency using mobile treatment systems.
              </p>
            </div>
            <a href="#report" className="contact-btn w-inline-block" style={{ display: 'inline-flex', flexShrink: 0 }}>
              <div className="dot-contact-btn"></div>
              <div>View Benchmark Data</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
