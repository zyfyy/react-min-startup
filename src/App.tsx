import React, { Component, FunctionComponent, ReactComponentElement, ReactElement } from 'react';
import { Route } from 'react-router-dom';

import Nav, {NavRouteType} from './components/Layouts/Nav';
import Footer from './components/Layouts/Footer';

import Home from './modules/Home';
import About from './modules/About';
import Topics from './modules/Topics';


const routes: NavRouteType[] = [
  {
    path: '/',
    text: 'Home',
    component: Home,
  },
  {
    path: '/about',
    text: 'About',
    component: About
  },
  {
    path: '/topics',
    text: 'Topics',
    component: Topics
  }
]


class App extends Component {

  render() {
    return (
      <>
        <h2>TITLE: REACT MIN START UP</h2>
        <Nav routes={routes}></Nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />

        <Footer />
      </>
    );
  }
}

export default App;
