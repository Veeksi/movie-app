import { basicQuery } from './default';

export const getSpecificList = ({ searchParam, page, entertainment }) => {
  return basicQuery({
    entertainment: entertainment,
    page: page,
    searchParam: searchParam,
  });
};
