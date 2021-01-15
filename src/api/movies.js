import { basicQuery } from './default';

export const getPopularMovies = () => {
	return basicQuery('movie', 'popular');
};

export const getLatestMovies = () => {
	return basicQuery('movie', 'latest');
};

export const getNowPlayingMovies = () => {
	return basicQuery('movie', 'now_playing');
};

export const getUpcomingMovies = () => {
	return basicQuery('movie', 'upcoming');
};
