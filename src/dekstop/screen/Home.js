import React, { useState,Fragment,useEffect } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Card from '../components/Card'
import axios from 'axios'
// var MobileDetect = require('mobile-detect')
import Footer from '../components/Footer'
const App =()=> {
   // https://frozen-island-74204.herokuapp.com/
   const[isLogin]=useState(false)
   const[product,setProduct]=useState([])
   const[token,setToken]=useState('')

   useEffect(()=>{
      getToken()
      getProducts()
   })

   const getToken =async()=>{
      let tkn =await localStorage.getItem('token')
      setToken(tkn)
   }

   const getProducts = async()=>{
      try{
         let res = await axios({
            method: 'get',
            url: 'http://localhost:9000/get-products',
            Header:{
               Autorization: `Bearer ${token}`      
            }
         })
         if(res.data!==null){
            setProduct(res.data)
         }
      }catch(e){
         console.log(e)
      }
   }
   
   // async componentDidMount(){
   //    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   //    console.log(isMobile)
   // }

   
      return(
         <Fragment>
            <Header isLogin={isLogin}/>
            <Menu/>
            <Card product={product}/>
            <Footer/>
         </Fragment>
      )
   
}

export default App