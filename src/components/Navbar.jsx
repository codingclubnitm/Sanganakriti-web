import React from "react";
import GradientButton from "utils/Button";

const Navbar = () => {
  return (
    <div className="bg-background py-3 px-5 flex items-center justify-between">
      
        <img
          src="images/web-image.png"
          alt="website name"
          style={{ width: "150px" }}
        />
      
      <div className="flex ">
        <GradientButton children="Home" getTo="about" />
        <GradientButton children="Teams" getTo="about"/>
        <GradientButton children="Events" />
        <GradientButton children="Gallery" />
        <GradientButton children="Department" />
        <GradientButton children="Sign In" icon="images/logo512.png" />
      </div>
    </div>
  );
};

export default Navbar;
