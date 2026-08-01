"use client";
import React, { useState } from 'react';

const sectors = [
  { name: "Government & Municipalities", icon: "/assets/6769537c94360f4b4ca884fb_gov-icon.webp" },
  { name: "Real Estate & Development", icon: "/assets/676953f873a0aa4faf4e0816_dev-icon.webp" },
  { name: "Manufacturing & Industrial", icon: "/assets/6769542138196dbca0dc134d_manuf-icon.webp" },
  { name: "Healthcare & Pharmaceuticals", icon: "/assets/676954326dda5512d0bdc54c_healthcare-sign%201.webp" },
  { name: "Agriculture & Food Security", icon: "/assets/6769543d73ae8cf79e35ad19_agriculture%201.webp" }
];

const clientList = [
  { name: "Dubai Municipality", category: "Government & Municipalities", location: "UAE" },
  { name: "Emirates Steel Arkan", category: "Manufacturing & Industrial", location: "UAE" },
  { name: "Emaar Properties", category: "Real Estate & Development", location: "UAE" },
  { name: "Abu Dhabi National Energy (TAQA)", category: "Energy & Infrastructure", location: "UAE" },
  { name: "Saudi Aramco Mobility Division", category: "Manufacturing & Industrial", location: "KSA" },
  { name: "PureHealth GCC", category: "Healthcare & Pharmaceuticals", location: "UAE" },
  { name: "Nakheel Developments", category: "Real Estate & Development", location: "UAE" },
  { name: "Agthia Group", category: "Agriculture & Food Security", location: "UAE" }
];

export const ClientsLogoWall = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Sectors");

  const filteredClients = selectedFilter === "All Sectors" 
    ? clientList 
    : clientList.filter(c => c.category === selectedFilter);

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}>
      <div className="container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#54BF44' }}>
            ENTERPRISE NETWORK
          </span>
          <h2 className="text-140-regular" style={{ color: '#1A2F25', fontSize: '3.5rem', marginTop: '0.5rem' }}>
            Industries We Transform
          </h2>
        </div>

        {/* Sectors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {sectors.map((s, idx) => (
            <div key={idx} style={{
              backgroundColor: '#F8F6F0',
              borderRadius: '24px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease'
            }}>
              <img src={s.icon} alt={s.name} style={{ height: '40px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1A2F25', lineHeight: '1.3' }}>
                {s.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Client Cards Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {filteredClients.map((c, idx) => (
            <div key={idx} style={{
              backgroundColor: '#1A2F25',
              borderRadius: '24px',
              padding: '2rem',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.7, marginBottom: '1rem' }}>
                  <span>📍 {c.location}</span>
                  <span style={{ color: '#54BF44', fontWeight: '700' }}>Verified Client</span>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  {c.name}
                </h4>
                <div style={{ fontSize: '13px', color: '#C7BFAC' }}>{c.category}</div>
              </div>

              <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', fontSize: '13px', color: '#54BF44', fontWeight: '600' }}>
                Zero-Landfill & ESG Certified ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
