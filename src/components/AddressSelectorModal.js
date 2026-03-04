import React from "react";
import "./AddressSelectorModal.css";

export default function AddressSelectorModal({
  addresses,
  onClose,
  onSelect
}) {

  return (
    <div className="address-modal-overlay">
      <div className="address-modal">

        <div className="modal-header">
          <h3>Select Delivery Address</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {addresses.length === 0 && (
            <p>No address saved</p>
          )}

          {addresses.map((addr, index) => (
            <div
              key={index}
              className="modal-address-card"
              onClick={() => onSelect(addr)}
            >
              <h4>
                {addr.type}
                {addr.isDefault && (
                  <span className="default-badge">
                    Default
                  </span>
                )}
              </h4>

              <p>{addr.line1}</p>
              <p>{addr.line2}</p>
              <p>{addr.city}, {addr.state}</p>
              <p>PIN: {addr.pincode}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}