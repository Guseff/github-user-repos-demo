import { combineReducers } from 'redux'

import users from './users'
import reposes from './reposes'



export default combineReducers({
  users,
  reposes
})