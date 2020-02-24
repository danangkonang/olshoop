import React,{} from 'react'
// import axios from 'axios'
const App = ()=>{
   // let [email,setEmail]=useState('')
   // let [password,setPassword]=useState('')

   // const login= async ()=>{
   //    let data={
   //       email,
   //       password
   //    }
   //    let url = 'http://localhost:9000/login'
   //    try{
   //       let res = await axios({
   //          method:'POST',
   //          url:url,
   //          data:data
   //       })
   //       console.log("oke")
   //       console.log(res)
   //    }catch(e){
   //       console.log("error")
   //       console.log(e.response.data)
   //       console.log(e.response.status)
   //       console.log(e.response.headers)
   //    }
   // }
   return(
      <div className="wrapper-login">
         <div className="card-login">
            <div className="sub-card">
               a
            </div>
            <div className="sub-card">
               <div className="card-login-form">
                  <div className="title-login">login</div>

                  <div>
                     <div className="form-input">
                        <label>Email
                           <input type="text" className="input-text"/>
                        </label>
                     </div>
                     <div className="form-input">
                        <label>Password
                           <input type="text" className="input-text"/>
                        </label>
                     </div>

                  </div>
                     <button className="btn-login-form">login</button>

               </div>
            </div>
         </div>
            {/* <div className="row justify-content-center">

               <div className="col-md-4 col-sm-6 col-lg-4 col-xl-4">

                  <div className="d-flex justify-content-center h2 font-weight-bold">
                     Login
                  </div>

                  <div className="form-group">
                     <label> Email </label>
                     <input 
                        onChange={(v)=>setEmail(v.target.value)}
                        value={email}
                        type="text" 
                        className="form-control" 
                        aria-describedby="email"/>
                  </div>

                  <div className="form-group">
                     <label> Password </label>
                     <input
                        onChange={(v)=>setPassword(v.target.value)}
                        value={password}
                        type="password" 
                        className="form-control" 
                        aria-describedby="password"/>
                  </div>

                  <button type="submit" className="btn btn-block btn-primary mt-4" onClick={login}>Login</button>

                  <div className="mt-3" >Lupa password? <a href="/login" className="font-weight-bold text-decoration-none pl-1">Reset password</a></div>

                  <div className="mt-3">Belum mempunyai akun? <a href="/registrasi" className="font-weight-bold text-decoration-none">Daftar</a></div>

               </div>
            </div> */}
         </div>
   )
}

export default App


// import React, { Component } from 'react'
// import axios from 'axios'
// export default class App extends Component {
//    state={
//       email:'',
//       password:''
//    }

//    login=async()=>{
//       const{email,password}=this.state
//       let data={
//          email,
//          password
//       }
//       // let url = 'https://frozen-island-74204.herokuapp.com/login'
//       let url = 'http://localhost:9000/login'
//       try{

//          // let res =await fetch(url,{
//          //    method:'POST',
//          //    headers:{
//          //       'Content-Type': 'application/json'
//          //    },
//          //    body: JSON.stringify(data)
//          // })
//          // let response = await res.json()
//          // console.log('success')
//          // console.log(response)
//          // let err = response.Error
         
//          // if(err.password==='password salah'){
//          //    console.log(err.password)
//          // }
//          // console.log('Error')

//          let res =await axios({
//             method:'POST',
//             url:url,
//             data:data
//          })
//          console.log(res)

//       }catch(e){
//          console.log('error')
//          console.log(e)
//          // console.log(JSON.stringify(e))
//       }
//       // localStorage.setItem('token', response.token)
//       // this.props.history.push('/')
//    }
//    render(){
//       // console.log(this.props.history)
//       return(
//          <div className="container-fluid pt-5">
//             <div className="row justify-content-center">
//                <div className="col-md-4 col-sm-6 col-lg-4 col-xl-4">
//                   <div className="d-flex justify-content-center h2 font-weight-bold">
//                      Login
//                   </div>

//                   <div className="form-group">
//                      <label> Email </label>
//                      <input 
//                         onChange={(v)=>this.setState({email:v.target.value})}
//                         type="text" 
//                         className="form-control" 
//                         aria-describedby="email"/>
//                   </div>

//                   <div className="form-group">
//                      <label> Password </label>
//                      <input
//                         onChange={(v)=>this.setState({password:v.target.value})}
//                         type="text" 
//                         className="form-control" 
//                         aria-describedby="password"/>
//                   </div>

//                   <button type="submit" className="btn btn-block btn-primary" onClick={this.login}>Login</button>

//                   <p className="mt-3">Lupa password? <a href="/login" className="font-weight-bold text-decoration-none">Reset password</a></p>

//                   <p className="mt-3">Belum mempunyai akun? <a href="/registrasi" className="font-weight-bold text-decoration-none">Daftar</a></p>

//                </div>
//             </div>
//          </div>
//       )
//    }
// }