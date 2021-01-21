import Placeholder from '../../assets/placeholder.svg';
import React from 'react';

const Seasons = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-900 scrollbar-track-white dark:scrollbar-track-white">
      {data.map((season, idx) => (
        <div className="flex-none mb-5" key={idx}>
          {season.poster_path ? (
            <img
              alt={Placeholder}
              className="block rounded hover:border-hover border-4 w-48 h-72"
              src={`${process.env.REACT_APP_IMAGE_URI}${season.poster_path}`}
            />
          ) : (
            <img
              alt={Placeholder}
              className="block rounded hover:border-hover border-4 w-48 h-72"
              src={Placeholder}
            />
          )}

          <div className="flex flex-col justify-center items-center">
            <p>Season: {season.season_number}</p>
            <p>{season.air_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Seasons;
