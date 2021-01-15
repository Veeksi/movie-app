import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Movies from './components/Movies';
import Series from './components/Series';
import { getPopularSeries } from './api/series';
import { getTrendings } from './api/trending';

const App = () => {
	useEffect(() => {
		const getData = async () => {
			const data = await getTrendings({
				page: 2,
				media_type: 'all',
				length: 'week',
			});
			console.log(data);
		};
		// getData();
	}, []);

	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/movies' component={Movies} />
				<Route path='/series' component={Series} />
				<Route path='/' component={Main} />
			</Switch>
		</Router>
	);
};

export default App;
