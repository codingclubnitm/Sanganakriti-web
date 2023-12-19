import React, { useRef } from "react";
import GradientButton from "utils/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="bg-background py-6 px-8 flex items-center justify-between h-[7rem]">
      <img
        src="images/web-image.png"
        alt="website name"
        style={{ width: "150px" }}
      />
      <div className="pt-2 lg:pt-10">
       
        <nav ref={navRef} className="flex items-center">
          <GradientButton children="Home" getTo="/" />
          <GradientButton children="Teams" getTo="#" />
          <GradientButton children="Events" />
          <GradientButton children="Gallery" />
          <GradientButton children="Department" />
          <GradientButton children="Sign In" icon="images/logo512.png" />
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
