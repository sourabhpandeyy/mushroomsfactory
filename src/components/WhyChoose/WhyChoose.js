import React from "react";
import { motion } from "framer-motion";
import "./WhyChoose.css";

export default function WhyChoose() {
  const features = [
    {
      title: "Farm-to-Table Freshness",
      desc: "Harvested at peak perfection and delivered the same day to preserve flavor, texture and nutrition.",
      icon: "🍄"
    },
    {
      title: "Sustainably Grown",
      desc: "We cultivate mushrooms using eco-conscious methods that respect nature and reduce waste.",
      icon: "🌱"
    },
    {
      title: "Chef-Grade Quality",
      desc: "Each batch is carefully selected to meet gourmet standards trusted by home chefs and restaurants.",
      icon: "👨‍🍳"
    },
    {
      title: "Naturally Powerful Nutrition",
      desc: "Rich in vitamins, antioxidants and plant protein to elevate your healthy lifestyle.",
      icon: "💪"
    }
  ];

  return (
    <section className="why-section">
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          Experience the Future of <span>Organic Living</span>
        </h2>
        <p>
          At MUSHROOMS FACTORY, we don’t just grow mushrooms — we craft purity,
          sustainability and premium taste into every harvest.
        </p>
      </motion.div>

      <div className="why-grid">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="why-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.06 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}