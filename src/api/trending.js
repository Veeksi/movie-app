import { basicQuery } from './default';

// getTrendings({ page: 2, media_type: all, length: week })
export const getTrendings = ({ page, media_type, length }) => {
	return basicQuery({
		page: page,
		trending: 'trending',
		media_type: media_type, // all, movie, tv, person
		length: length, // day, week
	});
};
