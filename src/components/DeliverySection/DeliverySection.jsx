import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DeliverySection = () => {
  return (
    <div className="pb-8 p-4">
      <div className="delivery relative rounded-xl bg-customGreen p-4 flex items-center gap-4 flex-wrap z-10">
        <img
          src="https://wowtheme7.com/tf/marketpro/assets/images/bg/delivery-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <div className="flex flex-wrap w-full items-center">
          <div className="mb-[-80px] hidden md:block md:w-3/12 text-center">
            <div>
              <img
                src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/delivery-man.png"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full sm:w-7/12 md:w-5/12 text-center">
            <h4 className="text-3xl font-bold text-white mb-2">
              We Deliver on Next Day from 10:00 AM to 08:00 PM
            </h4>
            <p className="text-white">For Orders starting from $100</p>
            <a
              href="shop.html"
              className="mt-4 inline-flex font-bold items-center justify-center px-6 py-3 rounded-full bg-[#E96629] text-white  gap-2"
            >
              Shop Now
              <span className="text-xl flex">
                <FaArrowRightLong />
              </span>
            </a>
          </div>
          <div className="hidden sm:block md:w-4/12 sm:w-5/12">
            <img
              src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/special-snacks-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
