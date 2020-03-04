import React, { useState, Fragment } from 'react'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
const App = ()=> {

   const [pilih]=useState([
      "merah",
      "kuning",
      "hijau",
      "biru",
      "hitam",
      "putih",
      "coklat"
   ])

   const [select,setSelect]=useState(false)
   const [selected,setSelected]=useState("select")
   const showSelect=()=>{
      setSelect(!select)
   }

   const selectItem=(i)=>{
      setSelected(i)
      setSelect(!select)
   }

   return(
      <Fragment>
         <div className="title-select">kategori</div>
         <div className="header-select" onClick={showSelect} style={{borderColor:select?"dodgerblue":"#d0d1d5"}}>
            <div className="text-select">
               {selected}
            </div>
            {
               select?
               <MdKeyboardArrowUp className="icon-select"/>
               :
               <MdKeyboardArrowDown className="icon-select"/>
            }
         </div>

         {
            select&&
            <div className="select-box-items">
               {
                  pilih.map(((item,i)=>(
                     <div key={i} className="select-box-item" onClick={()=>selectItem(item)}>
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