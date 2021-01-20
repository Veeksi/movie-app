import axios from 'axios';
import { basicQuery } from './default';

export const getMovies = ({ page, type }) => {
  return basicQuery({ entertainment: 'movie', type: type, page: page });
};

export const getSingleMovie = ({ id }) => {
  const getMovieData = basicQuery({ entertainment: 'movie', id: id });
  const getSimilarMovies = basicQuery({
    entertainment: 'movie',
    id: id,
    type: 'similar',
  });

  return axios.all([getMovieData, getSimilarMovies]);
};

export const getSimilarMovies = ({ id }) => {
  return basicQuery({ entertainment: 'movie', id: id, type: 'similar' });
};
