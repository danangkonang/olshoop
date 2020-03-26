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
      case actionType.IS_LOGIN:
         // console.log(action.payload)
         return{
            ...state,
            // is_login:!state.is_login
            is_login:action.payload
         }
      default:
         return state
   }
}

export default reducer