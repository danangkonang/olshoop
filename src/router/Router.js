import React from 'react'
import Router from './RouterDekstop'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducers from '../redux/reducers/globalReducer'
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const store = createStore(rootReducers,applyMiddleware(thunk))

const App = ()=>{
   if(isMobile){
      return(
         <Provider store={store}>
            <div><h1>hellow word danang</h1></div>
         </Provider>
      )
   }else{
      return(
         <Provider store={store}>
            <Router/>
         </Provider>
      )
   }
}

export default App