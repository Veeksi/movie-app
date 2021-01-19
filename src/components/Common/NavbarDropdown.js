import React, { useRef } from 'react';
import { keys, lowerCase } from 'lodash';

import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

export const NavbarDropdown = ({ title }) => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

  const searchQuery = {
    movies: {
      popular: {
        label: 'Popular',
        type: 'popular',
      },
      top_rated: {
        label: 'Top rated',
        type: 'top_rated',
      },
      now_playing: {
        label: 'Now playing',
        type: 'now_playing',
      },
      upcoming: {
        label: 'Upcoming',
        type: 'upcoming',
      },
    },
    tv: {
      popular: {
        label: 'Popular',
        type: 'popular',
      },
      top_rated: {
        label: 'Top rated',
        type: 'top_rated',
      },
      airing_today: {
        label: 'Airing today',
        type: 'airing_today',
      },
      on_the_air: {
        label: 'On TV',
        type: 'on_the_air',
      },
    },
  };

  return (
    <div className="relative group" ref={dropDownRef}>
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-base text-white font-bold items-center justify-center hover:bg-gray-700 focus:outline-none"
      >
        {title}
      </button>
      <div
        onClick={() => setIsActive(!isActive)}
        className={
          isActive
            ? 'absolute z-10 py-2 mt-3 bg-white group-hover:block rounded-lg shadow-xl'
            : 'hidden'
        }
      >
        {title === 'Movies' ? (
          <div>
            {Object.keys(searchQuery.movies).map((item, idx) => (
              <Link
                key={idx}
                to={`/${lowerCase(title)}/${searchQuery.movies[item].type}`}
              >
                <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
                  {searchQuery.movies[item].label}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            {Object.keys(searchQuery.tv).map((item, idx) => (
              <Link
                key={idx}
                to={`/${lowerCase(title)}/${searchQuery.tv[item].type}`}
              >
                <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
                  {searchQuery.tv[item].label}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
