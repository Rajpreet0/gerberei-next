import React from 'react'
import {BsFacebook,BsTwitter} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import Link from 'next/link';

function Error() {
  return (
  <>  
    <div className="error_main">
           <div className="rror_wrapper">
              <div className="error_errors-top">
                 <div className="error_errors-info">
                    <h3 className='pt-24 md:pt-0'>404</h3>
                    <p>Oops! Diese Seite gibt es nicht</p>


                    <div className="error_social-icons">
                     {/*  <a href="#"><span><BsFacebook/></span></a>
                       <a href="#"><span><BsTwitter/></span></a>
                       <a href="#"><span><AiOutlineInstagram/></span></a> */}
                      <a href='tel:025527127'><BsTelephoneFill style={{fontSize: 21}}/></a>
                      <a href='mailto:Gerberei@vill.de'><MdEmail style={{fontSize: 25}}/></a>
                    </div>


                  <div>
                     <p>Kontaktiere uns für Verbesserungen</p>
                    <div className='mt-8'>
                     <Link href="/kontakt"><a className='text-white text-lg p-4 rounded-lg ' style={{backgroundColor: '#7b6152'}}>Support</a></Link>
                    </div>
                  </div>

                 </div>
              </div>
              <div className="error_copyright-footer">
                  <div className="error_copy-right">
                     <p>2022 404 Seite. Alle Rechte vorbehalten | <a href="/">Gerberi Vill</a></p>
                  </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default Error