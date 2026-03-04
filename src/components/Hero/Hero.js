import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* Background Overlay Glow */}
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>
          Crafted by Nature. Perfected by<br />
          <span>Mushrooms Factory</span>
        </h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          FRESHNESS YOU CAN TRUST
        </motion.p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>

      </motion.div>

    </section>
  );
}