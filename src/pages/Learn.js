import React, { useState, useEffect } from "react";
import "./Learn.css";
import farmImg from "../assets/mushroom-farm.jpg";

export default function Learn() {

  const [activeNutrient, setActiveNutrient] = useState("Protein");

  const nutrients = {
  Protein: {
    title: "Plant-Based Protein",
    level: 70,
    desc: "Mushrooms provide high-quality plant protein essential for muscle repair, tissue rebuilding, and maintaining strength. They are especially valuable for vegetarian and plant-based diets."
  },
  "Vitamin B Complex": {
    title: "Energy & Brain Function",
    level: 80,
    desc: "Vitamin B complex helps convert food into energy, supports nervous system function, and enhances mental clarity and focus during daily activities."
  },
  "Vitamin D": {
    title: "Bone & Immune Support",
    level: 60,
    desc: "Naturally exposed mushrooms contain Vitamin D which strengthens bones, supports calcium absorption, and improves immune defense."
  },
  Antioxidants: {
    title: "Cellular Protection",
    level: 85,
    desc: "Antioxidants protect the body against oxidative stress, reduce inflammation, and support long-term health and healthy aging."
  },
  Potassium: {
    title: "Cardiovascular Balance",
    level: 75,
    desc: "Potassium helps regulate blood pressure and maintain healthy heart rhythm, contributing to cardiovascular stability."
  },
  Fiber: {
    title: "Digestive Wellness",
    level: 90,
    desc: "Dietary fiber supports gut microbiome health, improves digestion, and promotes natural appetite control."
  }
};

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="learn-page">

      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>

      {/* HERO */}
      <div className="learn-hero reveal">
        <h1>The Science & Heritage of Mushrooms</h1>
        <p>
          Where ancient wisdom meets modern sustainable farming.
        </p>
      </div>

      {/* IMAGE */}
      <div className="learn-image-container reveal">
        <img src={farmImg} alt="Mushroom Farming" />
      </div>

      {/* HISTORY */}
<section className="learn-section glass reveal">
  <h2>Mushrooms in History & Modern India</h2>

  <p>
    Mushrooms have been part of global civilization for over 2,000 years.
    Ancient Chinese and Egyptian cultures considered them symbols of
    longevity, vitality, and strength. In traditional medicine systems,
    mushrooms were used to improve immunity, stamina, and overall health.
  </p>

  <p>
    In India, mushroom cultivation began expanding significantly
    in the late 20th century. Today, India is one of the fastest-growing
    mushroom-producing countries in Asia.
  </p>

  <p>
    Major mushroom-producing states in India include Himachal Pradesh,
    Haryana, Punjab, Uttar Pradesh, Maharashtra, Tamil Nadu, Karnataka,
    and Telangana. These regions provide suitable temperature and humidity
    conditions for commercial cultivation.
  </p>

  <p>
    Button mushrooms dominate Indian production, followed by oyster,
    milky, and paddy straw varieties. India produces thousands of
    metric tons annually, supporting both domestic consumption and exports.
  </p>

  <p>
    Modern Indian mushroom farming uses climate-controlled units,
    compost-based cultivation, and sustainable methods that minimize
    environmental impact while maintaining premium quality standards.
  </p>

  <p>
    Mushrooms Factory aligns with this national growth by integrating
    hygienic farming systems, eco-conscious practices, and advanced
    monitoring technologies to deliver safe and nutritious produce.
  </p>
</section>

     {/* NUTRITION */}
<section className="learn-section glass reveal">
  <h2>Why Mushrooms Are a Powerful Everyday Superfood</h2>

  <p>
    Mushrooms are nutrient-dense foods that provide essential
    vitamins and minerals without excess calories or unhealthy fats.
    They support daily wellness, immunity, heart health,
    digestion, and energy metabolism.
  </p>

  <div className="nutrition-layout">

    <div className="nutrition-sidebar">
      {Object.keys(nutrients).map((key) => (
        <div
          key={key}
          className={`nutrition-item ${
            activeNutrient === key ? "active" : ""
          }`}
          onClick={() => setActiveNutrient(key)}
        >
          {key}
        </div>
      ))}
    </div>

    <div className="nutrition-content">
      <h3>{nutrients[activeNutrient].title}</h3>
      <p>{nutrients[activeNutrient].desc}</p>

      <div className="stat-bar">
        <div
          className="stat-fill"
          style={{
            width: `${nutrients[activeNutrient].level}%`
          }}
        ></div>
      </div>

      <div className="nutrition-extra">
        <p>
          Including mushrooms in your weekly diet supports
          balanced nutrition, especially for vegetarians
          and individuals seeking low-calorie, high-value foods.
        </p>

        <p>
          Mushrooms are cholesterol-free, naturally gluten-free,
          and suitable for heart-friendly diets.
        </p>

        <p>
          Regular consumption may contribute to improved
          immune response, better digestion, and sustained
          daily energy levels.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* PREMIUM QUOTE */}
      <section className="quote-section reveal">
        <div className="quote-content">
          <h3>
            “Pure food is not just nourishment —  
            it is a commitment to health, sustainability, and future generations.”
          </h3>
        </div>
      </section>

    </div>
  );
}