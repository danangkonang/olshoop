import React, { Component,Fragment } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'

// import Input from '../components/InputText'
// import Button from '../components/Button'
import Card from '../components/card'
// import Search from '../components/InputSearch'
// import axios from 'axios'
// var MobileDetect = require('mobile-detect')
import Footer from '../components/Footer'
export default class App extends Component {
   // https://frozen-island-74204.herokuapp.com/
   state={
      product:[],
      isLogin:true
   }
   
   async componentDidMount(){
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      console.log(isMobile)
		// var element = document.getElementById('text');
		// if (isMobile) {
  		// 	element.innerHTML = "You are using Mobile";
		// } else {
		// 	element.innerHTML = "You are using Desktop";
		// }
      
      // let data={
      //    email:'dngrifai21@gmail.com',
      //    password:'eeruei'
      // }
      // let url = 'http://localhost:9000/login'
      
      
      // console.log(navigator.userAgent)
      // try{
      //    let res =await fetch(url,{
      //       method:'POST',
      //       headers:{
      //          'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify(data)
      //    })
      //    let response = await res.json()

      //    console.log('success')
      //    console.log(response)
      //    console.log(response.response)
      // }catch(e){
      //    console.log('error')
      //    console.log(e.response)
      // }






      // try{
      //    const options = {
      //       headers:{
      //          'Content-Type': 'application/json',
      //          // 'Authorization':`Bearer ${token}`
      //          // 'Authorization':`Bearer jfksjafhkshkh.hdukashduash.jsdhfusdhdf`
      //       }
      //    };
      //    let a = await fetch(`http://localhost:9000/products`,options);
      //    console.log(a)
      // }catch(e){
      //    console.log('error btow')
      //    console.log(JSON.stringify(e))
         
      // }

      // let url = 'http://localhost:9000/login'


      // try{

      //    let res =await axios({
      //       method:'POST',
      //       url:url,
      //       data:data
      //    })
      //    console.log("oke")
      //    console.log(res)

      // }catch(e){
      //    console.log("error")
      //    console.log(e.response.data)
      //    console.log(e.response.status)
      //    console.log(e.response.headers)
      // }
   }

   render(){
      return(
         <Fragment>
            <Header isLogin={this.state.isLogin}/>
            <Menu/>
            {/* <a href="/detail">pindah halaman</a> */}

            {/* <Input/>

            <Button/> */}

            <Card/>

            {/* <Search/> */}
            <Footer/>
         </Fragment>
      )
   }
}