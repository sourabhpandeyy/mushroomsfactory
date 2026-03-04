import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Addresses from "./pages/Addresses";
import Orders from "./pages/Orders";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn";
import Explore from "./pages/Explore";
import AdminOrders from "./pages/AdminOrders";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
     <div className="app-layout">
      <Navbar />
       <main className="page-content">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/admin" element={<AdminOrders />} />
      </Routes>
</main>
</div>
      <Footer />
    </>
  );
}

export default App;