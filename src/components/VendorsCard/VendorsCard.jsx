import React from "react";

const VendorCard = () => {
  const cards = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    title: "Organic Market",
    subtitle: "Delivery by 6:15am",
    price: "$5 off snack and candy",
    image:
      "https://wowtheme7.com/tf/marketpro/assets/images/shape/box-shape2.png",
  }));

  return (
    <>
      <h1 className="mt-14 mx-4 font-bold font-quick text-3xl mb-10">
        Weekly Top Vendors
      </h1>

      <div className="grid grid-cols-3 gap-8 p-4 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative rounded-lg text-black p-6 h-[320px] w-[420px] flex flex-col"
          >
            <div className="absolute inset-0 rounded-lg">
              <img
                src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo1.png"
                width={60}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 "
                alt=""
              />
              <div
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 1,
                }}
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center flex-grow text-center mt-14">
              <h1 className="text-xl font-bold font-quick mb-2">
                {card.title}
              </h1>
              <p className="text-sm font-quick font-semibold mb-2">
                {card.subtitle}
              </p>
              <div className="flex justify-center mt-2">
                <p className="text-sm  font-quick font-semibold text-white bg-orange-600 px-2 rounded-full p-1 max-w-[200px] inline">
                  {card.price}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white relative p-2 w-20 h-20 flex items-center justify-center rounded-full"
                >
                  <img
                    src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-img4.png"
                    alt=""
                    width={50} // Adjust this size as needed
                    className="rounded-full relative"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VendorCard;
