import React from 'react';
import TMDBLogo from '../../assets/tmdb-primary-long.svg';

const Footer = () => {
  return (
    <footer className="footer bg-gray-300 relative pt-1 border-blue-700">
      <div className="container mx-auto">
        <div className="mt-8 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="flex sm:w-2/3 justify-center py-6">
            <a href="https://www.themoviedb.org/">
              <img
                src={TMDBLogo}
                alt=""
                style={{ flex: 1, height: 30, resizeMode: 'contain' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
