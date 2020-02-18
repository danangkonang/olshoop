import React, {  } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const App = ()=> {
   return(
      <div className="header-ecomers" >
         <div className="colom">
            <div className="sub-colom sub-colom-left">
               <a href="/">notifikasi</a>
               <a href="/">bantuan</a>
               <a href="/">login</a>
               <a href="/">daftar</a>
            </div>
            <div className="sub-colom sub-colom-right">
               <a href="/">notifikasi</a>
               <a href="/">bantuan</a>
               <a href="/">login</a>
               <a href="/">daftar</a>
            </div>
         </div>
         <div className="colom" style={{background:'red'}}>
           <div className="sub-colom-1">
               <a href="/">akun</a>
               <a href="/">iklan</a>
               <a href="/">akun</a>
               <a href="/">iklan</a>
               <a href="/">akun</a>
               <a href="/">iklan</a>
           </div>
           <div className="sub-colom-2">
               <div className="search-box">
                  <input type="text" className="input-search-box" placeholder="search" />
                     <AiOutlineSearch color="red" size={25} className="icon-seacrch"/>
               </div>
           </div>
           <div className="sub-colom-3">
               <div className="link-accunt">
                  <a href="/">akun</a>
               </div>
               <span>|</span>
               <div className="link-accunt">
                  <a href="/">iklan</a>
               </div>
           </div>
         </div>
      </div>
   )
}

export default App
