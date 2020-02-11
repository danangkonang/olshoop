import React from 'react';
import {
   // HashRouter,
   BrowserRouter,
   Switch,
   Route
 } from "react-router-dom";
 import Home from '../screen/Home'
 import Detail from '../screen/Detail'
 export default class App extends React.Component {
   
   render() {
      // console.log(process.env.PUBLIC_URL)
      // basename={`${process.env.PUBLIC_URL}/`}
      // console.log('tes')
      return (
         <BrowserRouter 
         // basename={optionalString}
         // getUserConfirmation={optionalFunc}
         // hashType={optionalString}
         >
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/detail'} component={Detail}/>
            </Switch>
         </BrowserRouter>
      )
   }
}
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
// basename={`${process.env.PUBLIC_URL}/`}