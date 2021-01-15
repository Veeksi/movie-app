import { basicQuery } from './default';

export const getPopularSeries = ({ page }) => {
	return basicQuery({ entertainment: 'tv', type: 'popular', page: page });
};

export const getLatestSeries = ({ page }) => {
	return basicQuery({ entertainment: 'tv', type: 'latest', page: page });
};

export const getNowPlayingSeries = ({ page }) => {
	return basicQuery({ entertainment: 'tv', type: 'now_playing', page: page });
};

export const getUpcomingSeries = ({ page }) => {
	return basicQuery({ entertainment: 'tv', type: 'upcoming', page: page });
};

export const getSpecificSerie = ({ tv, page }) => {
	return basicQuery({
		entertainment: 'tv',
		page: page,
		searchParam: tv,
	});
};
