import { INCREMENT ,INCREMENT_ASYNC } from '../constants/actionTypes';

export interface INCREMENT_TYPE {
  type: typeof INCREMENT
}

export interface INCREMENT_ASYNC_TYPE {
  type: typeof INCREMENT_ASYNC
}

export function increase(): INCREMENT_ASYNC_TYPE {
  return {
    type: INCREMENT_ASYNC
  };
}
