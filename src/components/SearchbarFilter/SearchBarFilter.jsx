import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBarFilter = () => {
  return (
    <>
      <div className="flex items-center  border rounded-full px-4 py-2 w-1/2">
        <input
          type="text"
          placeholder="Search vendors by name or ID..."
          className="outline-none flex-grow bg-transparent"
        />
        <span className="flex items-center justify-center  p-2 rounded-full bg-customGreen">
          <FaSearch className="text-white" />
        </span>
      </div>
    </>
  );
};

export default SearchBarFilter;
