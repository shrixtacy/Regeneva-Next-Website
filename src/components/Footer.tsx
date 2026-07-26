"use client";

import React from "react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="Contacts" style={{ background: "#112217", color: "#f4efe6", padding: "5rem 2rem 2rem 2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              SAAPRO
            </div>
            <p style={{ fontSize: "0.95rem", color: "#a3b9a7", lineHeight: "1.6" }}>
              Revolutionary Mobile Waste Management & Resource Recovery Technology in the United Arab Emirates.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", color: "#54BF44", marginBottom: "1rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem" }}>
              <a href="mailto:saapro.ae@gmail.com" style={{ color: "#f4efe6", textDecoration: "none" }}>saapro.ae@gmail.com</a>
              <a href="tel:+971551755470" style={{ color: "#f4efe6", textDecoration: "none" }}>+971 55 175 5470</a>
              <span style={{ color: "#a3b9a7", marginTop: "0.5rem" }}>Dubai, United Arab Emirates</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.1rem", color: "#54BF44", marginBottom: "1rem" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem" }}>
              <a href="#Our-Solution" style={{ color: "#a3b9a7", textDecoration: "none" }}>Our Solution</a>
              <a href="#why-saapro" style={{ color: "#a3b9a7", textDecoration: "none" }}>Why Saapro</a>
              <a href="#how-it-works" style={{ color: "#a3b9a7", textDecoration: "none" }}>How It Works</a>
              <a href="#competitive-advantage" style={{ color: "#a3b9a7", textDecoration: "none" }}>Comparison</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", fontSize: "0.875rem", color: "#7a8f7e" }}>
          <div>© {new Date().getFullYear()} Saapro. All rights reserved.</div>
          <div>Mobile Waste Disposal &amp; Biofuel Recovery Solution</div>
        </div>
      </div>
    </footer>
  );
};
