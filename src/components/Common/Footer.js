import React from 'react';
import TMDBLogo from '../../assets/tmdb-primary-long.svg';

const Footer = () => {
  return (
    <footer className="flex footer bg-primary relative pt-1">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex w-auto h-auto justify-center py-6 px-6">
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
