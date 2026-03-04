import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp() {
  const { cartItems } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const generateMessage = () => {
    let message = "🛒 *New Order Request*\n\n";

    if (cartItems.length === 0) {
      message += "I am interested in your mushroom products.";
    } else {
      cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Qty: ${item.quantity}\n`;
        message += `   Price: ₹${item.price * item.quantity}\n\n`;
      });

      message += `💰 *Total: ₹${calculateTotal()}*`;
    }

    return message;
  };

  const handleConfirm = () => {
    const encoded = encodeURIComponent(generateMessage());
    window.open(
      `https://wa.me/919956949920?text=${encoded}`,
      "_blank"
    );
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Button */}
     <div
  className="floating-whatsapp bounce"
  onClick={() => setShowPopup(true)}
>
  <span className="online-dot"></span>
  💬
  {cartItems.length > 0 && (
    <span className="cart-total-badge">
      ₹{calculateTotal()}
    </span>
  )}
</div>

      {/* Popup Preview */}
      {showPopup && (
        <div className="whatsapp-popup">
          <div className="popup-content">
            <h4>Confirm Your Order</h4>
            <pre>{generateMessage()}</pre>

            <div className="popup-buttons">
              <button onClick={handleConfirm} className="confirm-btn">
                Send to WhatsApp
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}