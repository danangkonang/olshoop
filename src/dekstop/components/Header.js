import React, { useState, useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {
   FiSearch
} from 'react-icons/fi'
import Link from './LinkButton'
import { from } from 'rxjs'
const App = (props)=> {
   const [search,setSearch]=useState(false)
   const [key,setKey]=useState('')
   const [over,setOver]=useState(false)
   const searchProduct =()=>{
      setSearch(!search)
   }

   useEffect(()=>{
      console.log(props)
   },[])

   const boxSeacrh = ()=>{
      if(search){
         return(
            <div className="box-auto-sugest-container" >
               <div className="box-auto-sugest-content">
                  <ul>
                     <li><a>{key}</a></li>
                     <li><a>pencarian barang</a></li>
                  </ul>
               </div>
            </div>
         )
      }
   }

   const bacgroundBlock = ()=>{
      if(search){
         return <div className="background-block-container"/>
      }
   }

   const onChange = (v)=>{
      setKey(v.target.value)
   }

   const downloadAplikasi = ()=>{
      if(over){
         return(
            <div className="conmtainer-download-aplikasi">
               tes
            </div>
         )
      }
   }

   return(
      <div className="header-ecomers" >
         <div className="colom">
            <div className="sub-colom sub-colom-left">
               <a 
               onMouseOver={()=>setOver(true)} 
               // onMouseOut={()=>setOver(!over)} 
               href="/">Download</a>
               {
                  downloadAplikasi()
               }
            </div>
            <div className="sub-colom sub-colom-right">
               {/* <a href="/">Notifikasi</a> */}
               <button onClick={
                  async()=>{
                  await localStorage.removeItem('token')
               }}>
                  keluar
               </button>
               <a href="/post-product">Pasang iklan</a>
            </div>
         </div>
         <div className="colom">
           <div className="sub-colom-1">
               <a href="/">ceodeaja</a>
               {/* <a></a> */}
           </div>
           <div className="sub-colom-2">
               <div className="search-box">
                  <FiSearch size={20} className="icon-seacrch"/>
                  <input 
                     onFocus={searchProduct} 
                     onBlur={searchProduct}
                     onChange={(v)=>onChange(v)}
                     type="text" 
                     className="input-search-box" 
                     placeholder="cari apa?" />
               </div>
               {
                  boxSeacrh()
               }
            </div>
            <div className="sub-colom-3">
               {/* <div className="accunt">
                     <div className="link-accunt">
                        <a href="/profil">akun</a>
                     </div>
                     <div className="link-accunt">
                        <a href="/post-product">iklan</a>
                     </div>
                  </div> */}
                  {
                     !props.isLogin?
                     <div className="accunt">
                        <div className="link-accunt">
                           <Link
                              link="/registrasi"
                              title="Daftar"/>
                        </div>
                        <div className="link-accunt">
                           <Link
                              link="login"
                              title="Login"
                              outline={true}/>
                        </div>
                     </div>
                     :
                     <div className="link-accunt">
                        <a href="/profil">Akun</a>
                     </div>
                  }
            </div>
         </div>
         {
            bacgroundBlock()
         }
      </div>
   )
}

export default App
