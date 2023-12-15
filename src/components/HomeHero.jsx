import React from "react";
import Wave from "react-wavify";

const Hero = () => {
  return (
    <div className="text-right bg-background">
      <div className=" flex flex-col items-center pt-40 mx-auto mb-10">
        <img
          src="images/web-image.png"
          alt="website name"
          style={{ width: "500px" }}
        />
        <p className="text-white pb-8">Coding Club NIT MEGHALAYA</p>
        <p className="text-white">
          "Cultivate ideas, spark creativity, and forge a collaborative space
          where members thrive
        </p>

        <p className="text-white"> in the world of coding and technology"</p>
      </div>

      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.2,
          points: 7,
        }}
      >
      
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#033B60" />
            <stop offset="80%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </Wave>
      <div className="bg-background p-5">

      </div>
    </div>
  );
};

export default Hero;
