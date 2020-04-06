import React from 'react'
const App = (props)=> {
   return(
      <div>
         <button type="button" className={`tombol-btn ${props.outline&&"tombol-outline"} ${props.block&&"tombol-block"} ${props.small?"tombol-small":"tombol-default"}`} onClick={props.onClick}>
            {props.title?props.title:"button"}
         </button>
      </div>
   )
}
export default App