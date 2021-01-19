import { basicQuery } from './default';

export const getMovies = ({ page, type }) => {
  return basicQuery({ entertainment: 'movie', type: type, page: page });
};

export const getSpecificMovie = ({ movie, page }) => {
  return basicQuery({
    entertainment: 'movie',
    page: page,
    searchParam: movie,
    adult: true,
  });
};
