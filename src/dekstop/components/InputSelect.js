import React, { Fragment } from 'react'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
const App = (props)=> {

   return(
      <Fragment>
         <div className="title-select">kategori</div>
         <div className="header-select" 
         onClick={props.onShow} 
         style={{borderColor:props.show?"dodgerblue":"#d0d1d5"}}>
            <div className="text-select">
               {props.title===""?"pilih":props.title}
            </div>
            {
               props.show?
               <MdKeyboardArrowUp className="icon-select"/>
               :
               <MdKeyboardArrowDown className="icon-select"/>
            }
         </div>

         {
            props.show&&
            <div className="select-box-items">
               {
                  props.items.map(((item,i)=>(
                     <div key={i} className="select-box-item"
                     onClick={()=>props.onSelect(item)}
                     >
                        {item}
                     </div>
                  )))
               }
            </div>
         }
      </Fragment>
   )
}
export default App