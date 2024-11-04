import React, { useState } from "react";

const FilterByPrice = () => {
  const [price, setPrice] = useState(2); // Initial price value

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg p-6">
        <h6 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-6 mb-6">
          Filter by Price
        </h6>
        <div>
          <div className="w-full h-2">
            <input
              type="range"
              min="0"
              max="100"
              value={price}
              onChange={handlePriceChange}
              className="w-full bg-customGreen"
            />
          </div>
          <div className="flex justify-between items-center flex-wrap-reverse gap-2 mt-6">
            <button
              type="button"
              className="bg-customGreen text-white h-10 px-4 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Filter
            </button>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Price:</span>
              <input
                type="text"
                className="text-gray-700 text-sm font-medium bg-transparent border-none focus:outline-none"
                id="amount"
                readOnly
                value={`$0 - $${price}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
