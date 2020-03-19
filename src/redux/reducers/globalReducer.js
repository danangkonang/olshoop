import { combineReducers } from 'redux'
import user from './userReducer'

const rootReducers = combineReducers({
   user:user
})

export default rootReducers
