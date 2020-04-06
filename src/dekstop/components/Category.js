import React, { useState,useEffect } from 'react'
const App = ()=> {
   return(
      <div className="wrapper-category">
         <div className="title-category">Category</div>

         <div className="card-category">
            <div className="item-category">
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
            </div>
            <div className="item-category">
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
               <div className="sub-category">a</div>
            </div>
            <button className="goto gotoleft">
               left
            </button>
            <button className="goto gotoright">
               right
            </button>
         </div>
      </div>
   )
}
export default App