import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route
 } from "react-router-dom";
 import Home from '../screen/Home'
 import Detail from '../screen/Detail'
 import Coba from '../screen/Coba'
 export default class App extends React.Component {
   
   render() {
      return (
         <BrowserRouter >
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/detail'} component={Detail}/>
               <Route path={'/coba'} component={Coba}/>
            </Switch>
         </BrowserRouter>
      )
   }
}
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
