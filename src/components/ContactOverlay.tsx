"use client";

import React from "react";

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactOverlay: React.FC<ContactOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-overlay-backdrop" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div>
          <button className="close-contact-btn" onClick={onClose} aria-label="Close contact modal">
            ✕
          </button>
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "400", lineHeight: "1.1", marginBottom: "1.5rem", color: "#f4efe6" }}>
              Get in<br />touch
            </h2>
            <p style={{ fontSize: "1rem", color: "#c3b9aa", lineHeight: "1.6", marginBottom: "2rem" }}>
              We&#39;re here to help you explore how mobile waste disposal plants can support and improve your waste management needs. If you have any questions or want to dive deeper into our technology, get in touch with us directly!
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "2rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.875rem", color: "#a39b8c", marginBottom: "0.5rem" }}>For all inquiries</div>
            <a href="mailto:saapro.ae@gmail.com" className="link-green">
              saapro.ae@gmail.com
            </a>
          </div>
          <div>
            <div style={{ fontSize: "0.875rem", color: "#a39b8c", marginBottom: "0.5rem" }}>Contact number</div>
            <a href="tel:+971551755470" className="link-green">
              +971 55 175 5470
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
