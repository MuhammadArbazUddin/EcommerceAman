// ForgotPassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Importing the icon

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the forgot password request,
    // e.g., sending a password reset email
    alert(`Password reset link has been sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 border hover:border-customGreen relative">
        {/* Back to Login Button */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full text-lg flex items-center transition duration-300"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* Forgot Password Form */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Forgot Password
        </h2>
        <p className="text-center mb-6 text-gray-600 text-lg">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-4 border rounded-xl text-lg focus:outline-none focus:border-customGreen border-gray-300"
            />
          </div>
          <div className="text-center mb-4">
            <button
              type="submit"
              className="bg-customGreen hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
