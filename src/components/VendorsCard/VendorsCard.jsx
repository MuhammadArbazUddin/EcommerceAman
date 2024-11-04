import React, { useState } from "react";

const VendorCard = ({ data }) => {
  const [productData, setProductData] = useState(data);

  return (
    <>
      {productData.length > 0
        ? productData.map((item, index) => {
            return (
              <div
                key={index}
                className="relative rounded-lg text-black p-6 h-[320px] w-[420px] flex flex-col"
              >
                <div className="absolute inset-0 rounded-lg">
                  <img
                    src={item.productImg}
                    width={60}
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 "
                    alt={item.productImg}
                  />
                  <div className="h-full w-full rounded-lg vendor-card" />
                </div>
                <div className="relative z-10 flex flex-col justify-center flex-grow text-center mt-14">
                  <h1 className="text-xl font-bold font-quick mb-2">
                    {item.title}
                  </h1>
                  <p className="text-sm font-quick font-semibold mb-2">
                    {item.subtitle}
                  </p>
                  <div className="flex justify-center mt-2">
                    <p className="text-sm  font-quick font-semibold text-white bg-orange-600 px-2 rounded-full p-1 max-w-[200px] inline">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  {item.productSubImages.length > 0
                    ? item.productSubImages.map((img, key) => {
                        return (
                          <div
                            key={key}
                            className="bg-white relative p-2 w-20 h-20 flex items-center justify-center rounded-full"
                          >
                            <img
                              src={img}
                              alt={img}
                              width={50} // Adjust this size as needed
                              className="rounded-full relative"
                            />
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default VendorCard;
