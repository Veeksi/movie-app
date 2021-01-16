import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Common/Footer';
import Main from './components/Common/Main';
import Movies from './components/Movies';
import Navbar from './components/Common/Navbar';
import React from 'react';
import Series from './components/Series';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/movies' component={Movies} />
				<Route path='/series' component={Series} />
				<Route path='/' component={Main} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
