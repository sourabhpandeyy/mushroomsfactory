import React, { useState, useEffect } from "react";
import "./Products.css";

import buttonImg from "../assets/mushrooms/button.jpg";
import oysterImg from "../assets/mushrooms/oyster.jpg";
import shiitakeImg from "../assets/mushrooms/shiitake.jpg";
import milkyImg from "../assets/mushrooms/milky.jpg";
import lionsmaneImg from "../assets/mushrooms/lionsmane.jpg";

export default function Products() {

  const [selectedWeight, setSelectedWeight] = useState({});
  const [quantities, setQuantities] = useState({});
  const [addresses, setAddresses] = useState([]);

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userAddresses")) || [];
    setAddresses(saved);
  }, []);

  const products = [
    { id: 1, name: "Button Mushroom", basePrice: 120, stock: true, image: buttonImg },
    { id: 2, name: "Oyster Mushroom", basePrice: 150, stock: true, image: oysterImg },
    { id: 3, name: "Shiitake Mushroom", basePrice: 220, stock: false, image: shiitakeImg },
    { id: 4, name: "Milky Mushroom", basePrice: 180, stock: true, image: milkyImg },
    { id: 5, name: "Lion’s Mane Mushroom", basePrice: 280, stock: true, image: lionsmaneImg }
  ];

  const weights = [
    { label: "250g", multiplier: 1 },
    { label: "500g", multiplier: 2 },
    { label: "1kg", multiplier: 4 }
  ];

  const increase = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowAddressModal(true);
  };

  const confirmOrder = () => {
    if (selectedAddressIndex === null) {
      alert("Select address first");
      return;
    }

    const address = addresses[selectedAddressIndex];
    const product = selectedProduct;

    const qty = quantities[product.id] || 1;
    const weight = selectedWeight[product.id] || "250g";

    const weightObj = weights.find(w => w.label === weight);
    const total = product.basePrice * weightObj.multiplier * qty;

    const message = `
🍄 MUSHROOM ORDER

Product: ${product.name}
Weight: ${weight}
Qty: ${qty}
Total: ₹${total}

Address:
${address.line1}
${address.line2 || ""}
${address.city}, ${address.state} - ${address.pincode}
Mobile: ${address.mobile}
`;

    window.open(
      `https://wa.me/919956949920?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowAddressModal(false);
  };

  return (
    <div className="products-page">

      <h2 className="products-heading">
        Premium Organic Mushrooms Collection
      </h2>

      <div className="products-grid">
        {products.map(product => {

          const qty = quantities[product.id] || 1;
          const weight = selectedWeight[product.id] || "250g";
          const weightObj = weights.find(w => w.label === weight);
          const price = product.basePrice * weightObj.multiplier;

          return (
            <div key={product.id} className="product-card">

              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="price">₹{price} ({weight})</p>

                <select
                  className="weight-select"
                  value={weight}
                  onChange={(e) =>
                    setSelectedWeight(prev => ({
                      ...prev,
                      [product.id]: e.target.value
                    }))
                  }
                >
                  {weights.map(w => (
                    <option key={w.label} value={w.label}>
                      {w.label}
                    </option>
                  ))}
                </select>

                <div className="qty-controls">
                  <button onClick={() => decrease(product.id)}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => increase(product.id)}>+</button>
                </div>

                <button
                  className="order-btn"
                  disabled={!product.stock}
                  onClick={() => handleOrderClick(product)}
                >
                  {product.stock ? "Order on WhatsApp" : "Out of Stock"}
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {showAddressModal && (
        <div className="address-modal-overlay">
          <div className="address-modal">

            <div className="modal-header">
              <h3>Select Delivery Address</h3>
              <button
                className="modal-close"
                onClick={() => setShowAddressModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="address-list">

              {addresses.length === 0 ? (
                <div className="no-address-box">
                  No saved address found.
                </div>
              ) : (
                addresses.map((addr, i) => (
                  <div
                    key={i}
                    className={`address-option ${
                      selectedAddressIndex === i ? "selected" : ""
                    }`}
                    onClick={() => setSelectedAddressIndex(i)}
                  >
                    <p><strong>{addr.fullName}</strong></p>
                    <p>{addr.line1}</p>
                    {addr.line2 && <p>{addr.line2}</p>}
                    <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                    <p>📞 {addr.mobile}</p>
                  </div>
                ))
              )}

            </div>

            <button
              className="add-address-btn"
              onClick={() => {
                setShowAddressModal(false);
                window.location.href = "/addresses";
              }}
            >
              + Add New Address
            </button>

            <button
              className="confirm-address-btn"
              onClick={confirmOrder}
              disabled={addresses.length === 0}
            >
              Confirm & Continue
            </button>

            <button
              className="close-modal-btn"
              onClick={() => setShowAddressModal(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}