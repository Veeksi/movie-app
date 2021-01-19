import { basicQuery } from './default';

export const getSeries = ({ page, type }) => {
  return basicQuery({ entertainment: 'tv', type: type, page: page });
};
