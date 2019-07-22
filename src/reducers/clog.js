import {ADD_LOG, CLEAR_LOG} from '../actionTypes';


const initialState = {
    logs: []
};

const clogRecord = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOG: {
            return {
                logs: [...state.logs, action.text]
            };
        }
        case CLEAR_LOG: {
            return {
                logs: []
            };
        }
        default: {
            return state;
        }
    }
};

export default clogRecord;
