import React,{useState,useEffect} from 'react'
const App = (props)=> {
   let [border,setBorder]=useState('#d0d1d5')
   let [focus,setFocus]=useState(false)
   useEffect(()=>{
      cek()
   })

   const cek = ()=>{
      if(focus){
         if(props.error){
            setBorder('#dc3545')
         }else{
            setBorder('rgb(30,144,255)')
         }
      }else{
         if(props.error){
            setBorder('#dc3545')
         }else{
            setBorder('#d0d1d5')
         }
      }
   }
   const cekFocus = ()=>{
      setFocus(true)
      cek()
   }
   const cekBlur = ()=>{
      setFocus(false)
      cek()
   }
   return(
      <div>
         <div className="title-input-text">{props.title?props.title:"input"}</div>
         <input 
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            type={props.password?"password":"text"} 
            // className={`form-input-text ${props.error?"form-error":"form-nornal"} `}
            className="form-input-text"
            onKeyDown={props.onKeyDown?(e)=>props.onKeyDown(e):null}
            onFocus={cekFocus}
            onBlur={cekBlur}
            style={{borderColor:border}}
         />
         {
            props.error?
            <div className="message-error">
               <span>{props.message}</span>
            </div>
            :
            <div className="message-error">
            </div>
         }
      </div>
   )
}
export default App