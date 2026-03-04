import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">

       {/* Company Info */}
<div className="footer-column">
  <h3>
    Mushroom Factory
    <span className="since-badge">Since 2027</span>
  </h3>

  <p>
    Premium organic mushrooms cultivated using
    climate-controlled precision farming systems.
  </p>

  <div className="license-info">
    FSSAI License No: 12345678901234
  </div>

  <div className="iso-statement">
    ISO 22000:2018 certified food safety management system.
  </div>

  <div className="sustainability">
    Committed to sustainable agriculture, water-efficient
    cultivation practices, and responsible food production
    that supports local farmers and environmental balance.
  </div>
</div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Contact & Registered Office */}
        <div className="footer-column">
          <h4>Registered Office</h4>
          <p>
            Mushroom Factory Pvt. Ltd.<br />
            2nd Floor, Industrial Growth Centre,<br />
            Lucknow, Uttar Pradesh – 226010<br />
            India
          </p>

          <p>📞 +91 9956949920</p>
          <p>📧 info@mushroomfactory.com</p>
        </div>

      </div>

      {/* ================= LEGAL ================= */}
      <div className="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/refund">Refund Policy</a>
      </div>

     {/* ================= MADE IN INDIA STRIP ================= */}
<div className="made-in-india">
  <span className="india-flag">🇮🇳</span>
  Proudly Made in India
</div>

{/* ================= COPYRIGHT ================= */}
<div className="footer-bottom">
  © {new Date().getFullYear()} Mushroom Factory Pvt. Ltd.
  All Rights Reserved.
</div>

    </footer>
  );
}