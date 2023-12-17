import React from "react";
import "App.css";

const About = () => {
  return (
    <div className="bg-background h-[70vh]">
      <div className=" text-white md:flex justify-evenly items-center py-20 max-w-5xl mx-auto about">
        <header className="font-bold text-5xl about ">About Us</header>
        <main className="text-md md:max-w-md ">
          The Coding Club is a vibrant community of students with a shared
          passion for programming and technological innovation. It provides an
          energetic environment where students can enhance their coding
          abilities by collaborating on projects and participating in various
          engaging activities. The Coding Club organises various workshops,
          coding challenges, and collaborative projects, so that members have
          the opportunity to sharpen their skills, explore new technologies, and
          apply theoretical knowledge to real-world scenarios.
        </main>
      </div>
    </div>
  );
};

export default About;
