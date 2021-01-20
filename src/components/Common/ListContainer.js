import { capitalize, upperCase } from 'lodash';

import { Link } from 'react-router-dom';
import React from 'react';

const ListContainer = ({ data }) => {
  return (
    <div className="container mx-auto my-2 p-2 md:px-2 lg:p-2 bg-primary pb-1">
      <div className="flex flex-wrap">
        {data.results.map(
          (item, idx) =>
            item.poster_path && (
              // Card starts here
              <Link
                className="flex flex-col w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 text-primary bg-card hover:bg-hover hover:text-hover"
                key={idx}
                to={`/${item.media_type}/${item.id}`}
              >
                <article className="flex flex-col flex-grow p-2 overflow-hidden rounded shadow-lg h-full">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
                  />

                  <header className="flex flex-grow leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      {item.original_title ? item.original_title : item.name}
                    </h1>
                  </header>

                  <main className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-sm">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}
                    </p>
                    <p className="text-sm">{`${item.vote_average}☆`}</p>
                  </main>

                  <footer className="flex justify-between leading-none p-2 md:p-4">
                    <p className="text-sm">
                      {upperCase(item.original_language)}
                    </p>
                    <p className="text-sm">{capitalize(item.media_type)}</p>
                  </footer>
                </article>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ListContainer;
