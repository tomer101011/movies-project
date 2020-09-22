import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage.js';
import NavBar from './components/NavBar.js';
import *  as ROUTES from './constants/routes.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      render: ''
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar renderAgain={() => this.setState({ render: 'done' })} />

        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME} render={(props) => <HomePage {...props} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}
