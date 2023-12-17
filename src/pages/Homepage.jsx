import React from "react";
import Navbar from "components/Navbar";
import Hero from "components/HomeHero";
import Fame from "components/HallofFame";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Fame />
    </>
  );
};

export default Homepage;
