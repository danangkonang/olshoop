import React,{useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import InputText from '../../components/InputText'
import Btn from '../../components/Button'
// import {userLogin} from '../../../redux/actions/userAction'
const App = (props)=>{
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[errorEmail,setErrorEmail]=useState(false)
   const[errorPassword,setErrorPassword]=useState(false)
   const[messageEmail,setMessageEmail]=useState('')
   const[messagePassword,setMessagePassword]=useState('')
   const dispatch = useDispatch()
   const login =async ()=>{
      try{
         // let res = await dispatch(userLogin({email,password}))
         // console.log(res)
         let res = await axios({
            method: 'post',
            url: 'http://localhost:9000/login',
            data: {
               email,password
            }
         })
         // localStorage.setItem('token',res.data.Data.token)
         console.log(res)
         // props.history.push('/')
      }catch(e){
         console.log("iki error",e.response.data.error.message)
      }
      
   }

   const _handelEnter =(e)=>{
      if(e.keyCode===13){
         _validasi()
      }
   }

   const _validasi = ()=>{
      if(email===''&&password===''){
         setErrorEmail(true)
         setMessageEmail('required')
         setErrorPassword(true)
         setMessagePassword('required')
      }else if(email===''){
         setErrorEmail(true)
         setMessageEmail('required')
      }else if(password===''){
         setErrorPassword(true)
         setMessagePassword('required')
      }else{
         login()
      }
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
                           error={errorEmail}
                           message={messageEmail}
                           onChange={(v)=>{
                              setEmail(v.target.value)
                              setErrorEmail(false)
                           }}
                           onKeyDown={(e,refName)=>_handelEnter(e,refName)}/>
                     </div>
                     <div className="form-input">
                        <InputText
                           title="Password"
                           password={true}
                           value={password}
                           error={errorPassword}
                           message={messagePassword}
                           onChange={(v)=>{
                              setPassword(v.target.value)
                              setErrorPassword(false)
                           }}
                           onKeyDown={(e)=>_handelEnter(e)}/>
                     </div>
                     <Btn
                        block={true}
                        outline={false}
                        title="Masuk"
                        onClick={_validasi}/>

                     <div className="text-link-auth">
                        <span>lupa password?<a href="/reset-password"> Reset password</a></span>
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