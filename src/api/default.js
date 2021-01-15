import axios from 'axios';

export const basicQuery = async (entertainment, type) => {
	const params = {
		api_key: `api_key=${process.env.REACT_APP_API_KEY}`,
		// entertainment: 'movie', // movie, tv
		// type: 'popular', // popular, latest, now_playing, upcoming, top_rated
		base_uri: process.env.REACT_APP_BASE_URI,
		language: 'language=en-US',
		page: 1,
	};

	const query = `${params.base_uri}/${entertainment}/${type}?${params.api_key}&${params.language}&page=${params.page}`;

	try {
		const result = await axios.get(query);
		return result;
	} catch (e) {
		console.error(e);
	}
};
