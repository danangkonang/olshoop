import React, {useState} from 'react'
import InputFile from '../../components/InputFile'
import InputSelect from '../../components/InputSelect'
import InputText from '../../components/InputText'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
const App = ()=> {
   const [preview,setPreview]=useState([])

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
         preview,
         selected,
         selected2,
         prodValue
      }
      console.log(data)
   }

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
   }

   const onChange = (file)=>{
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
            image={preview}
            onDrop={(e)=>handleDrop(e)}
            onChange={(e)=>onChange(e)}
         />

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
         
         <TextArea
         title="descripsi"
         rows={8}
         />

         <Button
         title="simpan"
         onClick={saveProduct}
         />

      </div>
   )
   
}
export default App