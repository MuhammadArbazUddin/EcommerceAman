import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMap,
  FaHeadphones,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-4 py-16">
      {/* Left Section - Contact Form */}
      <div className="bg-white border rounded-xl p-6 md:w-2/3 mb-6 md:mb-0 md:mr-6">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Make Custom Request
          </h2>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-2 border rounded focus:border-green-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border rounded focus:border-green-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border rounded focus:border-green-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded focus:border-green-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Type your message"
              className="w-full p-2 border rounded h-24 focus:border-green-600 focus:outline-none"
            ></textarea>
          </div>
          <button className="px-6 py-2 font-semibold rounded bg-customGreen text-white hover:bg-green-700 transition duration-300">
            Get a Quote
          </button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
      <div className="bg-white border rounded-xl p-6 md:w-1/3">
        <div className="border rounded-xl mb-4 p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt
              size={30}
              className="mr-2 text-white bg-customGreen rounded-full p-2"
            />
            <span>+00 123 456 789</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope
              size={30}
              className="mr-2 text-white bg-customGreen rounded-full p-2"
            />
            <span>support24@marketpro.com</span>
          </div>
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt
              size={30}
              className="mr-2 text-white bg-customGreen rounded-full p-2"
            />
            <span>789 Inner Lane, California, USA</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded flex items-center justify-center bg-customGreen text-white hover:bg-green-700">
            <FaHeadphones className="mr-2" />
            <span>Get Support On Call</span>
          </button>
          <button className="px-4 py-2 rounded flex items-center justify-center bg-customGreen text-white hover:bg-green-700">
            <FaMap className="mr-2" />
            <span>Get Direction</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
