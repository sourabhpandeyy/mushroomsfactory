import React from "react";
import { motion } from "framer-motion";

export default function Cart({ cart, cartOpen, setCartOpen }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div
      className="cart-drawer"
      initial={{ x: "100%" }}
      animate={{ x: cartOpen ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
    >
      <button
        className="close-btn"
        onClick={() => setCartOpen(false)}
      >
        ✖
      </button>

      <h4>Your Cart</h4>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <h5>Total: ₹{total}</h5>
    </motion.div>
  );
}