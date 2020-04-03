import React, { Fragment } from 'react'
import {
   AiOutlineCopyright
} from 'react-icons/ai'
import{
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaWhatsapp
} from 'react-icons/fa'
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
                  </ul>
               </div>
               <div className="sub-footer">
               <div className="title-footer">pembeli</div>
                  <ul className="tentang-me">
                     <li><a href="/login">labore laboris</a></li>
                  </ul>
               </div>
            </div>
            <div className="footer-right">
               <div className="sub-footer">
               <div className="title-footer">Ikuti kami</div>
                  <ul className="tentang-icon-me">
                     <li>
                        <a href="/" className="icon-sosmed-footer">
                           <div className="icon-footer">
                              <FaInstagram size={12} color="#fff"/>
                           </div>
                           <div>
                              instagram
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="/" className="icon-sosmed-footer">
                           <div className="icon-footer">
                              <FaFacebookF size={12} color="#fff"/>
                           </div>
                           <div>
                              facebook
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="/" className="icon-sosmed-footer">
                           <div className="icon-footer">
                              <FaTwitter size={12} color="#fff"/>
                           </div>
                           <div>
                              twitter
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="/" className="icon-sosmed-footer">
                           <div className="icon-footer">
                              <FaWhatsapp size={12} color="#fff"/>
                           </div>
                           <div>
                              whatsapp
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="sub-footer-right">
               
               </div>
            </div>
         </div>
         <div className="sub-bottom">
            <AiOutlineCopyright/>
            <div className="text-copy-right"> hakcipta di lindungi ceodeaja.com</div>
         </div>
      </div>
      </Fragment>
   )
}
export default App