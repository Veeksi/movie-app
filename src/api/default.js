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
  };

  let query;

  if (params.searchParam) {
    // Search
    query = `${params.base_uri}/search/${params.entertainment}/?${params.api_key}&${params.language}&${params.searchParam}&${params.page}`;
  } else if (params.trending) {
    // Trending
    query = `${params.base_uri}/${params.trending}/${params.media_type}/${params.length}?${params.api_key}&${params.language}${params.page}`;
  } else {
    // Basic
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
