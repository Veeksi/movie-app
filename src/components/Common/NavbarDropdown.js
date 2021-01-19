import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import { lowerCase } from 'lodash';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

export const NavbarDropdown = ({ title }) => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

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
        <Link to={`/${lowerCase(title)}/popular`}>
          <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
            Popular
          </p>
        </Link>
        <Link to={`/${lowerCase(title)}/top_rated`}>
          <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
            Top rated
          </p>
        </Link>
        <Link to={`/${lowerCase(title)}/now_playing`}>
          <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
            Now playing
          </p>
        </Link>
        <Link to={`/${lowerCase(title)}/upcoming`}>
          <p className="px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">
            Upcoming
          </p>
        </Link>
      </div>
    </div>
  );
};
