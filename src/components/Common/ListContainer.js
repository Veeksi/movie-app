import { capitalize, upperCase } from 'lodash';

import { Link } from 'react-router-dom';
import React from 'react';

const ListContainer = ({ data }) => {
  return (
    <div className="container mx-auto px-4 pb-4 md:px-4 border bg-gray-200">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {data.results.map(
          (item, idx) =>
            item.poster_path && (
              <div
                className="my-1 px-1 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/5"
                key={idx}
              >
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <Link to="/">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
                    />
                  </Link>

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <Link
                        to="/"
                        className="no-underline hover:underline text-black block h-auto w-full"
                      >
                        {item.original_title ? item.original_title : item.name}
                      </Link>
                    </h1>
                  </header>

                  <main className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-grey-darker text-sm">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}
                    </p>
                    <p className="text-grey-darker text-sm">
                      {`${item.vote_average}☆`}
                    </p>
                  </main>

                  <footer className="flex justify-between leading-none p-2 md:p-4">
                    <Link
                      to="/"
                      className="flex items-center place-items-end no-underline hover:underline text-black self-end"
                    >
                      <p className="flex place-self-end text-sm">
                        {upperCase(item.original_language)}
                      </p>
                    </Link>
                    <p className="flex self-end text-sm">
                      {capitalize(item.media_type)}
                    </p>
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
