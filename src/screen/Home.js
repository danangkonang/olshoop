import React, { Component,Fragment } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
export default class App extends Component {
   state={
      product:[],
      isLogin:true
   }
   render(){
      return(
         <Fragment>
            <Header isLogin={this.state.isLogin}/>
            <Menu/>
         </Fragment>
      )
   }
}