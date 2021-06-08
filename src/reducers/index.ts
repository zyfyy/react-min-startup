import { combineReducers } from 'redux';

import clog from './clog';
import saga from './saga';

const rootReducer = combineReducers({ clog, saga });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
