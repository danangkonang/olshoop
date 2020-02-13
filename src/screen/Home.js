import React, { Component,Fragment } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
export default class App extends Component {
   state={
      product:[],
      isLogin:true
   }

   componentDidMount(){
      var nua = navigator.userAgent
      var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
      console.log(nua)
      console.log(isAndroid)
      console.log(nua.indexOf(0))
   }

   render(){
      // console.log(navigator.userAgent)
      console.log(navigator)
      return(
         <Fragment>
            <Header isLogin={this.state.isLogin}/>
            <Menu/>
            <a href="/detail">pindah halaman</a>
         </Fragment>
      )
   }
}