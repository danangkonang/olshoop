import React, { Component } from 'react'

import '../styles/menu.scss'

export default class App extends Component {
   state={
      categori:["pink","tomato","red","green","green","blue","yellow","pink","tomato","red","green","blue","yellow"],
      menu:[
         "https://cf.shopee.co.id/file/c099daa851a7c80a14eea3b66968a3f5_tn",
         "https://cf.shopee.co.id/file/0bfdaa2d899e4d16ac0e31fc17a4d6ef_tn",
         "https://cf.shopee.co.id/file/39762ff427021a9904a672a357897f1b_tn",
         "https://cf.shopee.co.id/file/ab72cad78f0fd55b3e7c6c255127335b_tn",
         "https://cf.shopee.co.id/file/1eb9ba3754c3cfebf2155bd9a9c7385d_tn",
         "https://cf.shopee.co.id/file/4b85839c9d6c9a9dac9e8f68483d3a62_tn",
         "https://cf.shopee.co.id/file/111b6a0545c8f85f27ac1d9e916e97bf_tn",
         "https://cf.shopee.co.id/file/457a525b2447989d33b5d6459a008b5c_tn",
         "https://cf.shopee.co.id/file/6afd8f9ce7b884ef3c8172445dae9de4_tn",
      ]
   }
   render(){
      const{menu}=this.state
      return(
         <div className="container-md mt-2 p-0">
            <div className="items">
               
               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[0]})`}}></div>
                        <div className="menu-title">
                           Handphone
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[1]})`}}></div>
                        <div className="menu-title">
                           Mobil & motor
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[2]})`}}></div>
                        <div className="menu-title">
                           Pakaian pria
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[3]})`}}></div>
                        <div className="menu-title">
                           Pakaian wanita
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[4]})`}}></div>
                        <div className="menu-title">
                           Pakaian anak
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[5]})`}}></div>
                        <div className="menu-title">
                           Properti
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[6]})`}}></div>
                        <div className="menu-title">
                           Rumah tangga
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[7]})`}}></div>
                        <div className="menu-title">
                           Hewan peliharaan
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[8]})`}}></div>
                        <div className="menu-title">
                           Pekerjaan
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[0]})`}}></div>
                        <div className="menu-title">
                           Jasa
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[1]})`}}></div>
                        <div className="menu-title">
                           Perkakas
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[2]})`}}></div>
                        <div className="menu-title">
                           Produk lainya
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[3]})`}}></div>
                        <div className="menu-title">
                           Rumah tangga
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[4]})`}}></div>
                        <div className="menu-title">
                           Hewan peliharaan
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[5]})`}}></div>
                        <div className="menu-title">
                           Rumah tangga
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[6]})`}}></div>
                        <div className="menu-title">
                           Hewan peliharaan
                        </div>
                     </a>
                  </div>
               </div>

               <div className="item">
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[1]})`}}></div>
                        <div className="menu-title">
                           Rumah tangga
                        </div>
                     </a>
                  </div>
                  <div className="sub-item">
                     <a href="/" className="sub-item-categori text-decoration-none d-flex flex-column">
                        <div className="menu-image" style={{backgroundImage:`url(${menu[8]})`}}></div>
                        <div className="menu-title">
                           Hewan peliharaan
                        </div>
                     </a>
                  </div>
               </div>
                  
            </div>

         </div>
      )
   }
}