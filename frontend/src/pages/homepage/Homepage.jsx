import { Hero228 } from "@/components/hero228";
import { Cta23 } from "@/components/cta23";
import React from "react";
import { Gallery23 } from "@/components/gallery23";
import { Gallery30 } from "@/components/gallery30";

const Homepage = () => {
  return (
    <>
      <Hero228 />
      {/* Recent Books/Stories */}
      <Gallery23 />
      {/* About Me */}
      {/* Testimonial from readers */}
      {/* Art Section */}
      <Gallery30 />
      {/* CTA */}
      <Cta23 />
    </>
  );
};

export default Homepage;
