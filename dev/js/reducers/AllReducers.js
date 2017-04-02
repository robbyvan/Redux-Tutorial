//Combine reducers
import { combineReducers } from 'redux';

import UserReducer from './UserReducer.js';

const AllReducers = combineReducers({
  users: UserReducer
});
