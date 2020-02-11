import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
 import Home from '../screen/Home'
 export default class App extends React.Component {
   
   render() {
      return (
         <Router>
            <Switch>
               <Route path="/" exact component={Home}/>
            </Switch>
         </Router>
      )
   }
}