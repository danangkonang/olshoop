import React,{Fragment} from 'react'
import{
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaWhatsapp
} from 'react-icons/fa'
import Header from '../../components/Header'
const Detail = ()=> {
   return(
      <Fragment>
         <Header/>
         <div className="wrapper-detail">
            <div className="col-product">
               <div className="box-image">
                  <div className="primary-image">
                     <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="mobile" style={{height:'100%',width:'100%'}}/>
                  </div>
                  <div className="sub-image">
                     <div className="image-menu">
                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="mobile" style={{height:'100%',width:'100%'}}/>
                     </div>
                     <div className="image-menu">
                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="mobile" style={{height:'100%',width:'100%'}}/>
                     </div>
                     <div className="image-menu">
                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="mobile" style={{height:'100%',width:'100%'}}/>
                     </div>
                     <div className="image-menu">
                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="mobile" style={{height:'100%',width:'100%'}}/>
                     </div>
                  </div>
               </div>
               <div className="box-list-detail">
                  
                  <div className="body-list-product">
                     <div className="product-name-header">
                        <p className="name-product">Ea voluptate laborum fugiat laborum enim amet id laborum id nostrud culpa nulla exercitation in.</p>
                        <p className="prince-product">Rp. 200.000</p>
                     </div>

                     <div className="product-detail-list">
                        <div className="cart-list">
                           <div className="key-list">
                              Setok
                           </div>
                           <div className="value-list">
                              80
                           </div>
                        </div>
                        <div className="cart-list">
                           <div className="key-list">
                              Dilihat
                           </div>
                           <div className="value-list">
                              20
                           </div>
                        </div>
                        <div className="cart-list">
                           <div className="key-list">
                              Penjual
                           </div>
                           <div className="value-list">
                              agus jonathan
                           </div>
                        </div>
                        <div className="cart-list">
                           <div className="key-list">
                              Publish
                           </div>
                           <div className="value-list">
                              11-02-2020
                           </div>
                        </div>
                        <div className="cart-list">
                           <div className="key-list">
                              Alamat
                           </div>
                           <div className="value-list">
                              Ipsum aliquip laborum fugiat non nulla tempor sit.
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="footer-list-product">
                     <div className="text-share">
                        <span>Share</span>
                     </div>
                     <div className="box-icon-sosmed">
                        <a href="/" className="share-icon-sosmed">
                           <FaFacebookF/>
                        </a>
                        <a href="/" className="share-icon-sosmed">
                           <FaInstagram/>
                        </a>
                        <a href="/" className="share-icon-sosmed">
                           <FaTwitter/>
                        </a>
                        <a href="/" className="share-icon-sosmed">
                           <FaWhatsapp/>
                        </a>
                     </div>
                  </div>

               </div>
            </div>

            <div className="col-tex-description">
               <p className="description-product">
                  <span>Descripsi:</span>
               </p>
               <p className="text-description-product">
                  Incididunt culpa minim anim Lorem adipisicing et cillum qui. Sit quis velit in cupidatat ut. Amet duis sint exercitation exercitation pariatur ad duis ut. Cillum veniam consectetur minim Lorem officia laboris anim excepteur et nulla.
                  Dolore tempor ut anim nulla aliquip id sint laborum reprehenderit esse laborum fugiat qui. Voluptate amet aliqua sunt laboris non enim occaecat eu excepteur ea adipisicing eiusmod ut eiusmod. Dolor ex elit do et occaecat non. Aliquip enim qui adipisicing ipsum adipisicing sit excepteur proident minim. Veniam elit proident culpa nisi tempor commodo fugiat sint eiusmod consectetur eiusmod deserunt qui esse. Amet sunt occaecat qui nulla elit eiusmod fugiat excepteur. Sit qui duis in exercitation consequat consectetur culpa do Lorem deserunt esse tempor ut. Non sunt minim dolore labore laborum fugiat proident magna eu cillum nostrud Lorem. Magna eiusmod cillum duis pariatur fugiat est deserunt proident ullamco. Est irure nisi excepteur in ad incididunt qui ad aliquip nisi ullamco est in. Incididunt laborum deserunt aliquip adipisicing nulla excepteur minim id consequat ipsum cupidatat consequat. Ullamco deserunt pariatur ad aliquip enim in elit. Excepteur enim ipsum irure id aliquip aute. Eiusmod non veniam quis ipsum consequat velit officia est id irure. Mollit enim consequat exercitation non eu culpa velit irure ex laboris et.
               </p>
            </div>
         </div>
      </Fragment>
   )
}
export default Detail