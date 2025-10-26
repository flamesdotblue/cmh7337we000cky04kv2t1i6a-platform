import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import StoryLookbook from "./components/StoryLookbook";
import PricingTestimonialsFooter from "./components/PricingTestimonialsFooter";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-['Inter','system-ui','sans-serif']">
      <Hero />
      <FeaturedProducts />
      <StoryLookbook />
      <PricingTestimonialsFooter />
    </div>
  );
}

export default App;
