import React from 'react'
const App = (props)=> {
   return(
      <div>
         <a href={props.link?props.link:"/"} className={`link-tombol ${props.outline?"link-outline":"link-default"}`}>{props.title?props.title:"link"}</a>
      </div>
   )
}
export default App