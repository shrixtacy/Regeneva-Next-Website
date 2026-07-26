"use client";

import React from "react";

export const ComparisonSection: React.FC = () => {
  return (
    <section id="competitive-advantage" style={{ padding: "6rem 2rem", background: "#1a3323", color: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 400, color: "#f4efe6", marginBottom: "1rem" }}>
          Competitive Advantage
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#a3b9a7", marginBottom: "3rem" }}>
          See how Saapro mobile waste plants outperform traditional waste treatment technologies.
        </p>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature / Metric</th>
                <th className="highlight-column">Saapro Mobile Plant</th>
                <th>Traditional Incineration</th>
                <th>Pyrolysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Waste Pre-treatment</td>
                <td className="highlight-column">None Required</td>
                <td>Required (Sorting & Shredding)</td>
                <td>Required (Drying & Sorting)</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Mobility & Deployment</td>
                <td className="highlight-column">100% Mobile (Rapid Setup)</td>
                <td>Stationary (Fixed Plant)</td>
                <td>Mostly Stationary</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Toxic Ash Residue</td>
                <td className="highlight-column">&lt; 0.1% (Non-toxic)</td>
                <td>High (Hazardous Fly Ash)</td>
                <td>Moderate (Char & Residue)</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>CO2 Emissions</td>
                <td className="highlight-column">0% (Zero Flue Gas)</td>
                <td>High Atmospheric CO2</td>
                <td>Moderate Emissions</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Construction & Commissioning</td>
                <td className="highlight-column">~ 3 Months</td>
                <td>2 – 4 Years</td>
                <td>1 – 2 Years</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Biofuel Conversion Yield</td>
                <td className="highlight-column">&gt; 30% by MSW Weight</td>
                <td>0% (Energy lost as heat)</td>
                <td>15 – 25%</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Moisture Tolerance</td>
                <td className="highlight-column">Up to 80% Moisture</td>
                <td>Low (&lt; 25% Moisture)</td>
                <td>Low (&lt; 15% Moisture)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
