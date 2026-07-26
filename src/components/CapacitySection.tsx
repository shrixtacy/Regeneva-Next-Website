"use client";

import React from "react";

export const CapacitySection: React.FC = () => {
  return (
    <section style={{ padding: "6rem 2rem", background: "#e9e1d1" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "3.5rem", color: "#1a3323", fontWeight: 400, marginBottom: "0.5rem" }}>
            Up to 20 tons per hour
          </h2>
          <div style={{ fontSize: "1.25rem", color: "#54463b" }}>
            The capacity of our mobile units is scalable to your specific waste disposal needs
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {/* Card 1 */}
          <div style={{ background: "#1a3323", color: "#ffffff", padding: "2.5rem", borderRadius: "1.5rem" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 600, color: "#54BF44" }}>0%</div>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "#f4efe6" }}>Reduce CO2 emission</div>
              <div style={{ fontSize: "0.95rem", color: "#a3b9a7", marginTop: "0.25rem" }}>at full operation</div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ background: "#1a3323", color: "#ffffff", padding: "2.5rem", borderRadius: "1.5rem" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 600, color: "#54BF44" }}>&lt; 0.1%</div>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "#f4efe6" }}>NO Ash</div>
              <div style={{ fontSize: "0.95rem", color: "#a3b9a7", marginTop: "0.25rem" }}>non-toxic ash residue</div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ background: "#1a3323", color: "#ffffff", padding: "2.5rem", borderRadius: "1.5rem" }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 600, color: "#54BF44" }}>0%</div>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "#f4efe6" }}>Zero Flue Gas</div>
              <div style={{ fontSize: "0.95rem", color: "#a3b9a7", marginTop: "0.25rem" }}>fumes are completely eliminated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
