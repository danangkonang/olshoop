import React, {useState,useRef} from 'react'
import InputFile from '../../components/InputFile'
import InputSelect from '../../components/InputSelect'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
const App = ()=> {
   const [preview,setPreview]=useState([])



   // const infil = useRef("file")
   const [images]=useState([])
   // const [preview,setPreview]=useState([])
   const [category]=useState(["smartphone","pakaian","properti"])
   const [show,setShow]=useState(false)
   const [selected,setSelected]=useState("")
   
   const [subCategory]=useState(["smartphone","pakaian","properti"])
   const [show2,setShow2]=useState(false)
   const [selected2,setSelected2]=useState("")

   const [prodValue,setProdValue]=useState("")

   const select = (v)=>{
      setSelected(v)
      showSelect()
   }
   const select2 = (v)=>{
      setSelected2(v)
      showSelect2()
   }
   const showSelect = ()=> setShow(!show)
   const showSelect2 = ()=> setShow2(!show2)
   const changeProduct = (v)=> setProdValue(v.target.value)

   const saveProduct =()=>{
      let data = {
         images,
         selected,
         selected2,
         prodValue
      }
      console.log(data)
   }

   

   // const handleAction =(e)=>{
   //    e.preventDefault()
   //    e.stopPropagation()
   // }

   // const handleDrop = e => {
   //    e.preventDefault()
   //    e.stopPropagation()
   //    let file = e.dataTransfer.files
   //    for(var i =0; i < file.length; i++){
   //       let newFile = file[i]
   //       var reader = new FileReader()
   //       reader.readAsDataURL(newFile)
   //       reader.onloadend =  (event)=> {
   //          setPreview(preview=>[...preview,{base64:event.target.result}])
   //       }
   //    }
   // }

   // const onChange = ()=>{
   //    let file = infil.current.files
   //    for(var i =0; i < file.length; i++){
   //       let newFile = file[i]
   //       var reader = new FileReader()
   //       reader.readAsDataURL(newFile)
   //       reader.onloadend =  (event)=> {
   //          setPreview(preview=>[...preview,{base64:event.target.result}])
   //       }
   //    }
   // }

   const handleDrop = e => {
      e.preventDefault()
      e.stopPropagation()
      let file = e.dataTransfer.files
      for(var i =0; i < file.length; i++){
         let newFile = file[i]
         var reader = new FileReader()
         reader.readAsDataURL(newFile)
         reader.onloadend =  (event)=> {
            setPreview(preview=>[...preview,{base64:event.target.result}])
         }
      }
      console.log(file)
   }

   const onChange = (file)=>{
      // let file = infil.current.files
      for(var i =0; i < file.length; i++){
         let newFile = file[i]
         var reader = new FileReader()
         reader.readAsDataURL(newFile)
         reader.onloadend =  (event)=> {
            setPreview(preview=>[...preview,{base64:event.target.result}])
         }
      }
   }

   return(
      <div className="wrapper-iklan">

         
         <InputFile
            onDrop={(e)=>handleDrop(e)}
            onChange={(e)=>onChange(e)}
         />


         {/* <div  className="card-multy-file-input">
            <div className="body-multy-file">
               <div className="body-image-preview">
                  {
                     preview.map((item,i)=>(
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
                     preview.length < 5 &&
                     <div className="card-items-preview-image">
                        <div className="item-non-image-box"
                        onDrop={e => handleDrop(e)}
                        onDragOver={e => handleAction(e)}
                        onDragEnter={e => handleAction(e)}
                        onDragLeave={e => handleAction(e)}
                        onClick={(e) => infil.current.click(e)}
                        >
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
                  onDrop={e => handleDrop(e)}

                  onDragOver={e => handleAction(e)}
                  onDragEnter={e => handleAction(e)}
                  onDragLeave={e => handleAction(e)}

                  onChange={(e)=> onChange(e)}
               />

               <div className="text-helper-input-file">
                  <span>Tarik dan letakkan di sini</span>
               </div>
            </div>
            <div className="footer-multy-file"
               onClick={() => infil.current.click()}>
               <span>Cari gambar</span>
            </div>
         </div> */}

         <InputSelect 
            show={show}
            onShow={showSelect}
            items={category} 
            title={selected} 
            onSelect={(i)=>select(i)}
            />
         <InputSelect 
            show={show2}
            onShow={showSelect2}
            items={subCategory} 
            title={selected2} 
            onSelect={(i)=>select2(i)}
            />

         <InputText
         value={prodValue}
         placeholder="Nama produk"
         onChange={(v)=>changeProduct(v)}/>

         <Button
         title="simpan"
         onClick={saveProduct}
         />
      </div>
   )
   
}
export default App