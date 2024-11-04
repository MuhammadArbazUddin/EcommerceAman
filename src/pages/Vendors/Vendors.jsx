import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterDropdown,
  SearchBarFilter,
  VendorsCard,
  Pagination,
} from "../../components/components";
import { setPage } from "../../store/slices/paginationSlice";

const Vendors = () => {
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
      <div className="flex justify-between items-center p-4 bg-white rounded-lg mt-2 mx-4 mb-6">
        <SearchBarFilter />

        <div className="flex items-center space-x-4">
          <div className="text-gray-600">
            Showing {startIndex}-{endIndex} of {totalItems} results
          </div>
          <FilterDropdown />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 p-4">
        {/* Assuming VendorsCard displays vendor items; this can be mapped over a filtered list */}
        <VendorsCard data={productData} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Vendors;
