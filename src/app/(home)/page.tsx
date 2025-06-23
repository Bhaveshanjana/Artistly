import React from "react";
import Hero from "../components/Hero";
import Feature from "@/components/ui/Feature";
import ArtistCategories from "../components/ArtistCategories";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Featured Section */}
      <Feature />

      {/* ArtistCategories Section */}
      <ArtistCategories />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
