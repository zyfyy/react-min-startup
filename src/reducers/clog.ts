import { ADD_LOG, CLEAR_LOG } from '../constants/actionTypes';
import { ClogActionTypes } from '../actions/clog';

export type Log = string;
export interface LogState {
  logs: Log[];
}

const initialState: LogState = {
  logs: [],
};

const clogRecord = (state = initialState, action: ClogActionTypes): LogState => {
  switch (action.type) {
    case ADD_LOG: {
      return {
        logs: [...state.logs, action.text],
      };
    }
    case CLEAR_LOG: {
      return {
        logs: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default clogRecord;
