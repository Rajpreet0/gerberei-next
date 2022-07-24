import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BsArrowUpSquareFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { animateScroll as scroll} from 'react-scroll';
import Link from 'next/link';

function Footer() {

    const router = useRouter();
 
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToTopLogo = () => {
        router.push('/');
        scroll.scrollToTop();
    }


  return (
    <footer>

    <div className='footer_content'>
    <div className='footer_scrollTop'>
       <BsArrowUpSquareFill style={{fontSize: 30}} onClick={() => scrollToTop()}/>
       
    </div>
      <h3 onClick={() => scrollToTopLogo()}>Gerberei Vill</h3>
      <p>Ihr starker Partner in Sachen Natur, Wärme und Wohlbefinden.</p>
      <ul className='footer_socials'>
        {/* <li><a href='#'><BsFacebook style={{fontSize: 20}}/></a></li>
         <li><a href='#'><AiFillTwitterCircle style={{fontSize: 25}}/></a></li>
         <li><a href='#'><AiFillInstagram style={{fontSize: 25}}/></a></li> */}   
         <li><a href='tel:025527127'><BsTelephoneFill style={{fontSize: 21}}/></a></li>
         <li><a href='mailto:Gerberei@vill.de'><MdEmail style={{fontSize: 25}}/></a></li>
      </ul>
      <ul className='footer_links'>
      <li><Link  href='/impressum'><a>Impressum</a></Link></li>
      <li><Link href='/produkte'><a>Produkte</a></Link></li>
         <li><Link href='/kontakt'><a>Kontakt</a></Link></li>
      </ul>
    </div>
    <div className='footer_bottom'>
       <p>Copyright &copy;2022 Gerberei Vill. Entwickelt von <span><a 
       target="_blank" rel='noopener noreferrer'
       href="https://honet.page/">Honet</a></span></p>
    </div>
</footer>
  )
}

export default Footer