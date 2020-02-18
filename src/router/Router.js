import React from 'react'
import Router from './RouterDekstop'
// import { render } from '@testing-library/react'
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const App = ()=>{
   if(isMobile){
      return(
         <div><h1>hellow word danang</h1></div>
      )
   }else{
      return(
         <Router/>
      )
   }
}

export default App