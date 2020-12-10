import React, { Component, ReactNode } from 'react';
import { Route } from 'react-router-dom';

import Nav, {NavRouteType} from './components/Layouts/Nav';
import Footer from './components/Layouts/Footer';

import Home from './modules/Home';
import About from './modules/About';
import Topics from './modules/Topics';
import Library from './modules/Library';
import Virtual from './modules/Virtual';


import './App.css';

const routes: NavRouteType[] = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: (<Home/>)
  },
  {
    path: '/about',
    title: 'About',
    component: (<About/>),
  },
  {
    path: '/topics',
    title: 'Topics',
    component: (<Topics/>),
  },
  {
    path: '/library',
    title: 'Library',
    component: (<Library/>),
  },
  {
    path: '/Virtual',
    title: 'Virtual',
    component: (<Virtual />),
  }
]


class App extends Component {

  render() {
    return (
      <div className="app">
        <h2>REACT MIN START UP</h2>
        <Nav routes={routes}></Nav>
        {
          routes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={
                () => <>{route.component}</>
              }
            />
          ))
        }
        <Footer />
      </div>
    );
  }
}

export default App;
