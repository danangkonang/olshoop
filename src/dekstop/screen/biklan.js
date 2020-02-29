import React ,{useEffect} from 'react'
import Select from '../components/Select'
import Input from '../components/InputText'
import Btn from '../components/Button'
import { AiFillCloseCircle}from 'react-icons/ai'
// import {IoMdCloseCircleOutline} from 'react-icons/io'
// import ImagesUploader from 'react-images-uploader';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
const App = ()=> {
   
   const dropRef = React.createRef()

   useEffect(() => {
      let div = dropRef.current
      div.addEventListener('dragenter', handleDragIn)
      div.addEventListener('dragleave', handleDragOut)
      div.addEventListener('dragover', handleDrag)
      div.addEventListener('drop', handleDrop)
   })

   const handleDragIn =e=>{
      console.log('1',e.dataTransfer)
      e.preventDefault()
      // e.stopPropagation()
   }
   const handleDragOut =e=>{
      console.log('2',e.dataTransfer)
      e.preventDefault()
      // e.stopPropagation()
   }
   const handleDrag =e=>{
      console.log('3',e.dataTransfer)
      const reader = new FileReader()
      reader.onload = e =>console.log('eeee',e)
      e.preventDefault()
      // e.stopPropagation()
   }
   const handleDrop =e=>{
      console.log('4',e.dataTransfer)
      // const reader = new FileReader()
      // reader.onload = e =>console.log('eeee',e)
      e.preventDefault()

      // e.stopPropagation()
   }
   
   const onDrop = event => {
      const supportedFilesTypes = ['image/jpeg', 'image/png'];
      const { type } = event.dataTransfer.files[0];
      if (supportedFilesTypes.indexOf(type) > -1) {
            // Begin Reading File
            const reader = new FileReader();
            console.log('reader',reader)
            console.log('onload',reader.onload)
            // reader.onload = e => setPreview(e.target.result);
            // reader.readAsDataURL(event.dataTransfer.files[0]);
      }
      event.preventDefault();
 };
   
   return(
      <div className="wrapper-iklan">
         <div className="card-iklan">
            <div className="sub-card-iklan">

               <label className="custom-file-input" onDrop={onDrop}>
                  <input type="file" className=""/>
                  
                     {/* <AiOutlinePlus className="icon-plus-upload"/> */}
                     
                        <AiFillCloseCircle className="icon-close-image"/>
                     
               </label>



               <div 
               className="card-multy-file"
               ref={dropRef}
               >
                  <label className="multy-file">
                     <input type="file" className="multy"/>
                  </label>
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