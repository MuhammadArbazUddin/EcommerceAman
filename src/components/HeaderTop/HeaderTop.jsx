import React, { useState, useEffect, useRef } from "react";
import { FaRegCircleUser, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setAccountDropdownOpen(false);
  };

  return (
    <div className="flex justify-between bg-customGreen p-[0.4rem] px-3">
      <div className="flex justify-between flex-wrap gap-8 w-full">
        <ul className="flex flex-wrap gap-4">
          <li className="border-small pr-4">
            <Link to="/seller-register">
              <a className="text-white text-sm hover:underline underline-offset-1">
                Become A Seller
              </a>
            </Link>
          </li>
          <li className="border-small pr-4">
            <a
              href="#about"
              className="text-white text-sm hover:underline underline-offset-1"
            >
              About us
            </a>
          </li>
          <li className="border-small pr-4">
            <a
              href="#free-delivery"
              className="text-white text-sm hover:underline underline-offset-1"
            >
              Free Delivery
            </a>
          </li>
          <li className="pr-4">
            <a
              href="#returns"
              className="text-white text-sm hover:underline underline-offset-1"
            >
              Returns Policy
            </a>
          </li>
        </ul>

        <ul className="flex items-center flex-wrap" ref={dropdownRef}>
          <li className="border-small relative">
            <a href="#" className="text-white flex items-center text-sm px-3">
              Eng
              <FaChevronDown size={10} className="ml-1" />
            </a>
          </li>

          <li className="border-small relative">
            <a href="#" className="text-white flex items-center text-sm px-3">
              USD
              <FaChevronDown size={10} className="ml-1" />
            </a>
          </li>
          <li className="relative">
            <button
              onClick={toggleAccountDropdown}
              className="flex items-center gap-1 text-white text-sm pl-3 focus:outline-none"
            >
              <FaRegCircleUser />
              My Account
              <FaChevronDown
                size={10}
                className="ml-1 transition-transform duration-300 transform"
                style={{
                  transform: accountDropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-[90] transition-all duration-300 transform ${
                accountDropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{ visibility: accountDropdownOpen ? "visible" : "hidden" }}
            >
              <Link
                to="/login"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-200  transition-colors duration-200 ease-in-out "
                onClick={handleLinkClick}
              >
                <span className="font-medium">Login</span>
              </Link>
              <Link
                to="/register"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-200 transition-colors duration-200 ease-in-out "
                onClick={handleLinkClick}
              >
                <span className="font-medium">Register</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
