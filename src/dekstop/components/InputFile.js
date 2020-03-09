import React, { useState,useEffect, useRef } from 'react'
const App = (props)=> {
   const infil = useRef("file")
   const [preview]=useState([])
   useEffect(()=>{

   })

   const handleAction = e => {
      e.preventDefault()
      e.stopPropagation()
   }

   return(
      <div  className="card-multy-file-input">
         <div className="body-multy-file">
            <div className="body-image-preview">
               {
                  props.image.map((item,i)=>(
                     <div className="card-items-preview-image" key={i}>
                        <div className="item-image-box" style={{backgroundImage:`url(${item.base64})`}}>
                           <div className="icon-delete-preview" onClick={()=>alert('tes')}>
                              <span>X</span>
                           </div>
                        </div>
                     </div>
                  ))
               }

               {
                  props.image.length < 5 &&
                  <div className="card-items-preview-image">
                     <div 
                     className="item-non-image-box"
                     onDrop={e => props.onDrop(e)}
                     onClick={(e) => infil.current.click(e)}
                     onDragOver={e => handleAction(e)}
                     onDragEnter={e => handleAction(e)}
                     onDragLeave={e => handleAction(e)}>
                        <div className="icon-non-preview">
                           <span>gambar produk</span>
                        </div>
                     </div>
                  </div>
               }
            </div>
            <input
               multiple={true}
               ref={infil}
               type="file"
               className="input-multy-type-file"
               onDrop={e => props.onDrop(e)}
               onChange={()=>props.onChange(infil.current.files)}
               onDragOver={e => handleAction(e)}
               onDragEnter={e => handleAction(e)}
               onDragLeave={e => handleAction(e)}/>

            <div className="text-helper-input-file">
               <span>Tarik dan letakkan di sini</span>
            </div>
         </div>
         <div className="footer-multy-file"
            onClick={() => infil.current.click()}>
            <span>Cari gambar</span>
         </div>
      </div>
   )
}
export default App


// import React, { useState,useEffect } from 'react'
// const App = ()=> {
//    const infil = useRef("file")
//    const [preview,setPreview]=useState([])
//    const handleAction =(e)=>{
//       e.preventDefault()
//       e.stopPropagation()
//    }

//    const handleDrop = e => {
//       e.preventDefault()
//       e.stopPropagation()
//       let file = e.dataTransfer.files
//       for(var i =0; i < file.length; i++){
//          let newFile = file[i]
//          var reader = new FileReader()
//          reader.readAsDataURL(newFile)
//          reader.onloadend =  (event)=> {
//             setPreview(preview=>[...preview,{base64:event.target.result}])
//          }
//       }
//    }

//    const onChange = ()=>{
//       let file = infil.current.files
//       for(var i =0; i < file.length; i++){
//          let newFile = file[i]
//          var reader = new FileReader()
//          reader.readAsDataURL(newFile)
//          reader.onloadend =  (event)=> {
//             setPreview(preview=>[...preview,{base64:event.target.result}])
//          }
//       }
//    }
//    return(
//       <div  className="card-multy-file-input">
//             <div className="body-multy-file">
//                <div className="body-image-preview">
//                   {
//                      preview.map((item,i)=>(
//                         <div className="card-items-preview-image" key={i}>
//                            <div className="item-image-box" style={{backgroundImage:`url(${item.base64})`}}>
//                               <div className="icon-delete-preview" onClick={()=>alert('tes')}>
//                                  <span>X</span>
//                               </div>
//                            </div>
//                         </div>
//                      ))
//                   }

//                   {
//                      preview.length < 5 &&
//                      <div className="card-items-preview-image">
//                         <div className="item-non-image-box"
//                         onDrop={e => handleDrop(e)}
//                         onDragOver={e => handleAction(e)}
//                         onDragEnter={e => handleAction(e)}
//                         onDragLeave={e => handleAction(e)}
//                         onClick={(e) => infil.current.click(e)}
//                         >
//                            <div className="icon-non-preview">
//                               <span>gambar produk</span>
//                            </div>
//                         </div>
//                      </div>
//                   }
//                </div>
//                <input
//                   multiple={true}
//                   ref={infil}
//                   type="file"
//                   className="input-multy-type-file"
//                   onDrop={e => handleDrop(e)}

//                   onDragOver={e => handleAction(e)}
//                   onDragEnter={e => handleAction(e)}
//                   onDragLeave={e => handleAction(e)}

//                   onChange={(e)=> onChange(e)}
//                />

//                <div className="text-helper-input-file">
//                   <span>Tarik dan letakkan di sini</span>
//                </div>
//             </div>
//             <div className="footer-multy-file"
//                onClick={() => infil.current.click()}>
//                <span>Cari gambar</span>
//             </div>
//          </div>
//    )
// }
// export default App