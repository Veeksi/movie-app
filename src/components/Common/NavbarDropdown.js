import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import { lowerCase } from 'lodash';
import { searchParameters } from '../../constants';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

export const NavbarDropdown = ({ title }) => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

  return (
    <div className="relative group" ref={dropDownRef}>
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        className="lg:inline-flex lg:w-auto lg:mr-1 mr-0 w-full px-3 py-2 rounded text-base text-primary font-bold items-center justify-center hover:bg-hover hover:text-hover focus:outline-none"
      >
        {title}
      </button>

      <div
        onClick={() => setIsActive(!isActive)}
        className={
          isActive
            ? 'absolute z-10 py-2 mt-3 bg-card group-hover:block rounded-lg shadow-white'
            : 'hidden'
        }
      >
        {title === 'Movies' ? (
          <div>
            {Object.keys(searchParameters.movies).map((item, idx) => (
              <Link
                key={idx}
                to={`/${lowerCase(title)}/${
                  searchParameters.movies[item].type
                }`}
              >
                <p className="px-4 py-2 text-primary hover:bg-hover hover:text-hover">
                  {searchParameters.movies[item].label}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            {Object.keys(searchParameters.tv).map((item, idx) => (
              <Link
                key={idx}
                to={`/${lowerCase(title)}/${searchParameters.tv[item].type}`}
              >
                <p className="px-4 py-2 text-primary hover:bg-hover hover:text-hover">
                  {searchParameters.tv[item].label}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
