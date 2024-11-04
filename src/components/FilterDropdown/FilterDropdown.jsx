import React from "react";

const FilterDropdown = () => {
  return (
    <>
      <div className="flex items-center border rounded-full px-4 py-2">
        <span className="mr-2 text-gray-600">Sort by:</span>
        <select className="bg-transparent outline-none">
          <option>Latest</option>
          <option>Old</option>
        </select>
      </div>
    </>
  );
};

export default FilterDropdown;
