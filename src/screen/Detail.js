import React from 'react'
import '../components/style.scss'
export default class App extends React.Component {
   state={
      image:[1,2,3,4,5,6],
      product:[],
      isLogin:true,
      selectedIndex: 0,
      x:0
   }

   goLeft =()=>{
      this.state.x===0?
      this.setState({x: this.state.x - 100*(this.state.image.length-1)})
      :
      this.setState({x: this.state.x + 100})
   }
   goRight =()=>{
      (this.state.x=== -100*(this.state.image.length-1))?
      this.setState({x: 0})
      :
      this.setState({x: this.state.x - 100})
   }

   render(){
      return(
         <React.Fragment>
            
            <div className="container" style={{marginBottom:30,marginTop:50}}>
               <div className="row">
                  <div className="col-md-4 col-12 p-0 d-flex flex-column">

                     <div className="content">
                        <div className="corousels" onTouchEnd={(e)=>console.log(e.isDefaultPrevented)}>
                           {
                              this.state.image.map(item=>(
                                 <div className="corousel" style={{background:item%2===0?'lightseagreen':'blue',transform:`translateX(${this.state.x}%)`}} key={item}>
                                    image
                                 </div>
                              ))
                           }
                        </div>
                        
                        <div className="info_index">
                           a
                           {/* <span>1/5</span> */}
                        </div>
                        <button onClick={this.goLeft} className="goLeft">
                           0
                        </button>
                        <button onClick={this.goRight} className="goRight">
                           0
                        </button>
                     </div>
                        
                        {/* <img
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="as"
                        // style={{width:'100%',height:'100%'}}
                        />
                        <img
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="as"
                        // style={{width:'100%',height:'100%'}}
                        />
                        <img
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="as"
                        // style={{width:'100%',height:'100%'}}
                        /> */}
                     

                     {/* <div className="border mb-1" style={{height:'80%'}}>
                        <img
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="as"
                        style={{width:'100%',height:'100%'}}
                        />
                     </div>
                     <div className="border border-primary" style={{height:'20%'}}>
                        <img
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                        <img
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                        <img
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                        <img
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                        <img
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                     </div> */}

                  </div>

                  <div className="col-md-8 col-12 pt-3">
                     <div className="d-flex flex-column">
                        <div className="p-2 h3 font-weight-bold">
                           Aliqua deserunt veniam aliquip commodo aliqua veniam.
                        </div>
                        <div className="p-2 h4 font-weight-bold">
                           Rp. 300.000
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Stok
                           </div>
                           <div>
                              : 7 item
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Kondisi
                           </div>
                           <div>
                              : Baru
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Alamat
                           </div>
                           <div>
                              : Jl. jendral sudirman no 46 Jakarta barat
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Penjual
                           </div>
                           <div>
                              : Nama akun
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Di posting
                           </div>
                           <div>
                              : 02-11-2019
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Kontak
                           </div>
                           <div>
                              : 0211201979
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Pengiklan
                           </div>
                           <div>
                              : danang rifai
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Rating penjual
                           </div>
                           <div>
                              : 5 bintang
                           </div>
                        </div>
                        <div className="p-2 h6 d-flex flex-row">
                           <div className="w-25">
                              Rating penjual
                           </div>
                           <div>
                              : 5 bintang
                           </div>
                        </div>
                     </div>
            
                  </div>
               </div>

            </div>

            <div className="container bg-warning p-0">
               <div className="font-weight-bold">Diskripsi</div>
               <p>
                  Aute commodo eiusmod anim consequat irure. Exercitation minim sint dolor fugiat laborum quis aliqua incididunt deserunt. Labore commodo esse veniam commodo nisi est aute eu id exercitation anim magna. Et occaecat aliquip aliqua irure ullamco adipisicing velit. Proident est ipsum fugiat excepteur. Deserunt nulla dolor proident culpa sit nostrud magna officia minim reprehenderit laborum. Ipsum tempor ullamco reprehenderit velit anim proident quis sunt qui occaecat.
                  Veniam pariatur proident mollit sit. Nostrud eu excepteur irure ea fugiat irure aliqua proident esse do qui. Eiusmod excepteur minim aliqua aliquip eu mollit sunt nisi laboris aliqua elit ad. Adipisicing minim magna consequat duis reprehenderit ut exercitation ex. Deserunt commodo aliqua anim ea officia laboris cillum enim.
               </p>
            </div>

            {/* <Product product={this.state.product} margin={60}/> */}

            <div className="container-fluid" style={{position:'fixed',bottom:0}}>
               <div className="row bg-white">
                  <div className="col p-1">
                        <button type="button" className="btn btn-block btn-primary">Chat</button>
                  </div>
                  <div className="col p-1">
                        <button type="button" className="btn btn-block btn-primary">Phone</button>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}