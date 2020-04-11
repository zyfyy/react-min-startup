import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {add_clog, clear_clog, warning_clear_clog} from '../actions/clog';
import Clog from '../components/Clog';

class Home extends Component {
  constructor() {
    super();
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.clearButtonOnClick = this.clearButtonOnClick.bind(this);
    this.niceClearButtonOnClick = this.niceClearButtonOnClick.bind(this);
  }

  static propTypes = {
    add_clog: PropTypes.func,
    clear_clog: PropTypes.func,
    warning_clear_clog: PropTypes.func,
  };

  buttonOnClick() {
    this.props.add_clog('log 123');
  }

  clearButtonOnClick() {
    this.props.clear_clog();
  }

  niceClearButtonOnClick() {
    this.props.warning_clear_clog();
  }

  render() {
    return (
      <div>
        <div id="app">
          HOME TEST.
          <br></br>
          <button onClick={this.buttonOnClick}>click to clog</button>
          <button onClick={this.clearButtonOnClick}>click to clear</button>
          <button onClick={this.niceClearButtonOnClick}>nice to clear</button>
          <Clog ls="ls"></Clog>
        </div>
      </div>
    );
  }
}
export default connect(null, {add_clog, clear_clog, warning_clear_clog})(Home);
