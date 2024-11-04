import React from "react";
import { CountryDropdown, SearchInput } from "../components";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { AmanAnim } from "../../assets/index";

const Header = () => {
  return (
    <header className="bg-gray-100 border-b">
      <div className="p-2 px-3 mx-auto ">
        <nav className="flex justify-between items-center py-4">
          <div className="logo">
            <a href="/" className="flex items-center">
              <img src={AmanAnim} alt="logo" className="h-14" />
              <h1 className="text-2xl font-medium tracking-tighter text-[#8cc63e]">
                Aman
                <span className="text-[#459246] font-medium tracking-tighter">
                  Stop
                </span>{" "}
              </h1>
            </a>
          </div>

          <form action="#" className="flex items-center space-x-4">
            <SearchInput />
            <CountryDropdown />
          </form>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="wishlist.html" className="flex items-center space-x-2">
              <span className="text-2xl  text-gray-700 relative">
                <FaRegHeart size={22} />
                <span className="absolute top-[-5px] right-[-7px] w-4 h-4 flex items-center justify-center rounded-full bg-customGreen text-white text-xs">
                  2
                </span>
              </span>
              <span className="text-md text-gray-500 hidden lg:block">
                Wishlist
              </span>
            </a>
            <a href="/" className="flex items-center space-x-2 ">
              <span className="text-2xl text-gray-700 relative">
                <IoCartOutline />
                <span className="absolute top-[-5px] right-[-7px] w-4 h-4 flex items-center justify-center rounded-full bg-customGreen text-white text-xs">
                  2
                </span>
              </span>
              <span className="text-md text-gray-500 hidden lg:block">
                Cart
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
