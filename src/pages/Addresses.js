import React, { useState, useEffect } from "react";
import "./Addresses.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Addresses() {

  const emptyForm = {
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    countryCode: "+91",
    mobile: "",
    isPrimary: false
  };

  const [form, setForm] = useState(emptyForm);
  const [addresses, setAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  /* ================= COUNTRY LIST ================= */

  const countries = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Italy", code: "+39" },
    { name: "Spain", code: "+34" },
    { name: "Netherlands", code: "+31" },
    { name: "Brazil", code: "+55" },
    { name: "Japan", code: "+81" },
    { name: "China", code: "+86" },
    { name: "South Korea", code: "+82" },
    { name: "Singapore", code: "+65" },
    { name: "UAE", code: "+971" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "South Africa", code: "+27" },
    { name: "Mexico", code: "+52" },
    { name: "Russia", code: "+7" }
  ];

  /* ================= LOAD ================= */

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("userAddresses")) || [];

    if (saved.length > 0 && !saved.some(a => a.isPrimary)) {
      saved[0].isPrimary = true;
      localStorage.setItem("userAddresses", JSON.stringify(saved));
    }

    setAddresses(saved);

  }, []);

  /* ================= INPUT ================= */

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

  };

  /* ================= COUNTRY CHANGE ================= */

  const handleCountryChange = (e) => {

    const selected = countries.find(
      c => c.name === e.target.value
    );

    if (!selected) return;

    setForm(prev => ({
      ...prev,
      country: selected.name,
      countryCode: selected.code
    }));

  };

  /* ================= SAVE ================= */

  const saveAddress = () => {

    if (!form.line1 || !form.city || !form.mobile) {
      alert("Please fill required fields");
      return;
    }

    if (form.mobile.length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    if (editingIndex === null && addresses.length >= 10) {
      alert("Maximum 10 addresses allowed");
      return;
    }

    let updated = [...addresses];

    if (form.isPrimary) {
      updated = updated.map(a => ({
        ...a,
        isPrimary: false
      }));
    }

    const finalAddress = {
      ...form,
      mobile: form.mobile
    };

    if (editingIndex !== null) {
      updated[editingIndex] = finalAddress;
    } else {

      if (updated.length === 0) {
        finalAddress.isPrimary = true;
      }

      updated.push(finalAddress);
    }

    setAddresses(updated);

    localStorage.setItem(
      "userAddresses",
      JSON.stringify(updated)
    );

    setForm(emptyForm);
    setEditingIndex(null);
    setShowForm(false);

  };

  /* ================= EDIT ================= */

  const handleEdit = (index) => {

    const address = addresses[index];

    let mobileNumber = address.mobile;
    let code = "+91";

    if (mobileNumber && mobileNumber.includes(" ")) {
      const parts = mobileNumber.split(" ");
      code = parts[0];
      mobileNumber = parts[1];
    }

    setForm({
      ...address,
      countryCode: code,
      mobile: mobileNumber
    });

    setEditingIndex(index);
    setShowForm(true);

  };

  /* ================= DELETE ================= */

  const handleDelete = (index) => {

    const confirmDelete =
      window.confirm("Delete this address?");

    if (!confirmDelete) return;

    const updated =
      addresses.filter((_, i) => i !== index);

    if (updated.length > 0 && !updated.some(a => a.isPrimary)) {
      updated[0].isPrimary = true;
    }

    setAddresses(updated);

    localStorage.setItem(
      "userAddresses",
      JSON.stringify(updated)
    );

  };

  /* ================= SET PRIMARY ================= */

  const setPrimary = (index) => {

    const updated = addresses.map((addr, i) => ({
      ...addr,
      isPrimary: i === index
    }));

    setAddresses(updated);

    localStorage.setItem(
      "userAddresses",
      JSON.stringify(updated)
    );

  };

  return (
    <div className="address-page">

      <div className="address-container">

        <h2>Manage Delivery Address</h2>

        <button
          className="add-new-btn"
          onClick={() => {
            setForm(emptyForm);
            setEditingIndex(null);
            setShowForm(true);
          }}
        >
          + Add New Address
        </button>

        <div className={`form-wrapper ${showForm ? "open" : ""}`}>

          <input
            name="line1"
            placeholder="House No / Flat *"
            value={form.line1}
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City *"
            value={form.city}
            onChange={handleChange}
          />

          <input
            name="state"
            placeholder="State *"
            value={form.state}
            onChange={handleChange}
          />

          <select
            name="country"
            className="country-dropdown"
            value={form.country}
            onChange={handleCountryChange}
          >
            {countries.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            name="pincode"
            placeholder="PIN Code *"
            value={form.pincode}
            onChange={handleChange}
          />

          {/* ===== MOBILE BLOCK ===== */}

          <PhoneInput
            country={"in"}
            value={form.mobile}
            onChange={(phone) =>
              setForm(prev => ({
                ...prev,
                mobile: phone
              }))
            }
            inputProps={{
              name: "mobile",
              required: true
            }}
            inputStyle={{
              width: "100%",
              height: "52px",
              borderRadius: "14px",
              border: "1.5px solid #e5e7eb"
            }}
            buttonStyle={{
              borderRadius: "14px 0 0 14px"
            }}
          />

          {/* ===== PRIMARY TOGGLE ===== */}

          <div className="primary-wrapper">

            <label className="primary-label">

              <span>Set as Default Address</span>

              <input
                type="checkbox"
                name="isPrimary"
                checked={form.isPrimary}
                onChange={handleChange}
                className="toggle-input"
              />

              <span className="toggle-slider"></span>

            </label>

          </div>

          <button
            className="save-btn"
            onClick={saveAddress}
          >
            {editingIndex !== null
              ? "Update Address"
              : "Save Address"}
          </button>

          <button
            className="clear-btn"
            onClick={() => setForm(emptyForm)}
          >
            Clear All Fields
          </button>

        </div>

        {/* ============ SAVED SECTION ============ */}

        <div className="saved-section">

          {addresses.map((addr, index) => (

            <div
              key={index}
              className={`saved-card ${
                addr.isPrimary ? "primary" : ""
              }`}
            >

              {addr.isPrimary && (
                <span className="primary-badge">
                  Primary
                </span>
              )}

              <div className="address-details">

                <p><strong>{addr.line1}</strong></p>

                {addr.line2 && <p>{addr.line2}</p>}

                <p>
                  {addr.city}, {addr.state}, {addr.country} - {addr.pincode}
                </p>

                <p>📞 {addr.mobile}</p>

              </div>

              <div className="card-actions">

                <button onClick={() => setPrimary(index)}>
                  Make Primary
                </button>

                <button onClick={() => handleEdit(index)}>
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}