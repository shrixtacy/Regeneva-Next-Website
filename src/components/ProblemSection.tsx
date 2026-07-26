"use client";

import React from "react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="the-problem" style={{ padding: "6rem 2rem", background: "#1a3323", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontSize: "2.5rem", lineHeight: "1.3", fontWeight: 300, marginBottom: "4rem", color: "#f4efe6" }}>
          The global environmental situation is becoming increasingly alarming. Waste management challenges and pollution levels are reaching critical thresholds, and the need for sustainable solutions has never been more urgent.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          {/* Numbers col 1 */}
          <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "4.5rem", fontWeight: 600, color: "#54BF44", lineHeight: 1 }}>
              40.9B <span style={{ fontSize: "2rem", color: "#ffffff" }}>tons</span>
            </div>
            <div style={{ fontSize: "1rem", color: "#a3b9a7", marginTop: "0.5rem" }}>
              Global CO2 emission for 2023{" "}
              <a 
                href="https://earthobservatory.nasa.gov/images/152519/emissions-from-fossil-fuels-continue-to-rise" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#54BF44", textDecoration: "underline" }}
              >
                (NASA source)
              </a>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 600, color: "#f4efe6" }}>243.9M tons</div>
              <div style={{ fontSize: "0.95rem", color: "#54BF44" }}>produced in United Arab Emirates</div>
            </div>
          </div>

          {/* Numbers col 2 */}
          <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "4.5rem", fontWeight: 600, color: "#ffffff", lineHeight: 1 }}>
              2.12B <span style={{ fontSize: "2rem", color: "#a3b9a7" }}>tons</span>
            </div>
            <div style={{ fontSize: "1rem", color: "#a3b9a7", marginTop: "0.5rem", lineHeight: "1.5" }}>
              Municipal solid waste (MSW) dumped on the planet annually. Enough to circle the Earth on trucks <strong style={{ color: "#54BF44" }}>24 times</strong>.
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 600, color: "#54BF44" }}>less than 20%</div>
              <div style={{ fontSize: "0.95rem", color: "#a3b9a7" }}>of global waste is recycled annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
