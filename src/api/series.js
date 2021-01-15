import { basicQuery } from './default';

export const getPopularSeries = () => {
	return basicQuery('tv', 'popular');
};

export const getLatestSeries = () => {
	return basicQuery('tv', 'latest');
};

export const getNowPlayingSeries = () => {
	return basicQuery('tv', 'now_playing');
};

export const getUpcomingSeries = () => {
	return basicQuery('tv', 'upcoming');
};
