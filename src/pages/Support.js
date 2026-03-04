import React from "react";
import "./Support.css";

export default function Support() {

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919956949920",
      "_blank"
    );
  };

  return (
    <div className="support-page">

      {/* Header */}
      <div className="support-hero">
        <h1>Help & Support</h1>
        <p>
          We're here to assist you with your orders,
          delivery, and product inquiries.
        </p>
      </div>

      {/* Support Options */}
      <div className="support-container">

        <div className="support-card">
          <div className="support-icon">💬</div>
          <h3>WhatsApp Support</h3>
          <p>
            Get instant assistance from our support team.
          </p>
          <button
            className="support-btn primary"
            onClick={openWhatsApp}
          >
            Chat on WhatsApp
          </button>
        </div>

        <div className="support-card">
          <div className="support-icon">📧</div>
          <h3>Email Support</h3>
          <p>
            Reach out for detailed queries or bulk orders.
          </p>
          <button className="support-btn secondary">
            support@mushroomfactory.com
          </button>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How long does delivery take?</h4>
          <p>
            Orders are usually delivered within 24–48 hours
            depending on your location.
          </p>
        </div>

        <div className="faq-item">
          <h4>Are your mushrooms organic?</h4>
          <p>
            Yes, all our mushrooms are cultivated in
            climate-controlled organic environments.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can I cancel my order?</h4>
          <p>
            Yes, you can cancel your order before it is
            marked as delivered.
          </p>
        </div>

      </div>

    </div>
  );
}