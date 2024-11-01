import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCarSide, FaHandHoldingHeart } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

const FeaturesSection = () => {
  return (
    <div className="p-4 my-12">
      <div className="grid grid-cols-2 gap-6 mb-10">
        <FeatureCard
          title="Free Shipping"
          description="Free shipping all over the US"
          icon=<FaCarSide size={30} />
        />
        <FeatureCard
          title="Secure Payments"
          description="Free shipping all over the US"
          icon=<BsFillCreditCardFill size={30} />
        />
        <FeatureCard
          title="100% Satisfaction"
          description="Free shipping all over the US"
          icon=<FaHandHoldingHeart size={30} />
        />
        <FeatureCard
          title="24/7 Support"
          description="Free shipping all over the US"
          icon=<IoIosChatboxes size={30} />
        />
      </div>
      <NewsletterBanner />
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-center bg-[#F0FDFA] hover:bg-[#CDF2DE] transition-all duration-300 ease-in-out p-8 rounded-2xl ">
      <div
        className="text-4xl text-white bg-customGreen p-3 rounded-full  mr-4"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl  text-gray-800 font-quick font-bold ">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed font-quick  font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

const NewsletterBanner = () => {
  return (
    <div className="relative py-4 my-10 px-11 bg-[#121535] rounded-2xl overflow-hidden p-4 flex gap-4 z-10">
      <img
        src="https://wowtheme7.com/tf/marketpro/assets/images/shape/offer-shape.png"
        alt=""
        className="absolute inset-0 z-[-1] w-full h-full opacity-10"
      />
      <div className="flex items-center text-white p-4 my-10">
        <div className="flex flex-col">
          <h1 className="text-7xl font-quick font-bold leading-tight">
            Don't Miss Out on Grocery Deals
          </h1>
          <p className="text-3xl my-4 font-semibold">
            SIGN UP FOR THE UPDATE NEWSLETTER
          </p>
          <form action="#" className="relative mt-10 flex items-center">
            <input
              type="text"
              className="w-2/3 rounded-full text-white py-4 px-4 bg-transparent border border-gray-300 focus:border-customGreen focus:outline-none transition ease-in-out duration-300 placeholder:text-sm"
              placeholder="Your email address..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Your email address...")}
            />

            <button
              type="submit"
              className="rounded-full text-sm py-2 px-5 bg-orange-500 text-white ml-[-120px]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/newsletter-img.png"
            alt=""
            className="w-[1000px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
