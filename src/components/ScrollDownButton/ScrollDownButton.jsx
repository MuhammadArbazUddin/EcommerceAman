import React from "react";
import { FiChevronsDown } from "react-icons/fi";
import { AmanAnim } from "../../assets";

const ScrollDownButton = () => {
  return (
    <a
      href="#featureSection"
      className=" w-16 h-20 text-center flex items-center justify-center bg-[#D3EBC0] rounded-full border-2 border-[#4B9E60] absolute left-1/2 mb-2 transform -translate-x-1/2 bottom-0 hover:bg-green-500 hover:bg-opacity-10 transition-all duration-300 ease-in-out"
    >
      <span className="scroll-down text-white icon text-4xl mt-2">
        {/* <FiChevronsDown /> */}
        <img src={AmanAnim} alt="img" />
      </span>
    </a>
  );
};

export default ScrollDownButton;
