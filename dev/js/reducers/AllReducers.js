import { combineReducers } from 'redux'

import { UserReducer } from './UserReducer.js'
import { ActiveUserReducer } from './ActiveUserReducer.js'

export const AllReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});
