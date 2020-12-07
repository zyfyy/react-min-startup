import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@/reducers';

import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();



const middleware: Middleware[] = [thunk, sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}


export default createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
