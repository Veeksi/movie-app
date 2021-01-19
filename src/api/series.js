import { basicQuery } from './default';

export const getSeries = ({ page, type }) => {
  return basicQuery({ entertainment: 'tv', type: type, page: page });
};

export const getSpecificSerie = ({ searchParam, page, entertainment }) => {
  return basicQuery({
    entertainment: entertainment,
    page: page,
    searchParam: searchParam,
  });
};
