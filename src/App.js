import {hot} from 'react-hot-loader/root';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {add_clog, clear_clog} from './actions/clog';
import Clog from './components/Clog';

class App extends Component {
    constructor() {
        super();
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.clearButtonOnClick = this.clearButtonOnClick.bind(this);
    }

    buttonOnClick() {
        this.props.add_clog('log 123');
    }

    clearButtonOnClick() {
        this.props.clear_clog();
    }

    render () {
        return (
            <div id="app">
                flowers
                <br></br>
                <button onClick={this.buttonOnClick}>click to clog</button>
                <button onClick={this.clearButtonOnClick}>click to clear</button>
                <Clog></Clog>
            </div>
        );
    }
}

App.propTypes = {
    add_clog: PropTypes.func,
    clear_clog: PropTypes.func
};

// hot load
export default hot(connect(
    null,
    {add_clog, clear_clog}
)(App));
