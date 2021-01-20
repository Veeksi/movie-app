import { capitalize, upperCase } from 'lodash';

import React from 'react';

const Card = ({ item }) => {
  return (
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
          {item.release_date ? item.release_date : item.first_air_date}
        </p>
        <p className="text-sm">{`${item.vote_average}☆`}</p>
      </main>

      <footer className="flex justify-between leading-none p-2 md:p-4">
        <p className="text-sm">{upperCase(item.original_language)}</p>
        <p className="text-sm">{capitalize(item.media_type)}</p>
      </footer>
    </article>
  );
};

export default Card;
