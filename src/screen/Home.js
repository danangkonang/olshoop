import React, { Component,Fragment } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
export default class App extends Component {
   state={
      product:[],
      isLogin:true
   }

   componentDidMount(){
      
   }

   render(){
      return(
         <Fragment>
            <Header isLogin={this.state.isLogin}/>
            <Menu/>
            <a href="/detail">pindah halaman</a>
         </Fragment>
      )
   }
}