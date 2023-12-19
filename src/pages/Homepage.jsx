import React from "react";
import Navbar from "components/Navbar";
import Hero from "components/HomeHero";
import About from "components/About";
import Carousel from "components/Events";
import Departments from "components/Departments";
import Fame from "components/HallofFame";

const Homepage = () => {
  return (
    <>
    

    
      <Navbar />
      <Hero />
      <About />
      <Fame />
      <Departments />
      <Carousel />
    </>
  );
};

export default Homepage;
