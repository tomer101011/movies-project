import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* eslint-disable */
import zenscroll from 'zenscroll';
/* eslint-enabled */

import './App.css';

import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import MovieInfo from './components/MovieInfo.js';
import AddMovie from './components/AddMovie.js';
import AllMovies from './components/AllMovies.js';
import *  as ROUTES from './constants/routes.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">

        <Router>

          <NavBar />

          <Switch>
            <Route exact path={ROUTES.HOME} render={(props) => <HomePage {...props} />} />
            <Route exact path={ROUTES.MOVIE} render={(props) => <MovieInfo {...props} />} />
            <Route exact path={ROUTES.ADD_MOVIE} render={(props) => <AddMovie {...props} />} />
            <Route exact path={ROUTES.ALL_MOVIES} render={(props) => <AllMovies {...props} />} />
          </Switch>

        </Router>

      </div>
    );
  }
}
