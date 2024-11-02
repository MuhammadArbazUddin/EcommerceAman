import React, { useState } from "react";
import { FeaturesSection, ProductCard } from "../../components/components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

const Vendors = () => {
  const products = [
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },

    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },

    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    {
      name: "C-500 Antioxidant Protect Dietary Supplement",
      brand: "Lucky Supermarket",
      price: "14.99",
      originalPrice: "28.99",
      rating: "4.8",
      reviewCount: "17k",
      image:
        "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/product-img7.png",
    },
    // Add more products here
  ];

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [price, setPrice] = useState(2); // Initial price value

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between pb-[60px] items-center p-4 bg-white rounded-lg mt-2 mx-4 mb-6">
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

        <div className="flex items-center space-x-4">
          <div className="text-gray-600">
            Showing {startIndex + 1}-{startIndex + selectedProducts.length} of{" "}
            {products.length} results
          </div>
          <div className="flex items-center border rounded-full px-4 py-2">
            <span className="mr-2 text-gray-600">Sort by:</span>
            <select className="bg-transparent outline-none">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[25%_1fr] gap-4 p-4 my-12">
        <div className=" space-y-8 mx-[20px] my-[-70px] ">
          <div className="p-6 rounded-3xl flex flex-col items-center  text-center bg-[url('https://wowtheme7.com/tf/marketpro/assets/images/shape/box-shape3.png')] bg-cover bg-center relative">
            <img
              src="https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo2.png"
              alt="Nature Food Logo"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-bold mb-1 font-quick">Safeway</h2>
            <p className="text-gray-700 mb-2 font-quick font-semibold">
              New Street, 520, New York
            </p>
            <div className="bg-white text-gray-500 px-3 py-1 rounded-full mb-4 text-sm">
              Since 2009
            </div>
            <p className="text-gray-600 mb-6 font-quick font-semibold">
              It's easy and free to link or sign up for our loyalty program, and
              it only takes a few seconds.
            </p>
            <div className="flex space-x-3">
              <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaFacebook />
              </div>
              <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaTwitter />
              </div>
              <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-white p-2 text-customGreen text-lg rounded-full hover:bg-customGreen hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
            <button className="bg-green-600 text-base text-white rounded-full px-6 py-4 w-full font-quick font-semibold mt-4">
              Contact Seller
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-xl font-quick font-bold text-gray-800 mb-2 p-2">
              Product Category
            </h3>
            <hr className="mb-4" />
            <div className="space-y-2 overflow-y-auto h-[20rem]">
              <p className="text-gray-700 text-lg py-1">Storage (12)</p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>
              <p className="text-gray-700 text-lg py-1">
                Portable Devices (12)
              </p>

              {/* More categories */}
            </div>
          </div>

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
        </div>

        <div className="grid grid-cols-4 gap-4">
          {selectedProducts.map((product, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden flex flex-col justify-between"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center my-6 space-x-2">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 disabled:text-gray-400"
        >
          &larr;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border ${
              currentPage === page
                ? "bg-customGreen text-white"
                : "text-gray-600"
            }`}
          >
            {page < 10 ? `0${page}` : page}
          </button>
        ))}

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 disabled:text-gray-400"
        >
          &rarr;
        </button>
      </div>
    </>
  );
};

export default Vendors;
