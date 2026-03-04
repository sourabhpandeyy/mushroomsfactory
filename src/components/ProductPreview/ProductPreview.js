import React from "react";
import { motion } from "framer-motion";
import "./ProductPreview.css";

export default function ProductsPreview() {

  const certifications = [
    { title: "FSSAI Certified" },
    { title: "Organic Certified" },
    { title: "ISO Quality Standards" },
    { title: "GAP Compliant Farming" }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      desc: "Mushroom Factory was established with a vision to provide clean and sustainable mushroom cultivation."
    },
    {
      year: "2020",
      title: "Expansion Across India",
      desc: "Expanded supply chain to multiple states including Punjab, Haryana, Maharashtra & Tamil Nadu."
    },
    {
      year: "2022",
      title: "Advanced Climate Farming",
      desc: "Implemented modern climate-controlled farming for higher yield and purity."
    },
    {
      year: "2024",
      title: "Premium Brand Recognition",
      desc: "Recognized as one of India’s emerging organic mushroom brands."
    }
  ];

  const trustPoints = [
    "Strict Hygiene & Quality Checks",
    "Sustainably Grown Without Harmful Chemicals",
    "Fast Farm-to-Home Delivery",
    "Transparent Packaging & Freshness Guarantee"
  ];

  return (
    <section className="preview-section">

      {/* HEADER */}
      <motion.div
        className="preview-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Mushroom Factory</h2>
        <p>
          India’s premium organic mushroom cultivation brand combining
          sustainability, innovation, and uncompromised quality.
        </p>
      </motion.div>

      {/* CERTIFICATIONS */}
      <div className="cert-section">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-badge"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {cert.title}
          </motion.div>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="timeline-section">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHY INDIA TRUSTS US */}
      <motion.div
        className="trust-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Why India Trusts Mushroom Factory</h3>

        <div className="trust-grid">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-card">
              {point}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}