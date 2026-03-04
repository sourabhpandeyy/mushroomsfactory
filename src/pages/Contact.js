import React from "react";
import "./Contact.css";

export default function Contact() {

  const openWhatsApp = () => {
    window.open("https://wa.me/919956949920", "_blank");
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1> Contact Mushroom Factory</h1>
        <p>
          We are committed to delivering premium organic products
          with excellence and transparency.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 9956949920</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@mushroomfactory.com</p>
          </div>

          <div className="info-card">
            <h3>Corporate Office</h3>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>

          <button
            className="primary-btn"
            onClick={openWhatsApp}
          >
            Contact via WhatsApp
          </button>

        </div>

        {/* FORM */}
        <div className="contact-form-card">
          <h3>Send Us a Message</h3>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="testimonial-section">

        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              “Excellent quality mushrooms with
              consistent freshness. Delivery was fast
              and packaging was premium.”
            </p>
            <span>— Rajiv Sharma, Lucknow</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Best organic supplier in the region.
              Highly professional and trustworthy.”
            </p>
            <span>— Neha Verma, Delhi</span>
          </div>

          <div className="testimonial-card">
            <p>
              “The Lion’s Mane variety is exceptional.
              Great for health and brain performance.”
            </p>
            <span>— Amit Kapoor, Mumbai</span>
          </div>

        </div>

      </div>

    </div>
  );
}