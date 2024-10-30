import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 w-full flex items-center justify-between px-5 border border-gray-300 bg-white z-50 ">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center pl-1 pr-5 border-r-2">
            <CgMenuGridO className="text-2xl mr-2" />
            <select className="border-none outline-none text-md font-normal hide-default-select-icon pr-2">
              <option>All Categories</option>
            </select>
            <FaChevronDown />
          </div>
          <ul className="flex gap-5 text-md text-gray-400 px-10">
            <li className="flex items-center font-medium text-green-600">
              Home <FaChevronDown className="text-sm ml-2" />
            </li>
            <li className="flex items-center font-medium">
              Shop <FaChevronDown className="text-sm ml-2" />
            </li>
            <li className="flex items-center font-medium">
              Pages <FaChevronDown className="text-sm ml-2" />
            </li>
            <li className="flex items-center font-medium">
              Vendors <FaChevronDown className="text-sm ml-2" />
            </li>
            <li className="flex items-center font-medium">
              Blog <FaChevronDown className="text-sm ml-2" />
            </li>
            <li className="flex items-center font-medium">
              Contact Us <FaChevronDown className="text-sm ml-2" />
            </li>
          </ul>
        </div>
        <div>
          <button className="p-4 bg-green-600 text-white text-md flex items-center gap-5 outline-none border-none">
            <FaPhoneVolume className="text-white" />
            01- 234 567 890
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
