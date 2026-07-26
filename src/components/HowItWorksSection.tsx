"use client";

import React from "react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    { num: "01", title: "Raw materials feed", text: "Raw materials are fed into the chamber directly from waste collectors or automated hoppers." },
    { num: "02", title: "Self-generated energy", text: "Gas flow and movement of free boundary contacts between components generate internal process energy." },
    { num: "03", title: "Extreme local heat", text: "Temperature rises above 3000°C in targeted local zones without needing external grid power." },
    { num: "04", title: "Molecular restructuring", text: "The waste composition properties are molecularly restructured during high-temperature disposal." },
    { num: "05", title: "Clean energy recovery", text: "Heat and combustible vapor-gas mixture (gas, oxygen, water vapor) are released simultaneously." },
    { num: "06", title: "Eco-friendly output", text: "Ensures 100% eco-friendly disposal of waste with any structure and moisture content up to 80%." }
  ];

  return (
    <section id="how-it-works" style={{ padding: "6rem 2rem", background: "#152a1d", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "4rem", fontWeight: 400, color: "#f4efe6", lineHeight: 1.1 }}>
            How it works
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#a3b9a7", marginTop: "1rem", maxWidth: "600px" }}>
            Our disposal technology is built on full-scale industrial implementation and validation from 2010–2020.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {steps.map((step) => (
            <div key={step.num} style={{ background: "rgba(255,255,255,0.04)", padding: "2rem", borderRadius: "1.25rem", border: "1px solid rgba(84, 191, 68, 0.15)" }}>
              <div style={{ fontSize: "1rem", color: "#54BF44", fontWeight: 700, marginBottom: "0.5rem" }}>
                STEP {step.num}
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 500, color: "#ffffff", marginBottom: "0.75rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#c3d5c6", lineHeight: "1.6" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
