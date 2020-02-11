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
         <Router>
            <Switch>
               <Route path={process.env.PUBLIC_URL + '/detail'} exact component={Home}/>
               <Route path={process.env.PUBLIC_URL + '/'} component={Detail}/>
            </Switch>
         </Router>
      )
   }
}
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
// basename={`${process.env.PUBLIC_URL}/`}