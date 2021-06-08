import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addClog, clearClog, warningClearClog } from '@/actions/clog';
import Clog from './Clog';

const mapDispatchToProps = { addClog, clearClog, warningClearClog };
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class Home extends Component<PropsFromRedux> {
  constructor(props: PropsFromRedux) {
    super(props);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.clearButtonOnClick = this.clearButtonOnClick.bind(this);
    this.niceClearButtonOnClick = this.niceClearButtonOnClick.bind(this);
  }

  buttonOnClick() {
    this.props.addClog('log 123');
  }

  clearButtonOnClick() {
    this.props.clearClog();
  }

  niceClearButtonOnClick() {
    this.props.warningClearClog();
  }

  render() {
    return (
      <div>
        <div id="app">
          <h4>HOME REACT REDUX THUNK TEST.</h4>
          <br></br>
          <button onClick={this.buttonOnClick}>click to clog</button>
          <button onClick={this.clearButtonOnClick}>click to clear</button>
          <button onClick={this.niceClearButtonOnClick}>nice to clear</button>
          <Clog></Clog>
        </div>
      </div>
    );
  }
}
export default connector(Home);
