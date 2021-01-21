import React from 'react';
import { getPageNumberList } from '../../utils/getPageNumberList';

const Pagination = ({ page, maxPages, onNewPage }) => {
  const list = getPageNumberList({ c: page, m: maxPages });

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-primary">
        <button
          onClick={() => onNewPage(page - 1)}
          disabled={page === 1}
          className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-primary cursor-pointer focus:outline-none disabled:opacity-40 hover:bg-hover hover:text-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left w-6 h-6 disabled:opacity-90"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="flex h-12 font-medium rounded-full bg-primary">
          <div className="flex flex-row">
            {list.map((elem, idx) => (
              <button
                key={idx}
                onClick={() => elem !== '...' && onNewPage(elem)}
                className={`${
                  elem === page && 'font-bold'
                } w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in rounded-full hover:bg-hover hover:text-hover focus:outline-none disabled:opacity-40`}
              >
                {elem}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => onNewPage(page + 1)}
          disabled={page === maxPages}
          className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-primary cursor-pointer focus:outline-none disabled:opacity-40 hover:bg-hover hover:text-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
