import React from "react";
import Hero from "../components/Hero";
import Feature from "@/components/ui/Feature";

const page = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      {/* Featured Section */}
      <Feature/>
    </div>
  );
};

export default page;
