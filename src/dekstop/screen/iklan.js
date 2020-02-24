import React from 'react'
import Select from '../components/Select'
import Input from '../components/InputText'
import Btn from '../components/Button'

// import ImagesUploader from 'react-images-uploader';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
const App = ()=> {
   
   return(
      <div className="wrapper-iklan">
         <div className="card-iklan">
            <div className="sub-card-iklan">

               <div className="custom-file-input">
                  <input type="file" className=""/>
               </div>

               {/* <ImagesUploader
                  url="http://localhost:9090/multiple"
                  optimisticPreviews
                  onLoadEnd={(err) => {
                     if (err) {
                        console.error(err);
                     }
                  }}
                  label="Upload multiple images"
				   /> */}
               
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