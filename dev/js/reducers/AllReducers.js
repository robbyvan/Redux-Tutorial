import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer.js'

export const AllReducers = combineReducers({
  users: UserReducer
});
