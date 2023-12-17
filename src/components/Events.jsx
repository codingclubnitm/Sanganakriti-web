import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = [
    {
      title: "Web Development Bootcamp",
      img: `/images/bootcamp.png`,
      p: `It is a one week bootcamp where we will teach you about how to
          start your dev journey. `,
      p2: `Join our one-week web dev bootcamp for a turbo-charged dive into HTML, CSS, and JavaScript! Get hands-on with projects, epic workshops, and a whirlwind of learning. Ready to create digital magic? Let's roll! ✨🚀
          `,
      date: `Date- 20/12/2023`,
    },
    {
      title: "APP Development Bootcamp",
      img: `https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D`,
      p: `It is a one week bootcamp where we will teach you about how to
          start your dev journey.
          Ready to create digital magic? Let's roll! ✨🚀 `,
      p2: `Join our one-week web dev bootcamp for a turbo-charged dive into HTML, CSS, and JavaScript! Get hands-on with projects, epic workshops, and a whirlwind of learning. Ready to create digital magic? Let's roll! ✨🚀
          `,
      date: `Date- 20/12/2023`,
    },
    {
      title: "ML Development Bootcamp",
      img: `https://images.unsplash.com/photo-1547234936-74a4b1ee7f42?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      p: `It is a one week bootcamp where we will teach you about how to
          start your dev journey.
          Ready to create digital magic? Let's roll! ✨🚀 `,
      p2: `Join our one-week web dev bootcamp for a turbo-charged dive into HTML, CSS, and JavaScript! Get hands-on with projects, epic workshops, and a whirlwind of learning. Ready to create digital magic? Let's roll! ✨🚀
          `,
      date: `Date- 20/12/2023`,
    },
    {
      title: "IOS Development Bootcamp",
      img: `https://images.unsplash.com/photo-1486314030120-d5ab85fe58cd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      p: `It is a one week bootcamp where we will teach you about how to
          start your dev journey.
          Ready to create digital magic? Let's roll! ✨🚀 `,
      p2: `Join our one-week web dev bootcamp for a turbo-charged dive into HTML, CSS, and JavaScript! Get hands-on with projects, epic workshops, and a whirlwind of learning. Ready to create digital magic? Let's roll! ✨🚀
          `,
      date: `Date- 20/12/2023`,
    },
  ];

  const handlePrevClick = () => {
    setCurrentPage(currentPage === 0 ? data.length - 1 : currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage === data.length - 1 ? 0 : currentPage + 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentPage(slideIndex);
  };

  return (
    <div
      className="flex items-center justify-between h-full lg:p-14 p-5
    "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={handlePrevClick}
        className="bg-[#44464c] text-white sm:py-3 sm:px-4 rounded-full sm:m-8 py-1 px-2"
      >
        <FontAwesomeIcon icon={faArrowLeft} fontSize={15} />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-lg shadow-lg "
      >
        {/* <div className=" h-screen sm:max-w-5xl  flex flex-col items-center p-10 bg-[#727272] bg-opacity-70 rounded-[3rem] m-10 duration-1000 backdrop-blur-sm bg-cover bg-center">
          <h1 className="font-extrabold text-xl sm:text-2xl tracking-wider font-berkshire">{data[currentPage].title}</h1>
          <div className="flex flex-col sm:flex-row items-center my-12 mx-4 gap-24">
            <img src={data[currentPage].img} alt="No Image Found" className="h-52 w-52"/>
            <div className="flex flex-col gap-5">
              <p className="font-berkshire text-sm sm:text-lg tracking-widest text-white">{data[currentPage].p}</p>
              <p className="font-berkshire text-sm sm:text-lg tracking-widest text-white">{data[currentPage].p2}</p>
              <p className="font-berkshire text-sm sm:text-lg tracking-widest text-white">{data[currentPage].date}</p>
            </div>
          </div>
        </div> */}
        <div className="w-full sm:max-w-5xl flex flex-col items-center p-6 sm:p-10 bg-gray-600 bg-opacity-70 rounded-[3rem] m-5 sm:m-10 duration-1000 backdrop-blur-sm">
  <h1 className="font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-berkshire text-center">
    {data[currentPage].title}
  </h1>
  <div className="flex flex-col lg:flex-row items-center my-6 sm:my-12 mx-2 sm:mx-4 md:mx-8 lg:mx-12 gap-4 sm:gap-8 md:gap-12">
    <img
      src={data[currentPage].img}
      alt="No Image Found"
      className="h-24 sm:h-36 md:h-40 lg:h-52 w-24 sm:w-36 md:w-40 lg:w-52 xl:w-64 object-cover rounded"
    />
    <div className="flex flex-col gap-2 sm:gap-3">
      <p className="font-berkshire text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-white text-center sm:text-left">
        {data[currentPage].p}
      </p>
      <p className="font-berkshire text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-white text-center sm:text-left">
        {data[currentPage].p2}
      </p>
      <p className="font-berkshire text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-white text-center sm:text-left">
        {data[currentPage].date}
      </p>
    </div>
  </div>
</div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 mt-8">
          {data.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full mx-1 ${
                index === currentPage ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </motion.div>

      <button
        onClick={handleNextClick}
        className="bg-[#44464c] text-white sm:py-3 sm:px-4 rounded-full py-1 px-2 ml-10 sm:m-20"
      >
        <FontAwesomeIcon icon={faArrowRight} fontSize={15} />
      </button>
    </div>
  );
};

export default Carousel;
