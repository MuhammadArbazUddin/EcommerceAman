import React from "react";
import {
  ProductCard,
  PaperCard,
  FilterDropdown,
  CategoryFilterSection,
  FilterByPrice,
  FilterByRatings,
  Pagination,
  SearchBarFilter,
} from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/slices/paginationSlice";

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
];

const VendorsDetails = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
  const totalItems = useSelector((state) => state.pagination.totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <>
      <div className="flex justify-between pb-[60px] items-center p-4 bg-white rounded-lg mt-2 mx-4 mb-6">
        <SearchBarFilter />

        <div className="flex items-center space-x-4">
          <div className="text-gray-600">
            Showing {startIndex}-{endIndex} of {totalItems} results
          </div>
          <FilterDropdown />
        </div>
      </div>

      <div className="grid grid-cols-[25%_1fr] gap-4 p-4 my-12">
        <div className="space-y-8 mx-[20px] my-[-70px]">
          <PaperCard />
          <CategoryFilterSection />
          <FilterByPrice />
          <FilterByRatings />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="h-[400px] overflow-hidden flex flex-col justify-between"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default VendorsDetails;
