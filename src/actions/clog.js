import {ADD_LOG, CLEAR_LOG} from '../actionTypes';

export function add_clog(text) {
    return {
        type: ADD_LOG,
        text
    };
}

export function clear_clog() {
    return {
        type: CLEAR_LOG
    };
}


export function warning_clear_clog() {
    return (dispatch) => {
        dispatch(add_clog('warning: logs will be cleard soon'));
        setTimeout(() => dispatch(clear_clog()), 2000);
    };
}
