import {combineReducers} from 'redux';

import clog from './clog';

const rootReducer = combineReducers({clog});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>