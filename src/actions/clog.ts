import { Dispatch } from 'redux';
import {ADD_LOG, CLEAR_LOG} from '../actionTypes';
import {Log} from '../reducers/clog'

interface AddClog {
  type: typeof ADD_LOG
  text: Log
}

interface ClearClog {
  type: typeof CLEAR_LOG
}

export type ClogActionTypes = AddClog | ClearClog;

export function add_clog(text: string): ClogActionTypes{
  return {
    type: ADD_LOG,
    text,
  };
}

export function clear_clog(): ClogActionTypes {
  return {
    type: CLEAR_LOG,
  };
}

export function warning_clear_clog() {
  return (dispatch: Dispatch) => {
    dispatch(add_clog('warning: logs will be cleard soon'));
    setTimeout(() => dispatch(clear_clog()), 2000);
  };
}
