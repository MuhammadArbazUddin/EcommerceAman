import React, { useState } from "react";
import {
  FaPhoneVolume,
  FaAppleAlt,
  FaCarrot,
  FaFish,
  FaChevronUp,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/pages", label: "Pages" },
    { path: "/vendors", label: "Vendors" },
    { path: "/contactus", label: "Contact Us" },
  ];

  const categories = [
    { label: "Groceries", icon: <FaCarrot className="mr-2" /> },
    { label: "Fruits", icon: <FaAppleAlt className="mr-2" /> },
    { label: "Seafood", icon: <FaFish className="mr-2" /> },
  ];

  return (
    <>
      <div className="sticky top-0 w-full flex items-center justify-between px-5 border bg-white z-50">
        <div className="flex items-center justify-center">
          <div
            className="flex items-center justify-center text-gray-700 pr-5 pl-5 p-4 border-x relative group hover:bg-customGreen hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CgMenuGridO className="text-2xl mr-2" />
            <ul className="border-none outline-none text-md  font-normal hide-default-ul-icon pr-2">
              <li>All Categories</li>
            </ul>
            {isHovered ? <FaChevronUp /> : <FaChevronDown />}

            {/* Dropdown content */}
            {isHovered && (
              <div
                className="absolute top-full left-0  w-48 bg-white shadow-lg border rounded-md z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 hover:bg-gray-100 text-black transition-colors duration-200 cursor-pointer"
                  >
                    {category.icon}
                    <div>
                      <p className="font-medium text-gray-800">
                        {category.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <ul className="flex gap-5 text-md text-gray-400 px-10">
            {navLinks.map((link) => (
              <li key={link.path} className="flex items-center font-medium">
                <Link
                  to={link.path}
                  className={`flex items-center ${
                    location.pathname === link.path ? "text-green-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="p-4 bg-green-600 text-white text-md flex items-center gap-2 outline-none border-none">
            <FaPhoneVolume className="text-white " size={20} />
            01- 234 567 890
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
