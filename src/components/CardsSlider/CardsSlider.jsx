import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function CardsSlider() {
  return (
    <>
      {" "}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        grabCursor
        className="mySwiper"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center group">
              <div className="text-center">
                <div className="bg-[#E8F9E9] rounded-full overflow-hidden w-36 h-36 flex items-center justify-center mx-auto">
                  <a
                    href="/"
                    className="flex items-center justify-center w-full h-full"
                  >
                    <img
                      src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/feature-img4.png"
                      alt="Yummy Candy"
                      className="object-cover p-6 w-full h-full transition-all duration-300 ease-in-out group-hover:scale-110"
                    />
                  </a>
                </div>
                <div className="mt-4">
                  <h6 className="text-lg mb-2">
                    <a
                      href="/"
                      className="text-inherit font-quick font-semibold"
                    >
                      Yummy Candy
                    </a>
                  </h6>
                  <span className="text-sm text-gray-500 font-quick font-semibold">
                    125+ Products
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
