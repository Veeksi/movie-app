import { basicQuery } from './default';

export const getMovies = ({ page, type }) => {
  return basicQuery({ entertainment: 'movie', type: type, page: page });
};

export const getSingleMovie = ({ id }) => {
  return basicQuery({ entertainment: 'movie', id: id });
};
