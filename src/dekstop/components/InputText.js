import React from 'react'
const App = (props)=> {
   return(
      <div>
         <div className="title-input-text">{props.title?props.title:"Text input"}</div>
         <input 
         onChange={props.onChange}
         value={props.value}
         placeholder={props.placeholder}
         type={props.password?"password":"text"} 
         className={`form-input-text ${props.error?"form-error":"form-nornal"}`}
         />
         {
            props.error&&
            <span className="message-error">{props.message}</span>
         }
      </div>
   )
}
export default App