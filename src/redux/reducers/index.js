import { combineReducers } from 'redux';

import { counterReducers } from './counterReducers';

const rootReducers = combineReducers({
  counterReducers,
});

export default rootReducers;
