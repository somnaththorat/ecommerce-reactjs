import React from "react";
import HeroSection from './HeroSection.js'
import Services from "./Services.js";
import Trusted from "./Trusted.js";
import FeaturedProduct from './FeaturedProduct.js'
const Home = () => {

  const data = {
    name: "ABC Store"
  }
  return (
    <>
      <HeroSection mydata={data} />
      <FeaturedProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
