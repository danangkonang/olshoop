import React from 'react'
import InputText from '../../components/InputText'
import Btn from '../../components/Button'
const App = ()=> {
   return(
      <div className="wrapper-reset-password">
         <div className="title-reset-password">
            kami akan mengirim link untuk mereset password ke email
         </div>
         <div className="card-reset-form">
            <InputText
               title="Email"/>
            <Btn
               block={true}
               title="Kirim"/>
         </div>
      </div>
   )
}
export default App