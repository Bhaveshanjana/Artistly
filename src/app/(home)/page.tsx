import React from "react";
import Hero from "../components/Hero";
import Feature from "@/components/ui/Feature";
import ArtistCategories from "../components/ArtistCategories";

const page = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      {/* Featured Section */}
      <Feature />
      {/* ArtistCategories Section */}
      <ArtistCategories />
    </div>
  );
};

export default page;
