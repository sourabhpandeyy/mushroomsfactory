import React from "react";
import Hero from "../components/Hero/Hero";
import ProductPreview from "../components/ProductPreview/ProductPreview.js";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials.js";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPreview />
      <WhyChoose />
      <Stats />
      <Testimonials />
    </>
  );
}