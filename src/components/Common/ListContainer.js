import { capitalize, upperCase } from 'lodash';

import { Link } from 'react-router-dom';
import React from 'react';

const ListContainer = ({ data }) => {
  return (
    <div className="container mx-auto px-4 md:px-4 bg-primary pb-1">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {data.results.map(
          (item, idx) =>
            item.poster_path && (
              // Card starts here
              <div
                className="flex flex-col my-1 px-1 w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 text-primary bg-primary hover:bg-hover hover:text-hover"
                key={idx}
              >
                <article className="flex flex-col overflow-hidden rounded-lg shadow-lg h-full">
                  <Link to={`/${item.media_type}/${item.id}`}>
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
                    />
                  </Link>

                  <header className="flex leading-tight p-2 md:p-4 flex-grow">
                    <h1 className="text-lg">
                      <Link
                        to={`/${item.media_type}/${item.id}`}
                        className="no-underline hover:underline block"
                      >
                        {item.original_title ? item.original_title : item.name}
                      </Link>
                    </h1>
                  </header>

                  <main className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-sm">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}
                    </p>
                    <p className="text-sm">
                      {`${item.vote_average}☆`}
                    </p>
                  </main>

                  <footer className="flex justify-between leading-none p-2 md:p-4">
                    <Link
                      to={`/${item.media_type}/${item.id}`}
                      className="no-underline hover:underline"
                    >
                      <p className="text-sm">
                        {upperCase(item.original_language)}
                      </p>
                    </Link>
                    <p className="text-sm">{capitalize(item.media_type)}</p>
                  </footer>
                </article>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ListContainer;
