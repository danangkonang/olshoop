import React, {  } from 'react'
import '../styles/header.scss'
import Search from '../components/InputSearch'
const App = ()=> {
   return(
      <div className="header" >
         <div className="colom1" style={{background:'tomato'}}>
            <div className="flex-1">
               a
            </div>
            <div className="flex-1" style={{background:'#aaa'}}>
               <a href="/">
                  notifikasi
               </a>
               <a href="/">
                  bantuan
               </a>
               <a href="/">
                  login
               </a>
               <a href="/">
                  daftar
               </a>
            </div>
         </div>
         <div className="colom2" style={{background:'red'}}>

           <div className="sub-col1">
               1
           </div>
           <div className="sub-col2">
               <Search/>
           </div>
           <div className="sub-col3">
               <div className="link-accunt">
                  <a href="/">akun</a>
               </div>
               <span>|</span>
               <div className="link-accunt">
                  <a href="/">pasang iklan</a>
               </div>
           </div>

         </div>
      </div>
   )
}

export default App
