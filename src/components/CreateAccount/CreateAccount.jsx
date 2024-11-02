import { useState } from "react";
import { IoIosEye, IoIosEyeOff, IoMdClose } from "react-icons/io";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="fixed inset-0 mt-2 overflow-y-auto flex items-center justify-center p-4">
        <div className="relative w-full max-w-screen-lg md:h-[700px] overflow-visible bg-white md:shadow-lg transition-all flex flex-col rounded-t-2xl">
          <button className="absolute left-0 top-0 m-4 text-gray-600">
            <IoMdClose size={30} />
          </button>
          {/* Create Account Section */}
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Create Account
            </h2>
            <form className="w-full max-w-lg space-y-4">
              {/* Form Fields */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen h-12 w-full rounded-full border px-5 bg-white text-lg"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen h-12 w-full rounded-full border px-5 bg-white text-lg"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen h-12 w-full rounded-full border px-5 bg-white text-lg"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen h-12 w-full rounded-full border px-5 bg-white text-lg"
                  placeholder="name@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="focus:outline-none focus:ring-customGreen focus:border-2 focus:border-customGreen h-12 w-full rounded-full border px-5 bg-white text-base"
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/4 text-gray-600"
                  >
                    {showPassword ? (
                      <IoIosEyeOff size={25} />
                    ) : (
                      <IoIosEye size={25} />
                    )}
                  </button>
                </div>
              </div>
              <button
                className="mt-8 w-full flex justify-center items-center rounded-full bg-customGreen text-white text-lg h-12"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
