import {hot} from 'react-hot-loader/root';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {add_clog, clear_clog, warning_clear_clog} from './actions/clog';
import Clog from './components/Clog';

import Home from './containers/Home';
import About from './containers/About';
import Topics from './containers/Topics';

class App extends Component {
    constructor() {
        super();
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.clearButtonOnClick = this.clearButtonOnClick.bind(this);
        this.niceClearButtonOnClick = this.niceClearButtonOnClick.bind(this);
    }

    static propTypes = {
        add_clog: PropTypes.func,
        clear_clog: PropTypes.func,
        warning_clear_clog: PropTypes.func
    }

    buttonOnClick() {
        this.props.add_clog('log 123');
    }

    clearButtonOnClick() {
        this.props.clear_clog();
    }

    niceClearButtonOnClick() {
        this.props.warning_clear_clog();
    }
    render () {
        return (
            <Router>
                <div>
                    <nav className="crumbs">
                        <ol>
                            <li className="crumb"><Link to="/">Home</Link></li>
                            <li className="crumb"><Link to="/about">About</Link></li>
                            <li className="crumb"><Link to="/topics">Topics</Link></li>
                            <li className="crumb">Jump Bike 3000</li>
                        </ol>
                    </nav>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />

                    <div id="app">
                        flowers flowers
                        <br></br>
                        <button onClick={this.buttonOnClick}>click to clog</button>
                        <button onClick={this.clearButtonOnClick}>click to clear</button>
                        <button onClick={this.niceClearButtonOnClick}>nice to clear</button>
                        <Clog ls="ls"></Clog>
                    </div>
                </div>
            </Router>
        );
    }
}


// hot load
export default hot(connect(
    null,
    {add_clog, clear_clog, warning_clear_clog}
)(App));
