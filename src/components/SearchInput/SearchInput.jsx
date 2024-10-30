import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <>
      <div className="flex items-center justify-between rounded-full bg-transparent border border-gray-300 px-3">
        <select className="text-gray-700 hide-default-select-icon border-none outline-none p-3 px-2 bg-transparent">
          <option>All Categories</option>
        </select>
        <FaChevronDown size={12} className="text-gray-400 " />

        <div className="flex items-center border-l-gray-200 ml-4 bg-transparent border-l-2">
          <input
            type="text"
            placeholder="Search for a product or brand"
            className="placeholder:text-gray-600 text-sm p-3 w-[250px] bg-transparent outline-none"
          />
          <span className="flex items-center justify-center p-2 rounded-full bg-customGreen">
            <FaSearch className="text-white" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
