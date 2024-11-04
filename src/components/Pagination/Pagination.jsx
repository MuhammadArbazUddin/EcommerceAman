import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/slices/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) =>
    Math.ceil(state.pagination.totalItems / state.pagination.itemsPerPage)
  );

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
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
            currentPage === page ? "bg-customGreen text-white" : "text-gray-600"
          }`}
        >
          {page < 10 ? `0${page}` : page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 disabled:text-gray-400"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
