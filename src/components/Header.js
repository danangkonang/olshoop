import React, { useState,useEffect } from 'react'
import '../styles/dekstop.scss'

import {
   AiOutlineSearch
} from 'react-icons/ai'
// import { from } from 'rxjs'
// let width = window.innerWidth
const App = ()=> {
   return(
      <div className="header" >
         <div className="colom" style={{background:'tomato'}}>
            a
         </div>
         <div className="colom" style={{background:'red'}}>
            <div className="wrapper">
               <div className="search-box" style={{background:'pink'}}>
                  <input type="text" placeholder="Search.." name="search"/>
                  <button className="btn-seacrh" type="submit">
                     {/* <i class="fa fa-search"></i> */}
                     <AiOutlineSearch/>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default App






// import React, { Component } from 'react'
// import{
//    AiOutlineUser,
//    AiOutlineBell
// }from 'react-icons/ai'
// export default class App extends Component {
//    constructor(props){
//       super(props)
//       this.state={
//          width: 0
//       }
//    }

//    updateDimensions = () => {
//       this.setState({ width: window.innerWidth })
//    }
//    componentDidMount() {
//       this.setState({ width: window.innerWidth })
//       window.addEventListener('resize', this.updateDimensions)
//    }
//    componentWillUnmount() {
//       window.removeEventListener('resize', this.updateDimensions)
//    }

//    render(){
//       const {width}=this.state
//       return(
//          <div className="container-fluid">
//             <div className="row" style={{backgroundColor:'#1E90FF'}}>
//                {  
//                   width > 768 || width === 0?
//                   <div className="col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
//                      <span>width: {this.state.width}</span>
//                   </div>:null
//                }
//                <div className="col-8 col-md-7 col-lg-7  p-2">
//                   <input className="form-control" type="text" placeholder="Nama produk"/>
//                </div>
//                {
//                   this.props.isLogin === false?
//                   <div className="col-4 col-md-2 col-lg-2 d-flex align-items-center justify-content-around">
//                      <a href="/notifikasi">
//                         <AiOutlineBell color="#2C3E50" size={25}/>
//                      </a>
//                      <a href="/profil">
//                         <AiOutlineUser color="#2C3E50" size={25}/>
//                      </a>
//                   </div>
//                   :
//                   <div className="col-4 col-md-2 col-lg-2 d-flex align-items-center justify-content-around">
//                      <a href="/registrasi" className="text-decoration-none text-white">
//                         Daftar
//                      </a>
//                      <span className="font-weight-bold text-white"> | </span>
//                      <a href="/login" className="text-decoration-none text-white">
//                         Login
//                      </a>
//                   </div>
//                }
//             </div>
//          </div>
//       )
//    }
// }