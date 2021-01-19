import React from 'react';

const Pagination = ({ page, maxPages, onNewPage }) => {
  console.log('Current page: ', page);
  console.log('Max pages: ', maxPages);
  return (
    <div className="flex flex-col items-center">
      <div className="flex text-gray-700">
        <button
          onClick={() => onNewPage(page - 1)}
          disabled={page === 1}
          className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer focus:outline-none disabled:opacity-40 hover:bg-gray-400"
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
        <div className="flex h-12 font-medium rounded-full bg-gray-200">
          {page === 1 ? (
            <div className="flex flex-row">
              <button className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  bg-teal-600 text-black font-bold hover:bg-gray-400 focus:outline-none">
                {page}
              </button>
              <button
                onClick={() => onNewPage(page + 1)}
                className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-gray-400 focus:outline-none"
              >
                {page + 1}
              </button>
              <button
                disabled={page + 2 > maxPages}
                onClick={() => onNewPage(page + 2)}
                className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:bg-gray-400 focus:outline-none"
              >
                {page + 2}
              </button>
            </div>
          ) : (
            <div className="flex flex-row">
              <div className="flex flex-row">
                <button
                  onClick={() => onNewPage(page - 1)}
                  className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-gray-400  focus:outline-none"
                >
                  {page - 1}
                </button>
                <button className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-black font-bold hover:bg-gray-400 focus:outline-none">
                  {page}
                </button>
                <button
                  onClick={() => onNewPage(page + 1)}
                  disabled={page === maxPages}
                  className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full hover:bg-gray-400 disabled:opacity-40 focus:outline-none"
                >
                  {page + 1}
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => onNewPage(page + 1)}
          disabled={page === maxPages}
          className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer focus:outline-none disabled:opacity-40 hover:bg-gray-400"
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
