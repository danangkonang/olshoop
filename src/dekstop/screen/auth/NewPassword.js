import React from 'react'
import InputText from '../../components/InputText'
import Btn from '../../components/Button'
const App = ()=> {
   return(
      <div className="wrapper-reset-password">
         <div className="card-reset-form">
            <InputText
            title="Password baru"
            />
            <InputText
            title="Ulangi password"
            />
            <Btn
            block={true}
            title="Simpan"
            />
         </div>
      </div>
   )
}
export default App