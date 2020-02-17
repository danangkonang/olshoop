import React, {  } from 'react'
import '../styles/InputSearch.scss'
import {
   AiOutlineSearch
} from 'react-icons/ai'
const App = ()=> {
   return(
      <div className="wrap">
         <input type="text" className="input-search" placeholder="search" />
         <button className="search-btn">
            <AiOutlineSearch color="red" size={25}/>
         </button>
      </div>
   )
}
export default App