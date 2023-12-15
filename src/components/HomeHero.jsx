import React from "react";
import Wave from "react-wavify";

const Hero = () => {
  return (
    <div className="text-right bg-background">
      <div className=" flex flex-col items-center pt-64 max-w-3xl mx-auto px-10  mb-10">
        <div>
          <img
            src="images/web-image.png"
            alt="website name"
            style={{ width: "500px" }}
          />
          <p className="text-white pb-8">Coding Club NIT MEGHALAYA</p>
        </div>
        <p className="text-white text-center">
          "Cultivate ideas, spark creativity, and forge a collaborative space where members thrive in the world of coding and technology"</p>
      </div>

      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#033B60" />
            <stop offset="80%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </Wave>
      <div className="bg-background p-8"></div>
    </div>
  );
};

export default Hero;
