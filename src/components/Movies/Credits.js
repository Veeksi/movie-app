import React from 'react';

const Credits = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-900 scrollbar-track-white dark:scrollbar-track-white">
      {data.cast.map(
        (result, idx) =>
          result.profile_path && (
            <div className="flex-none mb-5" key={idx}>
              <img
                alt="Placeholder"
                className="block rounded hover:border-hover border-4"
                src={`${process.env.REACT_APP_IMAGE_URI}${result.profile_path}`}
              />
              <p>{result.original_name}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Credits;
