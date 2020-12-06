import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './modules/Home';
import About from './modules/About';
import Topics from './modules/Topics';

import './App.css';

import { themes, ThemeContext } from './theme-context';

const Lazy = lazy(() => import('./modules/Lazy'));

class App extends Component {

  render() {
    return (
      <>
        <h2>TITLE: REACT MIN START UP</h2>
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

        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Lazy />
        </Suspense>
      </>
    );
  }
}

export default App;
