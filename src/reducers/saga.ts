import { INCREMENT } from '@/constants/actionTypes';
import { INCREMENT_TYPE } from '@/actions/saga';

export interface LogState {
  count: number
}

const initialState: LogState = {
  count: 0,
};

const clogRecord = (state = initialState, action: INCREMENT_TYPE): LogState => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    default: {
      return state;
    }
  }
};

export default clogRecord;
