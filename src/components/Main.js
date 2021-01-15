import React, { useEffect, useState } from 'react';

import { getTrendings } from '../api/trending';

const Main = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const fetchData = async () => {
			console.log('Fetching');
			const data = await getTrendings({
				page: 1,
				media_type: 'all',
				length: 'week',
			});
			setData(data.data);
		};
		// fetchData();
	}, []);

	console.log(data);

	if (!data) {
		console.log('Loading');
		return <div>Loading...</div>;
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			{data.results.map((item, idx) => (
				<div key={idx} style={{ flex: 1 }}>
					<h1>{item.original_title}</h1>
					<p>{item.overview}</p>
					<img
						alt={"Can't be loaded"}
						src={`${process.env.REACT_APP_IMAGE_URI}${item.poster_path}`}
					/>
				</div>
			))}
		</div>
	);
};

export default Main;
