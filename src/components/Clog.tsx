import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Clog.css';
type propTypes = {
  logList: Array<String>,
};

class Clog extends Component<propTypes> {
  constructor(props: propTypes) {
    super(props);
  }
  render() {
    return (
      <div className="clog">
        {this.props.logList.map((ele, idx) => {
          return <span key={idx}>{ele}</span>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {logs} = state.clog;
  return {logList: logs};
}

export default connect(mapStateToProps)(Clog);
