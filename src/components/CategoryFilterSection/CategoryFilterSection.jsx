import React from "react";

const CategoryFilterSection = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-xl font-quick font-bold text-gray-800 mb-2 p-2">
          Product Category
        </h3>
        <hr className="mb-4" />
        <div className="space-y-2 overflow-y-auto h-[20rem]">
          <p className="text-gray-700 text-lg py-1">Storage (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>
          <p className="text-gray-700 text-lg py-1">Portable Devices (12)</p>

          {/* More categories */}
        </div>
      </div>
    </>
  );
};

export default CategoryFilterSection;
