import * as S from '../actionTypes';

const initialState = 0;

export const counterReducers = (times = initialState, action) => {
  switch (action.type) {
    case S.INCREMENT:
      return times + action.step;
    case S.DECREMENT:
      return times - action.step;
    default:
      return times;
  }
};
