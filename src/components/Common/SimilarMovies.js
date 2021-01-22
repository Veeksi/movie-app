import { Link } from 'react-router-dom';
import Placeholder from '../../assets/placeholder.svg';
import React from 'react';

const SimilarMoviesOrSeries = ({ data, type }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto mx-2 scrollbar scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-900 scrollbar-track-white dark:scrollbar-track-white">
      {data.results.map((result, idx) => (
        <div className="flex-none mb-5" key={idx}>
          <Link to={`/${type}/${result.id}`}>
            {result.poster_path ? (
              <img
                alt={Placeholder}
                className="block rounded hover:border-hover border-4 w-48 h-72"
                src={`${process.env.REACT_APP_IMAGE_URI}${result.poster_path}`}
              />
            ) : (
              <img
                alt={Placeholder}
                className="block rounded hover:border-hover border-4 w-48 h-72"
                src={Placeholder}
              />
            )}
          </Link>
          <p className="w-48 text-center">{result.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SimilarMoviesOrSeries;
