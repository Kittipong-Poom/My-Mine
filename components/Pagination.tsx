import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="join justify-center flex mt-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <button
          key={index}
          className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
