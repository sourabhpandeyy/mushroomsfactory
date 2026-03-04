import React from "react";
import { motion } from "framer-motion";
import "./Stats.css";

export default function Stats() {
  const features = [
    {
      icon: "🌿",
      title: "100% Organic Guarantee",
      desc: "Naturally cultivated mushrooms without harmful chemicals."
    },
    {
      icon: "🚚",
      title: "2-Hour Fast Delivery",
      desc: "Farm fresh mushrooms delivered quickly to your doorstep."
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      desc: "Safe transactions with trusted payment gateways."
    },
    {
      icon: "📦",
      title: "Premium Packaging",
      desc: "Carefully packed to maintain freshness and quality."
    }
  ];

  return (
    <section className="stats-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Shop With MUSHROOMS FACTORY?
      </motion.h2>

      <div className="stats-grid">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}