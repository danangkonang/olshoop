import React, { Component } from 'react'
import Carousel from '../screen/tes/Corousel'
// import Buttons from '../screen/tes/Buttons'
import Dots from '../screen/tes/Dot'
export default class App extends Component {

   constructor () {
      super()
      this.state = {
        axis: 'x'
      }
      this.setAxis = axis => {
        return () => this.setState({'axis': axis})
      }
   }

   render(){
      return(
         // <div style={{height: '100%'}}>
            <Carousel 
               loop 
               axis={this.state.axis} 
               widgets={[Dots]} 
               // widgets={[Dots, Buttons]} 
               className="custom-class"
               >
               <p style={{backgroundColor: 'royalblue', height: '100%'}}>FRAME 1</p>
               <p style={{backgroundColor: 'orange', height: '100%'}}>FRAME 2</p>
               <p style={{backgroundColor: 'orchid', height: '100%'}}>FRAME 3</p>
            </Carousel>
         // </div>
      )
   }
}