import React, { useState,Fragment,useEffect } from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Card from '../../components/Card'
import axios from 'axios'
import Footer from '../../components/Footer'
import {useSelector, useDispatch} from 'react-redux'
import {userLogin} from '../../../redux/actions/userAction'
const App =()=> {
   // const [isLogin]=useState(false)
   const [product,setProduct]=useState([])
   let [userToken,setToken]=useState('tes')
   const user = useSelector(state=>state.user)
   const dispatch = useDispatch()

   useEffect(()=>{
      const getToken =async()=>{
         try{
            let tkn =await localStorage.getItem('token')
            if(tkn !==null){
               await setToken(()=>tkn)
               await dispatch(userLogin())
            }
         }catch(e){
            console.log(e)
         }
      }
      getToken()
   },[dispatch])

   useEffect(()=>{
      console.log(user)
   },[user])

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
            console.log('one',res.data)
            setProduct(i=>res.data)
         }catch(e){
            console.log(e)
         }
      }
      getProducts()
   },[userToken])
   
      return(
         <Fragment>
            <Header isLogin={user.is_login}/>
            <Menu/>
            <Card product={product}/>
            <Footer/>
         </Fragment>
      )
   
}

export default App