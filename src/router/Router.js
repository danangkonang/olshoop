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
      return (
         <Router>
            <Switch>
               <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/>
               <Route path={process.env.PUBLIC_URL + '/detail'} component={Detail}/>
            </Switch>
         </Router>
      )
   }
}

