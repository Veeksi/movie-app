import axios from 'axios';

const defaultParams = {
  api_key: `api_key=${process.env.REACT_APP_API_KEY}`,
  base_uri: process.env.REACT_APP_BASE_URI,
  language: 'language=en-US',
};

export const basicQuery = async (props) => {
  const {
    page,
    searchParam,
    entertainment,
    type,
    trending,
    media_type,
    length,
    id,
  } = props;

  const params = {
    ...defaultParams,
    page: page ? `&page=${page}` : '',
    searchParam: searchParam ? `&query=${encodeURIComponent(searchParam)}` : '',
    entertainment: entertainment ? entertainment : '',
    type: type ? type : '',
    trending: trending ? trending : '',
    media_type: media_type ? media_type : '',
    length: length ? length : '',
    id: id ? id : '',
  };

  let query;

  // Search - Specific movie
  // Trending - Main page trending movies & series
  // Single search - Specific movie, tv, etc or similar movies / series
  // Lists - Movie lists & Tv lists

  if (params.searchParam) {
    query = `${params.base_uri}/search/${params.entertainment}/?${params.api_key}&${params.language}&${params.searchParam}&${params.page}`;
  } else if (params.trending) {
    query = `${params.base_uri}/${params.trending}/${params.media_type}/${params.length}?${params.api_key}&${params.language}${params.page}`;
  } else if (params.id) {
    if (params.type) {
      query = `${params.base_uri}/${params.entertainment}/${params.id}/${params.type}?${params.api_key}&${params.language}`;
    } else {
      query = `${params.base_uri}/${params.entertainment}/${params.id}?${params.api_key}&${params.language} `;
    }
  } else {
    query = `${params.base_uri}/${params.entertainment}/${params.type}?${params.api_key}&${params.language}${params.page}`;
  }

  try {
    const result = await axios.get(query);
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const searchQuery = async (props) => {
  console.log(props);
};
