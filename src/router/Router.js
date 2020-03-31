import React from 'react'
import ScreenDekstop from './RouterDekstop'
import ScreenMobile from './RouterMobile'
// import { createStore,applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from '../redux/reducers/globalReducer'
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

// const store = createStore(rootReducers,applyMiddleware(thunk))
const store = createStore(rootReducers)

const App = ()=>{
   if(isMobile){
      return(
         <Provider store={store}>
            <ScreenMobile/>
         </Provider>
      )
   }else{
      return(
         <Provider store={store}>
            <ScreenDekstop/>
         </Provider>
      )
   }
}

export default App