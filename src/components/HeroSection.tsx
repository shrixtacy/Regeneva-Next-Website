"use client";

import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="section beige hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
      <div className="w-layout-blockcontainer container hero w-container">
        <div className="inner-wrapper-hero" style={{ textAlign: "center", position: "relative" }}>
          <h1 className="h1 _w-808" style={{ fontSize: "4.5rem", fontWeight: 400, color: "#1a3323", lineHeight: 1.05, margin: "0 auto 2rem auto", maxWidth: "900px" }}>
            Waste disposal and resource recovery
          </h1>
          
          <div className="hero-bottom-text" style={{ marginTop: "3rem" }}>
            <div className="text-21-regular center" style={{ fontSize: "1.5rem", color: "#263228", marginBottom: "2rem" }}>
              Revolutionary Mobile Waste<br />Management Solution
            </div>
            
            <div className="scroll-down" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.7 }}>
              <span className="text-14-regular" style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>scroll down</span>
              <img 
                src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/675717df393cd26b8656be15_arrow-down.svg" 
                alt="Scroll down" 
                style={{ width: "16px", height: "16px", animation: "bounce 2s infinite" }} 
              />
            </div>
          </div>

          <div className="links-bottom-bg wrap" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "3rem" }}>
            <a href="https://www.linkedin.com/company/saapro1/" target="_blank" rel="noopener noreferrer" className="social-link-wrap w-inline-block">
              <img src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/67364bfdf42bcd92a21468f6_ln.svg" alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="tel:+971551755470" className="social-link-wrap w-inline-block">
              <img src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65bf2dd4689bf794108e_phone.svg" alt="Phone" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="mailto:saapro.ae@gmail.com" className="social-link-wrap w-inline-block">
              <img src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65b253821f64273ae8c7_mail%20(1).svg" alt="Email" style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
