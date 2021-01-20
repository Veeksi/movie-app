import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import { NavbarDropdown } from './NavbarDropdown';
import { ThemeContext } from '../../utils/themeContext';

const Navbar = (props) => {
  const { setSearchValue, setSearchType } = props;

  const history = useHistory();
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [type, setType] = useState('movie');

  const { theme, setTheme } = React.useContext(ThemeContext);

  const isDark = () => {
    return theme === 'dark';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue) {
      history.push('/search');
      setSearchType(type);
      setSearchValue(inputValue);
      setInputValue('');
    }
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap p-3 bg-primary">
      <Link to="/">
        <p className="inline-flex items-center p-2 mr-4 ">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-primary h-8 w-8 mr-2"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
          <span className="text-xl text-primary hover:text-hover font-bold uppercase tracking-wide">
            THE MOVIE APP
          </span>
        </p>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-hover rounded lg:hidden text-primary ml-auto hover:text-hover focus:outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start  flex flex-col lg:h-auto">
          <Link to="/">
            <p className="lg:inline-flex lg:w-auto lg:mr-1 mr-0 px-3 py-2 rounded text-primary font-bold hover:bg-hover hover:text-hover">
              Home
            </p>
          </Link>
          <NavbarDropdown title="Movies" />
          <NavbarDropdown title="Series" />

          <form
            onSubmit={handleSearch}
            className="flex flex-row lg:pt-0 pt-1 text-base"
          >
            <select
              className="pl-3 shadow outline-none focus:shadow-outline pr-3 rounded-l bg-secondary text-primary"
              onChange={(e) => setType(e.target.value)}
              defaultValue={type}
            >
              <option value="movie">Movies</option>
              <option value="tv">Series</option>
            </select>
            <div className="flex flex-row px-3 py-2 pl-5 items-center rounded-r placeholder-gray-400 text-primary relative bg-secondary shadow outline-none focus:outline-none focus:shadow-outline">
              <input
                className="focus:outline-none pr-2 bg-secondary"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <svg
                cursor="pointer"
                onClick={handleSearch}
                className="w-5 h-5 justify-center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </form>

          <div className="pt-1 lg:pt-0 lg:pl-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="lg:inline-flex lg:w-auto lg:mr-1 mr-0 px-2 py-2 rounded text-primary font-bold hover:text-hover fill-current hover:bg-hover focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
