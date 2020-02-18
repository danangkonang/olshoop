import React, {  } from 'react'
let data = [1,2,3,4,5,6,7,8,9,10]
const App = ()=> {
   return(
      <div className="wraper-products">
         {
            data.map(item=>(
               <div className="box-card" key={item}>
                  <a href="/">
                     <div className="card-product">
                        <div className="image-product">
                           <img src="https://statik.tempo.co/data/2019/03/29/id_830337/830337_720.jpg"/>
                        </div>
                        <div className="product-news">
                           <div className="card-name">
                              <span className="name-product">Laborum minim eu dolor aute anim ut officia labore quis cupidatat fugiat elit. </span>
                           </div>
                           <div className="card-princ">
                              <span className="prince-name">RP 30.000</span>
                           </div>
                           <div className="card-seller">
                              <span className="seller-title">Penjual</span>
                           </div>
                           <div className="card-location">
                              <span className="location-name">Lokasi</span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
            ))
         }

      </div>
   )
}
export default App