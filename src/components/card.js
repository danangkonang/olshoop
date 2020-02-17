import React, {  } from 'react'
import '../styles/card.scss'
const App = ()=> {
   return(
      <div className="wraper">
         <div className="card"style={{width:`${100/8}%`}}>
         <img src="https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Xiaomi_Redmi_6A/Xiaomi_Redmi_6A_L_1.jpg" className="card-img" alt="konang"/>
         <div className="card-body">
            <div>
               <span>nama</span>
            </div>
            <div>
               <span>
                  harga
               </span>
            </div>
            <div>
               <button>beli</button>
            </div>
         </div>
         </div>
      </div>
   )
}
export default App