import { takeEvery } from 'redux-saga/effects';
import * as S from '../actionTypes';

// eslint-disable-next-line require-yield
function* increment() {
  console.log('increment saga', '');
}

// eslint-disable-next-line require-yield
function* decrement() {
  console.log('decrement saga', '');
}

export function* watchIncrement() {
  yield takeEvery(S.INCREMENT, increment);
  yield takeEvery(S.DECREMENT, decrement);
}
