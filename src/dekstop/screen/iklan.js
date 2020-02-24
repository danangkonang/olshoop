import React, { useState,useEffect } from 'react'
import Select from '../components/Select'
import Input from '../components/InputText'
import Btn from '../components/Button'
const App = ()=> {
   
   return(
      <div className="wrapper-iklan">
         <div className="card-iklan">
            <div className="sub-card-iklan">

               <label className="custom-file-input">
                  {/* <img src="dfs" alt="image"/> */}
                  <input type="file" className=""/>
               </label>
               
            </div>


            <div className="sub-card-iklan" style={{paddingLeft:20,paddingRight:20}}>

               <Select/>
               <Input/>
               <Btn/>

            </div>
         </div>
      </div>
   )
}
export default App