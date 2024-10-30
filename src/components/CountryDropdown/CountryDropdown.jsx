import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const CountryDropdown = () => {
  return (
    <>
      <div className="flex relative items-center bg-white border border-gray-200 rounded-full  px-4 py-2 space-x-2 w-[180px]">
        <span className="text-gray-900 ">
          <IoLocationOutline size={20} />
        </span>
        <div className="flex items-center flex-col">
          <span className="text-gray-600 text-xs">Your Location</span>
          <select className="border-none bg-transparent text-md leading-4 font-bold focus:outline-none hide-default-select-icon ">
            <option value="alabama">Alabama</option>
            <option value="alaska">Alaska</option>
            <option value="arizona">Arizona</option>
            <option value="delaware">Delaware</option>
            <option value="florida">Florida</option>
          </select>
          <div className="absolute right-4 top-4 text-gray-400">
            <FaChevronDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDropdown;
