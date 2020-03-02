import React from 'react'
import {
   BrowserRouter,
   Switch,
   Route
 } from "react-router-dom"
 import Home from '../dekstop/screen/Home'
 import Detail from '../dekstop/screen/Detail'
 import Coba from '../dekstop/screen/Coba'
 import Login from '../dekstop/screen/auth/Login'
 import Registrasi from '../dekstop/screen/auth/Registrasi'
 import Iklan from '../dekstop/screen/Iklan'
 import Profil from '../dekstop/screen/user/Profil'
 import PostProduct from '../dekstop/screen/product/PostProduct'
 import ResetPassword from '../dekstop/screen/auth/ResetPassword'
 import ConfirmEmailReset from '../dekstop/screen/auth/ConfirmEmailReset'
 import Otp from '../dekstop/screen/auth/Otp'
 import '../dekstop/scss/dekstop.scss'
 const App = ()=> {
      return (
         <BrowserRouter >
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/detail'} component={Detail}/>
               <Route path={'/coba'} component={Coba}/>
               <Route path={'/login'} component={Login}/>
               <Route path={'/registrasi'} component={Registrasi}/>
               <Route path={'/iklan'} component={Iklan}/>
               <Route path={'/profil'} component={Profil}/>
               <Route path={'/post-product'} component={PostProduct}/>
               <Route path={'/reset-password'} component={ResetPassword}/>
               <Route path={'/confirm-email'} component={ConfirmEmailReset}/>
               <Route path={'/otp'} component={Otp}/>
            </Switch>
         </BrowserRouter>
      )
   }
export default App
// https://github.com/rockchalkwushock/rcws-development/blob/master/src/Routes.js
