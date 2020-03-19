import React, { useState,Fragment,useEffect } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Card from '../components/Card'
import axios from 'axios'
// var MobileDetect = require('mobile-detect')
import Footer from '../components/Footer'
import {useSelector, useDispatch} from 'react-redux'
import {getAge} from '../../redux/actions/userAction'
const App =(props)=> {
   // https://frozen-island-74204.herokuapp.com/
   const [isLogin]=useState(false)
   const [product,setProduct]=useState([])
   
   let [userToken,setToken]=useState('tes')

   useEffect(()=>{
      const getToken =async()=>{
         try{
            let tkn =await localStorage.getItem('token')
            setToken(()=>tkn)
         }catch(e){
            console.log(e)
         }
      }
      getToken()
   })

   const user = useSelector(state=>state.user)
   const dispatch = useDispatch()
   useEffect(()=>{
      console.log(user)
   },[user])

   useEffect(()=>{
      dispatch(getAge())
   },[dispatch])

   useEffect(()=>{
      const getProducts = async()=>{
         try{
            let res = await axios({
               method: 'get',
               url: 'http://localhost:9000/get-products',
               Header:{
                  "Authorization": `Bearer ${userToken}` 
               }
            })
            console.log('one',res)
            setProduct(i=>res.data)
         }catch(e){
            console.log(e)
         }
      }
      getProducts()
   },[userToken])
   
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