import Placeholder from '../../assets/placeholder.svg';
import React from 'react';
const Credits = ({ data }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-900 scrollbar-track-white dark:scrollbar-track-white">
      {data.cast.map(
        (result, idx) =>
          result.profile_path && (
            <div className="flex-none mb-5" key={idx}>
              {result.profile_path ? (
                <img
                  alt={Placeholder}
                  className="block rounded hover:border-hover border-4 w-48 h-72"
                  src={`${process.env.REACT_APP_IMAGE_URI}${result.profile_path}`}
                />
              ) : (
                <img
                  alt={Placeholder}
                  className="block rounded hover:border-hover border-4 w-48 h-72"
                  src={Placeholder}
                />
              )}
              <div className="flex flex-col justify-center items-center">
                <p className="w-48 text-center">{result.original_name}</p>
                <p className="text-italic italic w-48 text-center">{result.character}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Credits;
