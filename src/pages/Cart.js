import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotal,
  } = useContext(CartContext);

  const [address, setAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );

  const [editing, setEditing] = useState(false);

  /* DELIVERY LOGIC */
  const deliveryCharge = getTotal() > 499 ? 0 : 40;

  const orderId =
    "MF" + Math.floor(100000 + Math.random() * 900000);

  const saveAddress = () => {
    localStorage.setItem("userAddress", address);
    setEditing(false);
  };

  const handleProceed = () => {
    let message = `🧾 *Order ID:* ${orderId}\n\n`;
    message += "🛒 *Order Details*\n\n";

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `Qty: ${item.quantity}\n`;
      message += `Price: ₹${item.price * item.quantity}\n\n`;
    });

    message += `💰 Subtotal: ₹${getTotal()}\n`;
    message += `🚚 Delivery: ₹${deliveryCharge}\n`;
    message += `💳 Total Payable: ₹${
      getTotal() + deliveryCharge
    }\n\n`;

    message += `📍 *Delivery Address:*\n${address}`;

    const encoded = encodeURIComponent(message);

    window.open(
      `https://wa.me/919956949920?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <p>₹{item.price * item.quantity}</p>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="summary">
        <p>Subtotal: ₹{getTotal()}</p>
        <p>Delivery: ₹{deliveryCharge}</p>
        <h3>Total: ₹{getTotal() + deliveryCharge}</h3>
      </div>

      <div className="address-section">
        <h3>Delivery Address</h3>

        {editing ? (
          <>
            <textarea
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />
            <button onClick={saveAddress}>
              Save Address
            </button>
          </>
        ) : (
          <>
            <p>{address || "No address saved"}</p>
            <button onClick={() => setEditing(true)}>
              {address ? "Edit Address" : "Add Address"}
            </button>
          </>
        )}
      </div>

      <button
        className="proceed-btn"
        onClick={handleProceed}
      >
        Proceed to WhatsApp
      </button>
    </div>
  );
}