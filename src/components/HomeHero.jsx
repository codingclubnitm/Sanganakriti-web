import React from "react";
import Wave from "react-wavify";

const Hero = () => {
  return (
    <div className="text-right bg-background h-[95vh]">
      <div className=" flex flex-col items-center pt-36 max-w-3xl mx-auto px-10  mb-10">
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
        className="wave"
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex", bottom:0 }}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.15,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            {/* <stop offset="5%" stopColor="#0f76ba" /> */}
            <stop offset="30%" stopColor="#033B60" />
            <stop offset="80%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};

export default Hero;
