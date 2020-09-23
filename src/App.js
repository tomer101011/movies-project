import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import *  as ROUTES from './constants/routes.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        
        <NavBar />

        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME} render={(props) => <HomePage {...props} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}
