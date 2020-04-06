import React from 'react'
import{
   FiArrowLeft
} from 'react-icons/fi'
const App = (props)=> {
   return(
      <div className="wraper-header-secondary">
         <a className="icon-back-header" href={props.link?props.link:"/"}>
            <FiArrowLeft className="icon-back-left" />
         </a>
         <div className="title-header-secondary">
            {props.title?props.title:"Title"}
         </div>
      </div>
   )
}
export default App