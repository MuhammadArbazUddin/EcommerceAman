import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const OfferCard = ({
  title,
  deliveryTime,
  expirationDate,
  imgSrc,
  logoSrc,
}) => {
  return (
    <div className="relative py-4 my-10 px-11 bg-customGreen rounded-2xl overflow-hidden p-4 flex gap-4 z-10">
      <img
        src="https://wowtheme7.com/tf/marketpro/assets/images/shape/offer-shape.png"
        alt=""
        className="absolute inset-0 z-[-1] w-full h-full opacity-10"
      />
      <div
        className="hidden lg:flex"
        style={{ flex: "0 0 35%", alignItems: "center" }}
      >
        <img src={imgSrc} alt="" className="w-5/5" />{" "}
        {/* Adjusted width to 80% */}
      </div>
      <div className="py-4" style={{ flex: "0 0 65%" }}>
        <div className="mb-4 w-20 h-20 flex items-center justify-center bg-white rounded-full">
          <img src={logoSrc} alt="" />
        </div>
        <h4 className="text-white font-quick font-semibold mb-2 text-3xl">
          {title}
        </h4>
        <div className="flex gap-2">
          <span className="text-sm font-quick font-semibold text-white">
            {deliveryTime}
          </span>
          <span className="text-sm font-quick font-semibold text-[#E96629]">
            {expirationDate}
          </span>
        </div>
        <a
          href="/"
          className="mt-4 btn bg-white text-black font-quick font-semibold flex items-center px-4 py-2 rounded-full max-w-max"
        >
          Shop Now
          <FaArrowRightLong className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const OffersSection = () => {
  return (
    <div className="flex gap-4 p-4 justify-center">
      <OfferCard
        title="$5 off your first order"
        deliveryTime="Delivery by 6:15am"
        expirationDate="expired Aug 5"
        imgSrc="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/offer-img1.png"
        logoSrc="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/offer-logo.png"
      />
      <OfferCard
        title="$5 off your first order"
        deliveryTime="Delivery by 6:15am"
        expirationDate="expired Aug 5"
        imgSrc="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/offer-img1.png"
        logoSrc="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/offer-logo.png"
      />
    </div>
  );
};

export default OffersSection;
