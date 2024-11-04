import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const FilterByRatings = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Filter by Rating
        </h3>
        <div className="space-y-4 border-t pt-5">
          {[5, 4, 3, 2, 1].map((stars, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                className="appearance-none w-4 h-4 rounded-full border-2 border-customGreen cursor-pointer transition duration-300 ease-in-out relative
             checked:bg-white checked:border-customGreen checked:shadow-lg 
             after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-2 after:h-2 after:bg-customGreen after:rounded-full after:transform after:scale-0 after:m-[-4px] checked:after:scale-100 after:transition-transform after:duration-300"
              />

              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <BsFillStarFill
                    key={i}
                    className={`mr-1 ${
                      i < stars ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-700">
                {[124, 52, 12, 5, 2][index]}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterByRatings;
