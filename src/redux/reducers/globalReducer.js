import { combineReducers } from 'redux'
import user from './userReducer'
import product from './productReducer'

const rootReducers = combineReducers({
   user:user,
   product:product
})

export default rootReducers
