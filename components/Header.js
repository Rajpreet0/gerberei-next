import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

import Logo from '../images/gerberei-logo.png';
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

function Header() {
    
    const [toggle, setToggle] = useState(false);
    const toggleModal = () => {
        setToggle(!toggle);
     }

  return (
    <div >
    <nav className='fixed   bg-white w-full p-2 font-nunito z-50  '>
     <div className='flex  items-center justify-between '>
      <div className='p-4 '>
         <Link href='/'>
          <a>
           <Image
           priority
           src={Logo} height={60} width={55} alt='Logo der Gerberei Vill'/>
          </a>
         </Link>
      </div>
      <div className='hidden md:flex space-x-14 text-xl text-gray-600 '>
        <Link href='/'>
            <a className='hover:text-amber-900 hover:tracking-widest transition-all'>
                Home
            </a></Link>
            <Link href='/geschichte'>
            <a className='hover:text-amber-900 hover:tracking-widest transition-all'>
                Geschichte
            </a></Link>
        <Link href='/markt'>
            <a className='hover:text-amber-900 hover:tracking-widest transition-all'>
               Markt
            </a></Link>
        <Link href='/produkte'>
            <a className='hover:text-amber-900 hover:tracking-widest transition-all'>
                Produkte
            </a></Link>
        <Link href='/kontakt'>
            <a className='hover:text-amber-900 hover:tracking-widest transition-all pr-4'>
               Kontakt
            </a></Link>
      </div>


       {/* Mobile Menu */}

       {
            !toggle &&(
          <button id='menu-btn'
          className='block hamburger md:hidden focus:outline-none'>
             <HiMenuAlt3 
             style={{color: '#7b6152'}}
             onClick={toggleModal}
             className='text-3xl cursor-pointer'/>
          </button>
          ) }
          {
            toggle && (
              <button id='menu-btn'
              className='block hamburger md:hidden focus:outline-none'>
                 <AiOutlineClose
                 style={{color: '#7b6152'}} 
                 onClick={toggleModal}
                 className='text-3xl cursor-pointer'/>
              </button>
            )
          }

     </div>

     { 
       toggle && (  
      
       <div className=''>
         <div className='absolute flex flex-col items-center  self-end 
          py-8 mt-15 space-y-6 font-bold bg-white sm:w-auto
          sm:self-center left-6 right-6 drop-shadow-xl text-amber-900 transition-all'>
        <Link href='/'>
            <a className='text-xl '>
               Home
            </a></Link>
            <Link href='/geschichte'>
            <a className='text-xl'>
               Geschichte
            </a></Link>
        <Link href='/markt'>
            <a className='text-xl'>
               Markt
            </a></Link>
        <Link href='/produkte'>
            <a className=' text-xl'>
               Produkte
            </a></Link>
        <Link href='/kontakt'>
            <a className=' text-xl'>
               Kontakt
            </a></Link>
            
        
         </div>
       </div>
       )}
    </nav>
</div>
  )
}

export default Header