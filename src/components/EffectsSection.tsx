"use client";

import React from "react";

interface EffectsSectionProps {
  onOpenContact: () => void;
}

export const EffectsSection: React.FC<EffectsSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="effects" style={{ padding: "6rem 2rem", background: "#1a3323", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 400, color: "#f4efe6", marginBottom: "4rem" }}>
          Effects of Waste Dumping
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem", marginBottom: "5rem" }}>
          {/* Soil */}
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#54BF44", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              Pollution of Soil
            </div>
            <p style={{ fontSize: "0.95rem", color: "#c3d5c6", lineHeight: "1.6" }}>
              Waste can leak hazardous chemicals into the soil and from there directly into our food chain.
            </p>
          </div>

          {/* Groundwater */}
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#54BF44", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              Pollution of Groundwater
            </div>
            <p style={{ fontSize: "0.95rem", color: "#c3d5c6", lineHeight: "1.6" }}>
              280 billion tons of groundwater is being polluted every year — that’s 9,000 tons every single second.
            </p>
          </div>

          {/* Air */}
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#54BF44", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              Air Pollution
            </div>
            <p style={{ fontSize: "0.95rem", color: "#c3d5c6", lineHeight: "1.6" }}>
              Open burning of waste at landfills releases toxic substances into the air, including carcinogenic dioxins.
            </p>
          </div>

          {/* Oceans */}
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#54BF44", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              Pollution of Oceans
            </div>
            <p style={{ fontSize: "0.95rem", color: "#c3d5c6", lineHeight: "1.6" }}>
              13 million tonnes of plastic enter the ocean each year. By 2050, plastic could outweigh fish in the sea.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ 
          background: "#24422e", 
          padding: "3.5rem 2.5rem", 
          borderRadius: "2rem", 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "2rem",
          border: "1px solid rgba(84, 191, 68, 0.2)"
        }}>
          <div>
            <h3 style={{ fontSize: "2.25rem", fontWeight: 400, color: "#ffffff", marginBottom: "0.5rem" }}>
              Take Action for a Sustainable Tomorrow
            </h3>
            <p style={{ fontSize: "1rem", color: "#a3b9a7" }}>
              Contact our engineering team to discuss customized mobile waste plants for your region.
            </p>
          </div>
          <button 
            onClick={onOpenContact} 
            style={{ 
              background: "#54BF44", 
              color: "#1a3323", 
              fontSize: "1.1rem", 
              fontWeight: 600, 
              padding: "1rem 2.5rem", 
              borderRadius: "2rem", 
              border: "none", 
              cursor: "pointer" 
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};
