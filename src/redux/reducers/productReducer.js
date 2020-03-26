import actionType from '../actions/actionType'

const initialState = {
   products:[]
}

const reducer = (state = initialState,action)=>{
   switch(action.type){
      case actionType.GET_PRODUCTS:
         return{
            ...state,
            products : []
         }
      default:
         return state
   }
}

export default reducer