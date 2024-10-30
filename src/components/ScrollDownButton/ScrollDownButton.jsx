import React from "react";
import { FiChevronsDown } from "react-icons/fi";

const ScrollDownButton = () => {
  return (
    <a
      href="#featureSection"
      className=" w-20 h-20 text-center flex items-center justify-center bg-[#4B9E60] rounded-full border-4 border-white absolute left-1/2 mb-2 transform -translate-x-1/2 bottom-0 hover:bg-customGreen"
    >
      <span className="scroll-down text-white icon text-4xl mt-2">
        <FiChevronsDown />
      </span>
    </a>
  );
};

export default ScrollDownButton;
