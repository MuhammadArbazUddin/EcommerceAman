import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import { IoStorefrontSharp } from "react-icons/io5";

const ProductCard = () => {
  return (
    <div className="group h-full p-6 border border-gray-200 hover:border-customGreen rounded-lg transition duration-200">
      <a href="/" className="flex justify-center mb-4">
        <img
          src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png"
          alt="Product"
          className="w-32 h-32 object-contain transition-transform duration-200 transform  group-hover:scale-110" // Add scaling on hover
        />
      </a>
      <div className="flex flex-col h-full">
        <h6 className="title text-lg font-semibold mb-2 font-quick">
          {" "}
          {/* Apply font-quick */}
          <a
            href="/"
            className="link font-quick font-semibold line-clamp-2 hover:text-customGreen"
          >
            C-500 Antioxidant Protect Dietary Supplement
          </a>
        </h6>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-customGreen text-md flex items-center">
            <IoStorefrontSharp />
          </span>
          <span className="text-gray-500 text-xs font-semibold font-quick">
            By Lucky Supermarket
          </span>
        </div>
        <div className="mt-3">
          <div className="flex justify-between mb-2">
            <span className="text-heading text-md font-semibold font-quick">
              $14.99 <span className="text-gray-500 font-normal">/Qty</span>
            </span>
            <span className="text-gray-400 text-md font-semibold line-through font-quick">
              $28.99
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-gray-600 font-quick">
              {" "}
              {/* Apply font-quick */}
              4.8
            </span>
            <span className="text-lg font-bold flex items-center text-yellow-500 font-quick">
              <BsFillStarFill />
            </span>
            <span className="text-xs font-bold text-gray-600 font-quick">
              {" "}
              {/* Apply font-quick */}
              (17k)
            </span>
          </div>
          <a
            href="/"
            className="bg-[#E8F9E9] font-semibold text-customGreen hover:bg-customGreen hover:text-white py-3 px-6 rounded-full flex items-center gap-2 w-full justify-center transition duration-200 font-quick" // Apply font-quick
          >
            Add To Cart <FiShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
