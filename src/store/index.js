import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers';

let middleware = [thunk];
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middleware));
