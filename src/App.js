import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { getPopularSeries } from './api/series';

const App = () => {
	useEffect(() => {
		const getData = async () => {
			const data = await getPopularSeries({page: 2})
			console.log(data);
		};
		// getData();
	}, []);

	return (
		<Router>
			<Switch>
				<Route path='/' />
				<Route path='/series' />
				<Route path='/movies' />
			</Switch>
		</Router>
	);
};

export default App;
