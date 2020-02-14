import React from 'react'
// import '../components/style.scss'
import{
   FaWhatsapp,
   FaTwitter,
   FaFacebookF, 
   FaInstagram
} from 'react-icons/fa'
import Coba from '../screen/Coba'
export default class App extends React.Component {
   state={
      image:[1,2,3,4,5],
      product:[],
      isLogin:true,
      selectedIndex: 0,
      x:0,
      width: 0
   }

   componentDidMount() {
      this.setState({ width: window.innerWidth })
      window.addEventListener('resize', this.updateDimensions)
   }
   componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions)
   }
   updateDimensions = () => {
      this.setState({ width: window.innerWidth })
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
      const {width}=this.state
      return(
         <React.Fragment>
            
            <div className="container" style={{marginBottom:30,marginTop:50,background:'#fff'}}>
               <div className="row">
                     {
                        width > 768 || width === 0?
                        this.computer()
                        :
                        this.mobile()
                     }
                  <div className="col-12 col-md-6 col-lg-7">
                     
                     <div style={{height:'15%',display:'flex',fontSize:23,alignItems:'center',paddingTop:20,fontWeight:'bold'}}>
                        Aliqua deserunt veniam aliquip commodo aliqua veniam.
                     </div>

                     <div style={{height:'15%',display:'flex',fontSize:30,fontWeight:'bold',alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        Rp. 300.000
                     </div>

                     <div style={{height:'10%',display:'flex',fontSize:18,alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
                           <div>Kondisi</div>
                           <div>:</div>
                        </div>
                        <div style={{flex:2,paddingLeft:5}}>Baru</div>
                     </div>
                     <div style={{height:'10%',display:'flex',fontSize:18,alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
                           <div>Alamat</div>
                           <div>:</div>
                        </div>
                        <div style={{flex:2,paddingLeft:5}}>jl jendral sudirman jakarta pusat</div>
                     </div>
                     <div style={{height:'10%',display:'flex',fontSize:18,alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
                           <div>Kontak</div>
                           <div>:</div>
                        </div>
                        <div style={{flex:2,paddingLeft:5}}>098 786 765 667</div>
                     </div>
                     <div style={{height:'10%',display:'flex',fontSize:18,alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
                           <div>Stok</div>
                           <div>:</div>
                        </div>
                        <div style={{flex:2,paddingLeft:5}}>50 item</div>
                     </div>
                     <div style={{height:'10%',display:'flex',fontSize:18,alignItems:'center',paddingTop:10,paddingBottom:10}}>
                        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
                           <div>Di posting pada</div>
                           <div>:</div>
                        </div>
                        <div style={{flex:2,paddingLeft:5}}>08-09-2011</div>
                     </div>
                     <div style={{height:'20%',fontSize:18,display:'flex'}}>

                        <div style={{width:'15%',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:10,paddingBottom:10}}>
                           <div style={{background:'#000',borderRadius:'50%',height:40,width:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <FaWhatsapp color="#fff" size={28}/>
                           </div>
                        </div>

                        <div style={{width:'15%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <div style={{background:'#000',borderRadius:'50%',height:40,width:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <FaTwitter color="#fff" size={28}/>
                           </div>
                        </div>

                        <div style={{width:'15%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <div style={{background:'#000',borderRadius:'50%',height:40,width:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <FaInstagram color="#fff" size={28}/>
                           </div>
                        </div>

                        <div style={{width:'15%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <div style={{background:'#000',borderRadius:'50%',height:40,width:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <FaFacebookF color="#fff" size={28}/>
                           </div>
                        </div>
                        
                     </div>

                  </div>
               </div>

            </div>
            
                          
            <div className="container" style={{background:'#fff'}}>
               <div className="font-weight-bold">Diskripsi</div>
               <p style={{color:'#545454'}}>
                  Aute commodo eiusmod anim consequat irure. Exercitation minim sint dolor fugiat laborum quis aliqua incididunt deserunt. Labore commodo esse veniam commodo nisi est aute eu id exercitation anim magna. Et occaecat aliquip aliqua irure ullamco adipisicing velit. Proident est ipsum fugiat excepteur. Deserunt nulla dolor proident culpa sit nostrud magna officia minim reprehenderit laborum. Ipsum tempor ullamco reprehenderit velit anim proident quis sunt qui occaecat.
                  Veniam pariatur proident mollit sit. Nostrud eu excepteur irure ea fugiat irure aliqua proident esse do qui. Eiusmod excepteur minim aliqua aliquip eu mollit sunt nisi laboris aliqua elit ad. Adipisicing minim magna consequat duis reprehenderit ut exercitation ex. Deserunt commodo aliqua anim ea officia laboris cillum enim.
               </p>
            </div>

         </React.Fragment>
      )
   }

   mobile=()=>{
      return(
         <div className="col-12 col-md-6 col-lg-5 p-0 d-flex flex-column" style={{height:550}}>
            {/* <img
               src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
               alt="as"
               style={{width:'100%',height:'100%'}}
               /> */}
               <Coba/>
         </div>
      )
   }

   computer=()=>{
      return(
         <div className="col-12 col-md-6 col-lg-5 p-0 d-flex flex-column" style={{height:550}}>
            <div className="mb-1" style={{height:'85%'}}>
               <img
               src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
               alt="as"
               style={{width:'100%',height:'100%'}}
               />
            </div>
            <div className="" style={{height:'20%'}}>
               {
                  this.state.image.map(item=>(
                     <img
                     key={item}
                        className="thumb"
                        src="https://cf.shopee.co.id/file/1164063084035f07b8f70431d74053c1"
                        alt="sddf"
                        />
                  ))
               }
            </div>
         </div>
      )
   }
}