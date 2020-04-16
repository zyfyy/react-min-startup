import {hot} from 'react-hot-loader/root';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Topics from './containers/Topics';

import './App.css';

import {themes, ThemeContext} from './theme-context';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="crumbs">
            <ol>
              <li className="crumb">
                <Link to="/">Home</Link>
              </li>
              <li className="crumb">
                <Link to="/about">About</Link>
              </li>
              <li className="crumb">
                <Link to="/topics">Topics</Link>
              </li>
            </ol>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <ThemeContext.Provider value={themes.light}>
            <Route path="/topics" component={Topics} />
          </ThemeContext.Provider>
        </div>
      </Router>
    );
  }
}

// hot load
export default hot(App);
