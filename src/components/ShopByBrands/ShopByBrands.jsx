import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const ShopByBrands = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const brands = [
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img1.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img2.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img3.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img4.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img5.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img6.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img1.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img2.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img3.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img4.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img5.png",
    "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/brand-img6.png",
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="p-4 mx-auto">
      <div className="bg-[#F3FAF2] p-8 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h5 className="mb-0 text-3xl font-quick font-bold text-left">
            Shop by Brands
          </h5>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-customGreen hover:underline transit duration-300 ease-in-out"
            >
              View All Deals
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center rounded-full border border-gray-200 hover:border-customGreen text-xl hover:bg-customGreen hover:text-white transition-all duration-300"
              >
                <MdOutlineNavigateBefore />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center rounded-full border border-gray-200 hover:border-customGreen text-xl hover:bg-customGreen hover:text-white transition-all duration-300"
              >
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-2 pt-4">
              <img src={brand} alt={`brand-${index}`} width={130} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByBrands;
