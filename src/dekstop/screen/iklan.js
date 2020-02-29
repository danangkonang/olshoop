import React from 'react'

import InputFile from '../components/multiFile'
import Select from '../components/Select'
import Input from '../components/InputText'
import Btn from '../components/Button'

const App=()=> {
   return(
      <div className="wrapper-iklan" style={{background:'#fff',height:'100vh'}}>
         <InputFile/>
         <Input/>
         <Select/>
         <Btn/>
      </div>
   )
}
 export default App