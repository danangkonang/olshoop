import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 import Home from '../screen/Home'
 import Detail from '../screen/Detail'
 export default class App extends React.Component {
   
   render() {
      console.log(process.env.PUBLIC_URL)
      console.log('tes')
      return (
         <Router basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/detail'} component={Detail}/>
            </Switch>
         </Router>
      )
   }
}
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
// basename={`${process.env.PUBLIC_URL}/`}