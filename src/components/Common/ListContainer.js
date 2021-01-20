import Card from './Card';
import { Link } from 'react-router-dom';
import React from 'react';

const ListContainer = ({ data, type }) => {
  return (
    <div className="container mx-auto my-2 p-2 md:px-2 lg:p-2 bg-primary">
      <div className="flex flex-wrap">
        {data.results.map(
          (item, idx) =>
            item.poster_path && (
              // Card starts here
              <Link
                className="flex flex-col w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 text-primary bg-card hover:bg-hover hover:text-hover"
                key={idx}
                to={`/${item.media_type ? item.media_type : type}/${item.id}`}
              >
                <Card item={item} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ListContainer;
