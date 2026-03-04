import React, { useEffect, useState } from "react";
import "./AdminOrders.css";

export default function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(saved);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = orders.map(order =>
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

  return (
    <div className="admin-page">

      <h1>Admin Dashboard</h1>

      <div className="admin-orders">

        {orders.map(order => (
          <div key={order.id} className="admin-card">

            <div>
              <h3>{order.product}</h3>
              <p>ID: {order.id}</p>
              <p>Amount: ₹{order.amount}</p>
            </div>

            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(order.id, e.target.value)
              }
            >
              <option>Pending</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>

          </div>
        ))}

      </div>

    </div>
  );
}