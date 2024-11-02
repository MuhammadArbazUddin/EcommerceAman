import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/modalSlice";
const HeaderTop = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between bg-customGreen p-[0.4rem] px-3">
      <div className="flex justify-between flex-wrap gap-8 w-full">
        <ul className="flex flex-wrap gap-4">
          <li className="border-small pr-4">
            <a
              href="#shipping"
              className="text-white text-sm hover:underline underline-offset-1"
            >
              Become A Seller
            </a>
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

        <ul className="flex items-center flex-wrap">
          <li className="border-small relative">
            <a href="#" className="text-white flex items-center text-sm px-3">
              Help Center
              <FaChevronDown size={10} className="ml-1" />
            </a>
          </li>

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
              onClick={() => dispatch(openModal())}
              className="flex items-center gap-1 text-white text-sm px-3"
            >
              <FaRegCircleUser />
              My Account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
