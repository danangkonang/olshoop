import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const App = ()=> {
   const [search,setSearch]=useState(false)
   const searchProduct =()=>{
      setSearch(!search)
   }

   const boxSeacrh = ()=>{
      if(search){
         return(
            <div className="box-auto-sugest-container" >
               <div className="box-auto-sugest-content">
               testing
               </div>
            </div>
         )
      }
   }

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
               <a href="/login">login</a>
               <a href="/registrasi">daftar</a>
            </div>
         </div>
         <div className="colom">
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
                  <AiOutlineSearch size={25} className="icon-seacrch"/>
                  <input 
                  onFocus={searchProduct} 
                  onBlur={searchProduct}
                  type="text" className="input-search-box" placeholder="search" />
               </div>
               {
                  boxSeacrh()
               }
           </div>
           <div className="sub-colom-3">
               <div className="accunt">
                  <div className="link-accunt">
                     <a href="/profil">akun</a>
                  </div>
                  <div className="link-accunt">
                     <a href="/post-product">iklan</a>
                  </div>
               </div>
           </div>
         </div>
      </div>
   )
}

export default App
