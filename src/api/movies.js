import { basicQuery } from './default';

export const getMovies = ({ page, type }) => {
  return basicQuery({ entertainment: 'movie', type: type, page: page });
};
