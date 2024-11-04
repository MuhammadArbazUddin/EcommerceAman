import React from "react";
import { VendorsCard } from "../components";
import { Link } from "react-router-dom";

const TopVendors = ({ heading }) => {
  const productData = [
    {
      productImg:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo1.png",
      title: "Organic Market",
      subtitle: "Delivery by 6:15am",
      price: "$5 off snack and candy",
      productSubImages: [
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
      ],
    },
    {
      productImg:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo1.png",
      title: "Arbaaz Data",
      subtitle: "Delivery by 6:15am",
      price: "$5 off snack and candy",
      productSubImages: [
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
      ],
    },
    {
      productImg:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo1.png",
      title: "Organic Market",
      subtitle: "Delivery by 6:15am",
      price: "$5 off snack and candy",
      productSubImages: [
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png",
      ],
    },
  ];

  return (
    <>
      <div>
        <h1 className="mt-14 mx-4 font-bold font-quick text-3xl mb-10">
          {heading}
        </h1>
        <div className="grid grid-cols-3 gap-8 p-4 ">
          <VendorsCard data={productData} />
        </div>
        <div className="flex justify-center">
          <Link to={"/vendors"}>
            <button className="px-6 py-2 bg-[#4B9E60] text-white rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out">
              View All Store
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopVendors;
