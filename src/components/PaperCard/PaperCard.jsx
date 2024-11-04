import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const PaperCard = () => {
  const [price, setPrice] = useState(2); // Initial price value

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <div className="p-6 rounded-3xl flex flex-col items-center  text-center bg-[url('https://wowtheme7.com/tf/marketpro/assets/images/shape/box-shape3.png')] bg-cover bg-center relative">
        <img
          src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo2.png"
          alt="Nature Food Logo"
          className="w-20 h-20 mb-4"
        />
        <h2 className="text-xl font-bold mb-1 font-quick">Safeway</h2>
        <p className="text-gray-700 mb-2 font-quick font-semibold">
          New Street, 520, New York
        </p>
        <div className="bg-white text-gray-500 px-3 py-1 rounded-full mb-4 text-sm">
          Since 2009
        </div>
        <p className="text-gray-600 mb-6 font-quick font-semibold">
          It's easy and free to link or sign up for our loyalty program, and it
          only takes a few seconds.
        </p>
        <div className="flex space-x-3">
          <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <FaFacebook />
          </div>
          <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <FaTwitter />
          </div>
          <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <FaInstagram />
          </div>
          <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <FaLinkedin />
          </div>
        </div>
        <button className="bg-green-600 text-base text-white rounded-full px-6 py-4 w-full font-quick font-semibold mt-4">
          Contact Seller
        </button>
      </div>
    </>
  );
};

export default PaperCard;
