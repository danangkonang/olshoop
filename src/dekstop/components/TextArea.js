import React from 'react'
const App = (props)=> {
   return(
      <div>
         <div className="title-area-text">{props.title?props.title:"input"}</div>
         <textarea className="area-text" rows={props.rows}></textarea>
      </div>
   )
}
export default App