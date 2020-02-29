import React, { Fragment,useState } from 'react'
let img =[1]
const DragAndDrop = props => {
   // const [nonImage,setNonImage] = useState([])
   const[images,setImages] = useState([1,2,3,4])
   const handleDragEnter = e => {
      e.preventDefault()
      e.stopPropagation()
      // console.log('handleDragEnter',e)
   }
   const handleDragLeave = e => {
      e.preventDefault()
      e.stopPropagation()
      // console.log('handleDragLeave',e)
   }
   const handleDragOver = e => {
      e.preventDefault()
      e.stopPropagation()
      // console.log('handleDragOver',e)
   }
   const handleDrop = e => {
      e.preventDefault()
      e.stopPropagation()
      console.log(e.dataTransfer.files)
      // let files = [...e.dataTransfer.files]
      // console.log('handleDrop',files)

      // let fileReader = new FileReader()
      // fileReader.onload = () => {
      //    console.log("IMAGE LOADED: ", fileReader.result);
      // }

      // let reader = new FileReader();
      // reader.onload = function (event) {
      //    console.log(event)
      // }
      // reader.readAsDataURL(file);




      // if (files && files.length > 0) {
      //    const existingFiles = files.map(f => f.name)
      //    console.log(existingFiles)
      //    // files = files.filter(f => !existingFiles.includes(f.name))
         
      //    // dispatch({ type: 'ADD_FILE_TO_LIST', files })
      //    // e.dataTransfer.clearData()
      //    // dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 })
      //    // dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
      //  }
   }

   let fileInput
   return (
      // <div className={'drag-drop-zone'}
      //    onDrop={e => handleDrop(e)}
      //    onDragOver={e => handleDragOver(e)}
      //    onDragEnter={e => handleDragEnter(e)}
      //    onDragLeave={e => handleDragLeave(e)}
      //    style={{background:'green',width:200,height:200}}
      // >
      //    <p>Drag files here to upload</p>
      // </div>

      <Fragment>

      <div className="wrapper-iklan" style={{background:'#fff',height:'100vh'}}>
         <div  className="card-multy-file-input">
            <div className="body-multy-file"
               
            >
               {/* <div className="body-image-preview">
                  {
                     images.map(i=>(
                        <div className="card-items-preview-image" key={i}>
                           <div className="item-image-box">
                              <div className="icon-delete-preview">X</div>
                           </div>
                        </div>
                     ))
                  }

                  {
                     images.length <5&&
                     <div className="card-items-preview-image">
                        <div className="item-non-image-box"
                        onClick={() => fileInput.click()}
                        >
                           <div className="icon-non-preview">
                              <span>gambar produk</span>
                           </div>
                        </div>
                     </div>
                  }
                  
               </div> */}
               <input
                  type="file"
                  // id="file-browser-input"
                  // name="file-browser-input"
                  className="input-multy-type-file"
                  ref={input => fileInput = input}
                  onDrop={e => handleDrop(e)}
                  onDragOver={e => handleDragOver(e)}
                  onDragEnter={e => handleDragEnter(e)}
                  onDragLeave={e => handleDragLeave(e)}
                  onChange={(e)=>console.log(e)}
               />
               <div className="text-helper-input-file">
                  <span>Drag and Drop Images Here</span>
               </div>
            </div>
            <div className="footer-multy-file">
               <span onClick={() => fileInput.click()}>Brose file</span>
            </div>
         </div>
      </div>























      {/* <div className="inner-container" style={{display: "flex",flexDirection: "column"}}>

         <div className="sub-header">Drag an Image</div>
         <div className="draggable-container">
            <input
               type="file"
               id="file-browser-input"
               name="file-browser-input"
               ref={input => fileInput = input}
               />
            <div className="files-preview-container">

            <div className="file">
               <img src="https://www.mizutex.com/wp-content/uploads/2018/08/Baju-gamis-Syari-bahan-katun-Supernova-by-Mizutex.jpg"/>
               <div className="container">
                  <span className="progress-bar">
                  </span>
               </div>
            </div>

            </div>
            <div className="helper-text">Drag and Drop Images Here</div>

            <div className="file-browser-container">
               <span onClick={() => fileInput.click()}>testing</span>
            </div>

         </div>

        
      </div> */}
      </Fragment>
   )
}

export default DragAndDrop




// // onFileLoad(e) {
// //    const file = e.currentTarget.files[0];
// //    let fileReader = new FileReader();
// //    fileReader.onload = () => {
// //      console.log("IMAGE LOADED: ", fileReader.result);
// //    }
// //    fileReader.onabort = () => {
// //      alert("Reading Aborted");
// //    }
// //    fileReader.onerror = () => {
// //      alert("Reading ERROR!");
// //    }
// //    fileReader.readAsDataURL(file);
// // }


// import React ,{useCallback} from 'react'
// import Select from '../components/Select'
// import Input from '../components/InputText'
// import Btn from '../components/Button'
// import {useDropzone} from 'react-dropzone'
// // import { AiFillCloseCircle}from 'react-icons/ai'

// const App = ()=> {
    
// //     const dropRef = React.createRef()
 
// //     useEffect(() => {
// //        let div = dropRef.current
// //        div.addEventListener('dragenter', handleDragIn)
// //        div.addEventListener('dragleave', handleDragOut)
// //        div.addEventListener('dragover', handleDrag)
// //        div.addEventListener('drop', handleDrop)
// //     })
 
// //     const handleDragIn =e=>{
// //        console.log('1',e)
// //        e.preventDefault()
// //        e.stopPropagation()
// //     }
// //     const handleDragOut =e=>{
// //        console.log('2',e)
// //        e.preventDefault()
// //        e.stopPropagation()
// //     }
// //     const handleDrag =e=>{
// //        console.log('3',e)
// //        const reader = new FileReader()
// //        reader.onload = e =>console.log('eeee',e)
// //        e.preventDefault()
// //        e.stopPropagation()
// //     }
// //     const handleDrop =e=>{
// //        console.log('4',e)
// //        // const reader = new FileReader()
// //        // reader.onload = e =>console.log('eeee',e)
// //        e.preventDefault()
// //        e.stopPropagation()
// //     }
    
// //     const onDrop = event => {
// //        const supportedFilesTypes = ['image/jpeg', 'image/png'];
// //        const { type } = event.dataTransfer.files[0];
// //        if (supportedFilesTypes.indexOf(type) > -1) {
// //              // Begin Reading File
// //              const reader = new FileReader();
// //              console.log('reader',reader)
// //              console.log('onload',reader.onload)
// //              // reader.onload = e => setPreview(e.target.result);
// //              // reader.readAsDataURL(event.dataTransfer.files[0]);
// //        }
// //        event.preventDefault();
// //   };
//       // const onDrop = useCallback(acceptedFiles => {
//       //    console.log(acceptedFiles)
//       // }, [])
      
//       const onDrop = useCallback((acceptedFiles) => {
//          acceptedFiles.forEach((file) => {
//            const reader = new FileReader()
//            reader.onabort = () => console.log('file reading was aborted')
//            reader.onerror = () => console.log('file reading has failed')
//            reader.onload = () => {
//              const binaryStr = reader.result
//              console.log(binaryStr)
//            }
//            reader.readAsArrayBuffer(file)
//          })
         
//       }, [])
//       const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
//     return(
//        <div className="wrapper-iklan">
//           <div className="card-iklan">
//              <div className="sub-card-iklan">

//              <div {...getRootProps()}>
//                <input {...getInputProps()} />
//                {
//                isDragActive ?
//                   <p>Drop the files here ...</p> :
//                   <p>Drag 'n' drop some files here, or click to select files</p>
//                }
//             </div>









//                 {/* <label className="custom-file-input" onDrop={onDrop}>
//                    <input type="file" className=""/>
                   
//                       <AiOutlinePlus className="icon-plus-upload"/>
                      
//                          <AiFillCloseCircle className="icon-close-image"/>
                      
//                 </label>
 
 
 
//                 <div 
//                 className="card-multy-file"
//                 ref={dropRef}
//                 >
//                    <label className="multy-file">
//                       <input type="file" className="multy"/>
//                    </label>
//                 </div> */}
 
//                 {/* <ImagesUploader
//                    url="http://localhost:9090/multiple"
//                    optimisticPreviews
//                    onLoadEnd={(err) => {
//                       if (err) {
//                          console.error(err);
//                       }
//                    }}
//                    label="Upload multiple images"
//                 /> */}
                
//              </div>
 
 
//              <div className="sub-card-iklan" style={{paddingLeft:20,paddingRight:20}}>
 
//                 <Select/>
//                 <Input/>
//                 <Btn/>
 
//              </div>
//           </div>
//        </div>
//     )
//  }
//  export default App