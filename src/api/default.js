import axios from 'axios';

export const basicQuery = async (props) => {
	const { page, searchParam, adult, entertainment, type } = props;

	const params = {
		api_key: `api_key=${process.env.REACT_APP_API_KEY}`,
		base_uri: process.env.REACT_APP_BASE_URI,
		language: 'language=en-US',
		page: page ? `&page=${page}` : '',
		searchParam: searchParam ? `&query=${encodeURIComponent(searchParam)}` : '',
		adult: adult ? `${true}` : `${false}`,
		entertainment: entertainment ? entertainment : '',
		type: type ? type : '',
	};

	let query;

	params.searchParam
		? (query = `${params.base_uri}/search/${params.entertainment}/?${params.api_key}&${params.language}&${params.searchParam}&${params.page}&${params.adult}`)
		: (query = `${params.base_uri}/${params.entertainment}/${params.type}?${params.api_key}&${params.language}${params.page}`);

	try {
		const result = await axios.get(query);
		return result;
	} catch (e) {
		console.error(e);
	}
};
