"use client"

import { useState } from 'react';

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center space-x-4 py-20">
      {/* Previous Button */}
      <button
        className={`w-10 h-10 flex justify-center items-center ${
          currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-[#eaeffc] text-blue-600'
        }`}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-10 h-10 flex justify-center items-center ${
            currentPage === page ? 'bg-purple-500 text-white' : 'bg-[#eaeffc] text-black'
          }`}
        >
          {page < 10 ? `0${page}` : page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`w-10 h-10 flex justify-center items-center ${
          currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-[#eaeffc] text-purple-500'
        }`}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
