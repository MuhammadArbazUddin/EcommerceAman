import React, { useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { ScrollDownButton } from "../components";

const slides = [
  {
    id: 1,
    title: "Daily Grocery Order and Get Express Delivery",
    image:
      "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/banner-img3.png",
  },
  {
    id: 2,
    title: "Fresh Produce Delivered to Your Doorstep",
    image:
      "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/banner-img1.png", // Change this to a different image if needed
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative p-14 pb-24 my-10 mx-3 rounded-2xl overflow-hidden">
      <img
        src="https://wowtheme7.com/tf/marketpro/assets/images/bg/banner-bg2.png"
        alt="hero"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="flex items-center justify-between px-5 py-10 relative z-10">
        <div className="w-8/12">
          {" "}
          {/* Adjusted width to 60% */}
          <h1 className="text-6xl leading-tight font-bold text-customBlue font-quick">
            {slides[currentSlide].title}
          </h1>
          <div className="mt-5">
            <button className="flex items-center mt-12 px-6 py-2 bg-[#4B9E60] text-white rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out">
              Explore Shop
              <IoCartOutline size={22} className="ml-2" />
            </button>
          </div>
        </div>
        <div className=" flex justify-end">
          {" "}
          {/* Adjusted width to 40% */}
          <img src={slides[currentSlide].image} alt="Grocery" width={400} />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-white p-3 text-black text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
        >
          <MdOutlineNavigateBefore />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="bg-white p-3 text-black text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
      <ScrollDownButton />
    </div>
  );
};

export default Hero;
