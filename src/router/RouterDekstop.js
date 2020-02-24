import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route
 } from "react-router-dom";
 import Home from '../dekstop/screen/Home'
 import Detail from '../dekstop/screen/Detail'
 import Coba from '../dekstop/screen/Coba'
 import Login from '../dekstop/screen/Login'
 import Registrasi from '../dekstop/screen/Registrasi'
 import Iklan from '../dekstop/screen/iklan'
 import '../dekstop/scss/dekstop.scss'
 export default class App extends React.Component {
   render() {
      return (
         <BrowserRouter >
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/detail'} component={Detail}/>
               <Route path={'/coba'} component={Coba}/>
               <Route path={'/login'} component={Login}/>
               <Route path={'/registrasi'} component={Registrasi}/>
               <Route path={'/iklan'} component={Iklan}/>
            </Switch>
         </BrowserRouter>
      )
   }
}
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
