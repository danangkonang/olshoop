import React, { Fragment } from 'react'
import {
   AiOutlineCopyright
} from 'react-icons/ai'
import { from } from 'zen-observable'
const App = ()=> {
   return(
      <Fragment>
         <hr style={{borderWidth:0,height:1,background:'rgba(0,0,0,.3)'}}/>
      <div className="wrapper-footer">
         <div className="sub-wrapper-footer">
            <div className="footer-left">
               <div className="sub-footer">
                  <div className="title-footer">me</div>
                  <ul className="tentang-me">
                     <li><a href="/login">blog</a></li>
                     <li><a href="/login">tentang kami</a></li>
                     <li><a href="/login">syarat dan ketentuan</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                  </ul>
               </div>
               <div className="sub-footer">
               <div className="title-footer">pengiklan</div>
                  <ul className="tentang-me">
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                  </ul>
               </div>
               <div className="sub-footer">
               <div className="title-footer">pembeli</div>
                  <ul className="tentang-me">
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                  </ul>
               </div>
            </div>
            <div className="footer-right">
               
               <div className="sub-footer">
               <div className="title-footer">Bantuan</div>
                  <ul className="tentang-me">
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
                     <li><a href="/login">labore laboris</a></li>
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