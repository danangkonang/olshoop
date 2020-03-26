import React, { Fragment } from 'react'
import {
   AiOutlineCopyright
} from 'react-icons/ai'
const App = ()=> {
   return(
      <Fragment>
         <hr style={{borderWidth:0,height:1,background:'rgba(0,0,0,.3)'}}/>
      <div className="wrapper-footer">
         <div className="sub-wrapper-footer">
            <div className="footer-left">
               <div className="sub-footer">
                  <div className="title-footer">ceodeaja</div>
                  <ul className="tentang-me">
                     <li><a href="/login">blog</a></li>
                     <li><a href="/login">tentang kami</a></li>
                     <li><a href="/login">syarat dan ketentuan</a></li>
                     <li><a href="/login">Kebijakan privasi</a></li>
                     <li><a href="/login">bantuan</a></li>
                  </ul>
               </div>
               <div className="sub-footer">
               <div className="title-footer">Pengguna</div>
                  <ul className="tentang-me">
                     <li><a href="/login">Sayrat memasang iklna</a></li>
                     {/* <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li> */}
                  </ul>
               </div>
               <div className="sub-footer">
               <div className="title-footer">pembeli</div>
                  <ul className="tentang-me">
                     <li><a href="/login">labore laboris</a></li>
                     {/* <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li> */}
                  </ul>
               </div>
            </div>
            <div className="footer-right">
               
               <div className="sub-footer">
               <div className="title-footer">Ikuti kani</div>
                  <ul className="tentang-me">
                     <li><a href="/login">facebook</a></li>
                     <li><a href="/login">instagram</a></li>
                     <li><a href="/login">youtube</a></li>
                     <li><a href="/login">tweeter</a></li>
                     <li><a href="/login">linkedin</a></li>
                  </ul>
               </div>
               <div className="sub-footer-right">
               
               </div>
            </div>
         </div>
         <div className="sub-bottom">
            <AiOutlineCopyright/>
            <div>hakcipta di lindungi domoin.com</div>
         </div>
      </div>
      </Fragment>
   )
}
export default App