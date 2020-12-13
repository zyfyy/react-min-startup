import React, { Component, ReactNode } from 'react';
import { Route } from 'react-router-dom';

import Nav, { NavRouteType } from './components/Layouts/Nav';
import Footer from './components/Layouts/Footer';

import Home from './modules/Home';
import About from './modules/About';
import Basics from './modules/Basics';
import Library from './modules/Library';
import Virtual from './modules/Virtual';
import Hooks from './modules/Hooks';

import './App.css';

const routes: NavRouteType[] = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: <Home />,
  },
  {
    path: '/basics',
    title: 'Basics',
    component: <Basics />,
  },
  {
    path: '/library',
    title: 'Library',
    component: <Library />,
  },
  {
    path: '/virtual',
    title: 'Virtual',
    component: <Virtual />,
  },
  {
    path: '/hooks',
    title: 'Hooks',
    component: <Hooks />,
  },
  {
    path: '/about',
    title: 'About',
    component: <About />,
  },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>REACT MIN START UP</h2>
        <Nav routes={routes}></Nav>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            exact={route.exact}
            path={route.path}
            component={() => <>{route.component}</>}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
