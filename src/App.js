import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Common/Footer';
import Main from './components/Common/Main';
import Movies from './components/Movies';
import Navbar from './components/Common/Navbar';
import Search from './components/Search';
import Series from './components/Series';
import SingleMovie from './components/Movies/SingleMovie';
import SingleSerie from './components/Search/SingleSerie';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('movie');

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-300">
        <Navbar setSearchValue={setSearchValue} setSearchType={setSearchType} />
        <Switch>
          <Route path="/movies/:id" component={Movies} />
          <Route path="/series/:id" component={Series} />
          <Route path="/movie/:id" component={SingleMovie} />
          <Route path="/tv/:id" component={SingleSerie} />
          <Route path="/search">
            <Search searchType={searchType} searchValue={searchValue} />
          </Route>
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
