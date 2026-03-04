import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/favicon.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  /* ================= SCROLL SHRINK ================= */

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  /* ================= CLOSE DROPDOWN OUTSIDE ================= */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);

  }, []);

  /* ================= HANDLE NAV CLICK ================= */

  const handleNavClick = () => {
    setMobileOpen(false);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "shrink" : ""}`}>

      {/* ================= LOGO ================= */}

   <Link
  to="/"
  className="logo-container"
  onClick={handleNavClick}
>

  <img
    src={logo}
    alt="Mushrooms Factory"
    className="logo-img"
  />

  <span className="brand-name">
    MUSHROOMS FACTORY
  </span>

</Link>
      {/* ================= HAMBURGER ================= */}

      <div
        className={`hamburger ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* ================= NAV LINKS ================= */}

      <nav className={`nav-links ${mobileOpen ? "mobile-show" : ""}`}>

        <Link to="/" onClick={handleNavClick}>
          Home
        </Link>

        <Link to="/products" onClick={handleNavClick}>
          Shops
        </Link>

        <Link to="/learn" onClick={handleNavClick}>
          Learn
        </Link>


        {/* ================= DROPDOWN ================= */}

        <div
          className="dropdown"
          ref={dropdownRef}
        >

          <span
            className="dropdown-toggle"
            onClick={() => setOpen((prev) => !prev)}
          >
            More
          </span>

          <div
            className={`dropdown-menu ${open ? "show" : ""}`}
          >

            <Link
              to="/addresses"
              onClick={handleNavClick}
            >
              My Addresses
            </Link>

            <Link
              to="/orders"
              onClick={handleNavClick}
            >
              Order History
            </Link>

            <Link
              to="/support"
              onClick={handleNavClick}
            >
              Help & Support
            </Link>

            <Link
              to="/contact"
              onClick={handleNavClick}
            >
              Contact Us
            </Link>

          </div>

        </div>


        {/* ================= WHATSAPP ================= */}

        <a
          href="https://wa.me/919956949920"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
          onClick={handleNavClick}
        >
          Order on WhatsApp
        </a>

      </nav>

    </header>
  );
}