import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Common/Footer';
import Main from './components/Common/Main';
import Movies from './components/Movies';
import Navbar from './components/Common/Navbar';
import Search from './components/Search';
import Series from './components/Series';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('movie');

  return (
    <Router>
      <Navbar
        setSearchValue={setSearchValue}
        setSearchType={setSearchType}
      />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/search">
          <Search searchType={searchType} searchValue={searchValue} />
        </Route>
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
