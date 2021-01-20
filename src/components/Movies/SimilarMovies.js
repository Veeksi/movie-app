import { Link } from 'react-router-dom';
import React from 'react';

const SimilarMovies = ({ data }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-900 scrollbar-track-white dark:scrollbar-track-white">
      {data.results.map((result, idx) => (
        <div className="flex-none mb-5" key={idx}>
          <Link to={`/movie/${result.id}`}>
            <img
              alt="Placeholder"
              className="block rounded hover:border-hover border-4"
              src={`${process.env.REACT_APP_IMAGE_URI}${result.poster_path}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SimilarMovies;
