import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing the icons

const SellerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-20">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 border hover:border-customGreen">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Seller Register
        </h2>
        <form>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2 text-lg"
              htmlFor="username"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Write a username"
              className="w-full p-4 border rounded-xl text-lg focus:outline-none focus:border-customGreen border-gray-300"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2 text-lg"
              htmlFor="email"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              className="w-full p-4 border rounded-xl text-lg focus:outline-none focus:border-customGreen border-gray-300"
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-semibold mb-2 text-lg"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 border rounded-xl text-lg focus:outline-none focus:border-customGreen border-gray-300"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-4 top-8 flex items-center"
            >
              {showPassword ? (
                <FiEye className="text-gray-600" size={24} />
              ) : (
                <FiEyeOff className="text-gray-600" size={24} />
              )}
            </button>
          </div>
          <div className="mb-8">
            <p className="text-gray-700 text-sm">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-customGreen hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerRegister;
