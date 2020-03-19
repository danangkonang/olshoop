import React from 'react'
import Router from './RouterDekstop'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../redux/reducers/globalReducer'
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const store = createStore(reducers)

const App = ()=>{
   if(isMobile){
      return(
         <div><h1>hellow word danang</h1></div>
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