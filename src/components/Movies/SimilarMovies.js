import { Link } from 'react-router-dom';
import React from 'react';

const SimilarMovies = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-600 dark:scrollbar-thumb-black scrollbar-track-white dark:scrollbar-track-white">
      {data.results.map((result, idx) => (
        <div className="flex-none mb-4" key={idx}>
          <Link to={`/movie/${result.id}`}>
            <img
              alt="Placeholder"
              className="block"
              src={`${process.env.REACT_APP_IMAGE_URI}${result.poster_path}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SimilarMovies;
