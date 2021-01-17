import { basicQuery } from './default';

export const getPopularMovies = ({ page }) => {
  return basicQuery({ entertainment: 'movie', type: 'popular', page: page });
};

export const getLatestMovies = ({ page }) => {
  return basicQuery({ entertainment: 'movie', type: 'latest', page: page });
};

export const getNowPlayingMovies = ({ page }) => {
  return basicQuery({
    entertainment: 'movie',
    type: 'now_playing',
    page: page,
  });
};

export const getUpcomingMovies = ({ page }) => {
  return basicQuery({ entertainment: 'movie', type: 'upcoming', page: page });
};

export const getSpecificMovie = ({ movie, page }) => {
  return basicQuery({
    entertainment: 'movie',
    page: page,
    searchParam: movie,
    adult: true,
  });
};
