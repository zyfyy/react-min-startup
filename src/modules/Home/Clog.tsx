import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';

import styles from './Clog.module.css';

type propTypes = {
  logList: Array<String>,
};

class Clog extends Component<propTypes> {
  constructor(props: propTypes) {
    super(props);
  }
  render() {
    return (
      <div className={styles.clog}>
        {this.props.logList.map((ele, idx) => {
          return <span key={idx}>{ele}</span>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const { logs } = state.clog;
  return { logList: logs };
}

export default connect(mapStateToProps)(Clog);
