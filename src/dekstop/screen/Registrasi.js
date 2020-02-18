import React, { useState } from 'react'

const App =(props)=>{
   let [email,setEmail]=useState('')
   let [password,setPassword]=useState('')
   let [username,setUsername]=useState('')

   const registrasi =async ()=>{
      console.log('registrasi')
   }

   return(
      <div className="container-fluid pt-5">
         <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 col-lg-4 col-xl-4">

               <div className="d-flex justify-content-center h2 font-weight-bold">
                  Daftar
               </div>

               <div className="form-group">
                  <label> Username </label>
                  <input 
                     onChange={(v)=>setUsername(v.target.value)}
                     value={username}
                     type="text" 
                     className="form-control" 
                     aria-describedby="username"/>
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
                     type="text" 
                     className="form-control" 
                     aria-describedby="password"/>
               </div>

               <button type="button" className="btn btn-block btn-primary mt-4" onClick={registrasi}>Daftar</button>

               <div className="mt-3">Sudah mempunyai akun? <a href="/login" className="font-weight-bold text-decoration-none">Login</a></div>

            </div>
         </div>
      </div>
   )
}
export default App