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