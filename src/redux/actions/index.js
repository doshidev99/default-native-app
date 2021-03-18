import * as S from '../actionTypes';

export const incrementAction = (step) => ({
  type: S.INCREMENT,
  step,
});
