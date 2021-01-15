import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import React from 'react';
import { query } from './api/query';

const App = () => {
	query();
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
