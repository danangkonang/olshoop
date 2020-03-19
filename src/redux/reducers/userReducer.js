import actionType from '../actions/actionType'

const initialState = {
   value : 0,
   age : 2,
   is_login:false
}

const reducer = (state = initialState,action)=>{
   switch(action.type){
      case actionType.ADD_AGE:
         return{
            ...state,
            age : state.age + 1
         }
      default:
         return state
   }
}

export default reducer