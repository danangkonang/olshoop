import React from 'react'
const App = (props)=> {
   return(
      <div className="wraper-products">
         {
            props.product.map((item,i)=>(
               <div className="box-card" key={item} >
                  <a href="/detail">
                     <div className="card-product">
                        <div className="image-product">
                           <img src={`http://localhost:9000/files/products/${item.images[0]}`} alt="product"/>
                        </div>
                        <div className="product-news">
                           <div className="card-name">
                              <span className="name-product-title">Laborum minim eu dolor aute anim ut officia labore quis cupidatat fugiat elit. </span>
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