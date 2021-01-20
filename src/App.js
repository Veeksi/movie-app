import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Common/Footer';
import Main from './components/Common/Main';
import Movies from './components/Movies';
import Navbar from './components/Common/Navbar';
import ScrollIntoView from './components/Common/ScrollIntoView';
import Search from './components/Search';
import Series from './components/Series';
import SingleMovie from './components/Movies/SingleMovie';
import SingleSerie from './components/Series/SingleSerie';
import { ThemeProvider } from './utils/themeContext';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('movie');

  return (
    <Router>
      <ScrollIntoView>
        <ThemeProvider>
          <div className="flex flex-col h-screen bg-secondary">
            <Navbar
              setSearchValue={setSearchValue}
              setSearchType={setSearchType}
            />
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
        </ThemeProvider>
      </ScrollIntoView>
    </Router>
  );
};

export default App;
