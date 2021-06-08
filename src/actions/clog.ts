import { Dispatch } from 'redux';
import { ADD_LOG, CLEAR_LOG } from '../constants/actionTypes';
import { Log } from '../reducers/clog';

interface AddClog {
  type: typeof ADD_LOG;
  text: Log;
}

interface ClearClog {
  type: typeof CLEAR_LOG;
}

export type ClogActionTypes = AddClog | ClearClog;

export function addClog(text: string): ClogActionTypes {
  return {
    type: ADD_LOG,
    text,
  };
}

export function clearClog(): ClogActionTypes {
  return {
    type: CLEAR_LOG,
  };
}

export function warningClearClog() {
  return (dispatch: Dispatch) => {
    dispatch(addClog('warning: logs will be cleard soon'));
    setTimeout(() => dispatch(clearClog()), 2000);
  };
}
