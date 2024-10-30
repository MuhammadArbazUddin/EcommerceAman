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
    <footer className="footer-background p-5 mx-auto">
      <div className="footer-content flex flex-col md:flex-row justify-between">
        {/* Column 1 - Larger size */}
        <div className="flex flex-col items-start md:flex-2 mb-4 md:mb-0">
          <img
            src="https://wowtheme7.com/tf/marketpro/assets/images/logo/logo.png"
            alt="Logo"
            className="h-10 mb-3"
          />
          <p className="text-md mb-2 text-gray-500">
            We're Grocery Shop, an innovative team of food suppliers.
          </p>
          <div className="flex items-center text-md mb-1">
            <FaMapMarkerAlt
              size={30}
              className="mr-2 p-2 text-white bg-customGreen rounded-full"
            />
            <span className="text-gray-800 text-md">
              789 Inner Lane, Biyes park, CA, USA
            </span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FaPhoneAlt
              size={30}
              className="mr-2 p-2 text-white bg-customGreen rounded-full"
            />
            <span className="text-gray-800 text-md">+00 123 456 789</span>
            <span className="ml-2">or +00 987 654 012</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaEnvelope
              size={30}
              className="mr-2 p-2 text-white bg-customGreen rounded-full"
            />
            <span className="text-gray-800 text-md">
              support24@marketpro.com
            </span>
          </div>
          <div className="text-sm">
            <h2 className="font-bold text-xl">Shop on The Go</h2>
            <p>Marketpro App is available. Get it now</p>
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
          <div className="flex space-x-3 mt-4 text-xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Columns 2-5 */}
        <div className="flex flex-wrap md:flex-1 gap-4">
          <div className="flex-1  p-4">
            <h2 className="font-bold text-xl">Information</h2>
            <ul className="mt-2 text-md text-gray-500">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Privacy Policy</li>
              <li>Our Suppliers</li>
              <li>Extended Plan</li>
              <li>Community</li>
            </ul>
          </div>

          <div className="flex-1  p-4">
            <h2 className="font-bold text-xl">Customer Support</h2>
            <ul className="mt-2 text-md text-gray-500">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Report Abuse</li>
              <li>Submit and Dispute</li>
              <li>Policies & Rules</li>
              <li>Online Shopping</li>
            </ul>
          </div>

          <div className="flex-1  p-4">
            <h2 className="font-bold text-xl">My Account</h2>
            <ul className="mt-2 text-md text-gray-500">
              <li>My Account</li>
              <li>Order History</li>
              <li>Shopping Cart</li>
              <li>Compare</li>
              <li>Help Ticket</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div className="flex-1  p-4">
            <h2 className="font-bold text-xl">Daily Groceries</h2>
            <ul className="mt-2 text-md text-gray-500">
              <li>Dairy & Eggs</li>
              <li>Meat & Seafood</li>
              <li>Breakfast Food</li>
              <li>Household Supplies</li>
              <li>Bread & Bakery</li>
              <li>Pantry Staples</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 flex flex-col md:flex-row justify-between">
        <p className="text-md">
          &copy; {new Date().getFullYear()} Grocery Shop. All rights reserved.
        </p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <p className="text-md">We Are Accepting</p>
          <img
            src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/payment-method.png"
            alt="Payment Methods"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
