import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Hook from './Hook';
import Hoc from './Hoc';
import Ref from './Ref';
import Context from './Context';
import Memo from './Memo';

import styles from './Topics.css';

export default class Topics extends Component {
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <div className={styles['topicslink']}>
          <Link to="/topics/hook">Hook</Link>
          <Link to="/topics/hoc">hoc</Link>
          <Link to="/topics/ref">ref</Link>
          <Link to="/topics/context">Context</Link>
          <Link to="/topics/memo">Memo</Link>
        </div>
        <div className="topic">
          <Switch>
            <Route exact path="/topics">
              <h3>Please select a topic.</h3>
            </Route>
            <Route path="/topics/hook">
              <Hook />
              Hooks
            </Route>
            <Route path="/topics/hoc">
              <Hoc />
            </Route>
            <Route path="/topics/ref">
              <Ref />
            </Route>
            <Route path="/topics/context">
              <Context />
            </Route>
            <Route path="/topics/memo">
              <Memo />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
