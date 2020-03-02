import React,{useState} from 'react'
// import axios from 'axios'
import InputText from '../../components/InputText'
import Btn from '../../components/Button'
const App = ()=>{
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[error]=useState(false)
   const[message]=useState('')

   const login = ()=>{
      const data ={
         email,password
      }
      console.log(data)
   }
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
                        <InputText
                           title="Email"
                           value={email}
                           error={error}
                           message={message}
                           onChange={(v)=>setEmail(v.target.value)}
                        />
                     </div>
                     <div className="form-input">
                        <InputText
                           title="Password"
                           password={true}
                           value={password}
                           error={error}
                           message={message}
                           onChange={(v)=>setPassword(v.target.value)}
                        />
                     </div>
                     <Btn
                        block={true}
                        outline={true}
                        title="Masuk"
                        onClick={login}
                     />

                     <div className="text-link-auth">
                        <span>lupa password?<a href="/confirm-email"> Reset password</a></span>
                     </div>
                     <div className="text-link-auth">
                        <span>Belum mempunyai akun?<a href="/registrasi"> Daftar disini</a></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App