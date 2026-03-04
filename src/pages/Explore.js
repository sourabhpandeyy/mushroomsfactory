import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Explore.css";

export default function Explore() {

  /* ================= PRODUCTION COUNTER ================= */
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 8000; // upgraded capacity
    const duration = 2000;
    const increment = 80;
    const stepTime = duration / (end / increment);

    const timer = setInterval(() => {
      start += increment;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="explore-page">

      {/* ================= HERO SECTION ================= */}
      <div className="explore-video-hero">
        <video autoPlay muted loop playsInline>
          <source
            src="https://cdn.coverr.co/videos/coverr-greenhouse-farm-5173/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay">
          <h1>Inside Mushroom Factory</h1>

          <p className="explore-tagline">
            India’s next-generation organic mushroom cultivation ecosystem.
          </p>

          <p className="explore-description">
            Founded with a vision to redefine sustainable agriculture,
            Mushroom Factory integrates advanced climate control,
            scientific crop monitoring, and organic compost technology
            to ensure premium quality harvests throughout the year.
            Every batch reflects purity, hygiene, and nutritional excellence.
          </p>
        </div>
      </div>

      {/* ================= FACILITY SLIDER ================= */}
      <section className="explore-section">
        <h2>Our Cultivation Facility</h2>

        <div className="slider">
          <div className="slide-track">
            {[
              "https://images.unsplash.com/photo-1604908176997-4310e3b91d1c",
              "https://images.unsplash.com/photo-1587731556938-38755b4803a6",
              "https://images.unsplash.com/photo-1506806732259-39c2d0268443"
            ].map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}

            {[
              "https://images.unsplash.com/photo-1604908176997-4310e3b91d1c",
              "https://images.unsplash.com/photo-1587731556938-38755b4803a6",
              "https://images.unsplash.com/photo-1506806732259-39c2d0268443"
            ].map((img, index) => (
              <img key={`dup-${index}`} src={img} alt="" />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VARIETIES ================= */}
      <section className="explore-section">
        <h2>Our Premium Varieties</h2>

        <div className="varieties-grid">
          {[
            {
              title: "Button Mushroom",
              desc: "India’s most widely consumed fresh mushroom variety."
            },
            {
              title: "Oyster Mushroom",
              desc: "High-protein, fiber-rich organic cultivation."
            },
            {
              title: "Shiitake",
              desc: "Exotic medicinal-grade gourmet mushroom."
            },
            {
              title: "Lion’s Mane",
              desc: "Supports cognitive wellness and immunity."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="variety-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="explore-section timeline">
        <h2>Our Journey</h2>

        <div className="timeline-container">

          {[
            {
              year: "2027",
              text: "Mushroom Factory established with a mission to produce 100% organic mushrooms."
            },
            {
              year: "2028",
              text: "Implemented advanced climate-controlled cultivation systems."
            },
            {
              year: "2029",
              text: "Expanded distribution network across North and Central India."
            },
            {
              year: "2030",
              text: "Achieved certified organic compliance and hygiene accreditation."
            },
            {
              year: "2032",
              text: "Scaled production capacity to multi-state premium supplier."
            }
          ].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>{item.year}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PRODUCTION ================= */}
      <section className="explore-section production">
        <h2>Annual Organic Production Capacity</h2>
        <div className="counter">
          {count}+ Tons
        </div>
        <p className="production-desc">
          Sustainably cultivated using eco-friendly compost,
          zero chemical preservatives, and scientifically
          monitored humidity control systems.
        </p>
      </section>

    </div>
  );
}