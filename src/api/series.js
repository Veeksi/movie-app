import axios from 'axios';
import { basicQuery } from './default';

export const getSeries = ({ page, type }) => {
  return basicQuery({ entertainment: 'tv', type: type, page: page });
};

export const getSingleSerie = ({ id }) => {
  const getSerieData = basicQuery({ entertainment: 'tv', id: id });
  const getSimilarSeries = basicQuery({
    entertainment: 'tv',
    id: id,
    type: 'similar',
  });
  const getCredits = basicQuery({
    entertainment: 'tv',
    id: id,
    type: 'credits',
  });

  return axios.all([getSerieData, getSimilarSeries, getCredits]);
};
