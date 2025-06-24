import React from "react";
import Hero from "../../components/home/Hero";
import Feature from "@/components/home/Feature";
import ArtistCategories from "../../components/artist/ArtistCategories";
import Cta from "../../components/home/Cta";
import Footer from "../../components/home/Footer";

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
