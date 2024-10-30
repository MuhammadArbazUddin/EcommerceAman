import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="p-4 mx-auto font-quick footer-background py-24 ">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="flex flex-col items-start md:flex-2   mb-4 md:mb-0">
            <img
              src="https://wowtheme7.com/tf/marketpro/assets/images/logo/logo.png"
              alt="Logo"
              className="h-10 mb-3"
            />
            <p className="text-md mb-2 py-4 text-gray-500 font-quick font-semibold">
              We're Grocery Shop, an innovative team of food suppliers.
            </p>
            <div className="flex items-center text-md mb-4 ">
              <FaMapMarkerAlt
                size={30}
                className="mr-2 p-2 text-white bg-customGreen rounded-full "
              />
              <span className="text-gray-800 px-2 text-base font-quick font-semibold">
                789 Inner Lane, Biyes park, CA, USA
              </span>
            </div>
            <div className="flex items-center text-sm mb-4">
              <FaPhoneAlt
                size={30}
                className="mr-2 p-2 text-white bg-customGreen rounded-full"
              />
              <span className="text-gray-800 text-base px-2 font-quick font-semibold">
                +00 123 456 789
              </span>
            </div>
            <div className="flex items-center text-sm mb-2">
              <FaEnvelope
                size={30}
                className="mr-2 p-2 text-white bg-customGreen rounded-full"
              />
              <span className="text-gray-800 text-base px-2 font-quick font-semibold">
                support24@marketpro.com
              </span>
            </div>
            <div className="mt-16">
              <h2 className="font-quick font-semibold text-[#121535] text-[21px]">
                Shop on The Go
              </h2>
              <p className="text-base mt-3 mb-6 text-gray-500 font-quick font-semibold">
                Marketpro App is available. Get it now
              </p>
              <div className="flex gap-2 mt-2">
                <img
                  src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/store-img1.png"
                  alt="App Store"
                  className="h-10"
                />
                <img
                  src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/store-img2.png"
                  alt="Google Play"
                  className="h-10"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-8 ">
              <div className=" bg-[#cdf2de] p-3 text-customGreen text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer">
                <FaFacebook />
              </div>
              <div className=" bg-[#cdf2de] p-3 text-customGreen text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer">
                <FaTwitter />
              </div>
              <div className=" bg-[#cdf2de] p-3 text-customGreen text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer">
                <FaInstagram />
              </div>
              <div className=" bg-[#cdf2de] p-3 text-customGreen text-xl rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
          </div>

          {/* Columns 2-5 */}
          <div className="flex flex-wrap md:flex-1 ">
            <div className="p-4">
              <h2 className="font-bold text-xl text-[#121535] font-quick">
                Information
              </h2>
              <ul className="mt-2 text-base leading-9 text-gray-500">
                <li className="font-quick font-semibold">Become a Vendor</li>
                <li className="font-quick font-semibold">Affiliate Program</li>
                <li className="font-quick font-semibold">Privacy Policy</li>
                <li className="font-quick font-semibold">Our Suppliers</li>
                <li className="font-quick font-semibold">Extended Plan</li>
                <li className="font-quick font-semibold">Community</li>
              </ul>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-xl text-[#121535] font-quick">
                Customer Support
              </h2>
              <ul className="mt-2 text-base leading-9 text-gray-500">
                <li className="font-quick font-semibold">Help Center</li>
                <li className="font-quick font-semibold">Contact Us</li>
                <li className="font-quick font-semibold">Report Abuse</li>
                <li className="font-quick font-semibold">Submit and Dispute</li>
                <li className="font-quick font-semibold">Policies & Rules</li>
                <li className="font-quick font-semibold">Online Shopping</li>
              </ul>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-xl text-[#121535] font-quick">
                My Account
              </h2>
              <ul className="mt-2 text-base leading-9 text-gray-500">
                <li className="font-quick font-semibold">My Account</li>
                <li className="font-quick font-semibold">Order History</li>
                <li className="font-quick font-semibold">Shopping Cart</li>
                <li className="font-quick font-semibold">Compare</li>
                <li className="font-quick font-semibold">Help Ticket</li>
                <li className="font-quick font-semibold">Wishlist</li>
              </ul>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-xl text-[#121535] font-quick">
                Daily Groceries
              </h2>
              <ul className="mt-2 text-base leading-9 text-gray-500">
                <li className="font-quick font-semibold">Dairy & Eggs</li>
                <li className="font-quick font-semibold">Meat & Seafood</li>
                <li className="font-quick font-semibold">Breakfast Food</li>
                <li className="font-quick font-semibold">Household Supplies</li>
                <li className="font-quick font-semibold">Bread & Bakery</li>
                <li className="font-quick font-semibold">Pantry Staples</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center mt-5 flex flex-col md:flex-row justify-between bg-gray-100 py-6 px-3">
        <p className="text-md text-gray-500">
          Marketpro eCommerce © 2024. All Rights Reserved
        </p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <p className="text-sm text-[#121535]">We Are Accepting</p>
          <img
            src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/payment-method.png"
            alt="Payment Methods"
            className="h-8"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
