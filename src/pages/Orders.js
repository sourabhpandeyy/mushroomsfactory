import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "./Orders.css";

export default function Orders() {

  const [orders, setOrders] = useState([]);

  /* ================= LOAD ORDERS ================= */
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("orderHistory")) || [];

    setOrders(saved);
  }, []);

  /* ================= AUTO DELIVERY (DEMO) ================= */
 useEffect(() => {
  const saved =
    JSON.parse(localStorage.getItem("orderHistory")) || [];

  const updated = saved.map((order) => {
    if (
      order.status === "Pending" &&
      !order.autoProcessed
    ) {
      setTimeout(() => {
        const latest =
          JSON.parse(localStorage.getItem("orderHistory")) || [];

        const newData = latest.map((o) =>
          o.id === order.id
            ? { ...o, status: "Delivered" }
            : o
        );

        localStorage.setItem(
          "orderHistory",
          JSON.stringify(newData)
        );

        setOrders(newData);

      }, 10000);

      return { ...order, autoProcessed: true };
    }

    return order;
  });

  localStorage.setItem(
    "orderHistory",
    JSON.stringify(updated)
  );

}, []);
  /* ================= UPDATE STATUS ================= */
  const updateStatus = (id, newStatus) => {

    const updated = orders.map((order) =>
      order.id === id
        ? { ...order, status: newStatus }
        : order
    );

    setOrders(updated);

    localStorage.setItem(
      "orderHistory",
      JSON.stringify(updated)
    );
  };

  /* ================= CANCEL ORDER ================= */
  const cancelOrder = (id) => {
    updateStatus(id, "Cancelled");
  };

  /* ================= DOWNLOAD PDF ================= */
  const downloadInvoice = (order) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("MUSHROOMS FACTORY INVOICE", 20, 20);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 20, 40);
    doc.text(`Product: ${order.product}`, 20, 50);
    doc.text(`Quantity: ${order.quantity}`, 20, 60);
    doc.text(`Amount: ₹${order.amount}`, 20, 70);
    doc.text(`Status: ${order.status}`, 20, 80);
    doc.text(`Date: ${order.date}`, 20, 90);

    doc.text("Thank you for your purchase.", 20, 110);
    doc.text("Have A Good Day.", 20, 120);

    doc.save(`Invoice-${order.id}.pdf`);
  };

  return (
    <div className="orders-page">

      <div className="orders-header">
        <h1>My Orders</h1>
        <p>Track and manage your purchases.</p>
      </div>

      {orders.length === 0 ? (
        <div className="empty-state">
          <div className="floating-cart">🛒</div>
          <h3>No Orders Yet</h3>
          <p>Your order history will appear here.</p>
        </div>
      ) : (
        <div className="orders-list">

          {orders.map((order) => (
            <div key={order.id} className="order-card">

              <div className="order-top">
                <div>
                  <h3>{order.product}</h3>
                  <p>ID: {order.id}</p>
                </div>

                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-details">
                <p><strong>Qty:</strong> {order.quantity}</p>
                <p><strong>Total:</strong> ₹{order.amount}</p>
                <p><strong>Date:</strong> {order.date}</p>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div
                  className={`progress-fill ${
                    order.status === "Pending"
                      ? "pending"
                      : order.status === "Cancelled"
                      ? "cancelled"
                      : "delivered"
                  }`}
                ></div>
              </div>

              <div className="order-buttons">

                {order.status === "Pending" && (
                  <button
                    className="cancel-btn"
                    onClick={() => cancelOrder(order.id)}
                  >
                    Cancel
                  </button>
                )}

                <button
                  className="invoice-btn"
                  onClick={() => downloadInvoice(order)}
                >
                  Download Invoice
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}