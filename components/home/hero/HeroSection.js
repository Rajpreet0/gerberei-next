import Image from 'next/image'
import React from 'react'
import Background from '../../../images/background.jpg'

function HeroSection() {
  return (
    <div className="home_heroConatiner">
    <div className="home_hero_bg">
       <Image src={Background}  layout='fill' className='object-center' alt='Hauptbild der Gerberei'></Image>
    </div>
    <div className="home_heroContent">
          <h1 className="font-dancing text-6xl text-white">Gerberei Vill</h1>
          <h2 className='font-dancing text-white text-3xl'>Anno 1810</h2>
          <p className="home_heroContent-p">Qualität aus 200 Jahren Erfahrung</p>
       <div className="home_heroContent-btn">
        <a href="/geschichte">Entdecke</a>
       </div>  
    </div>
</div>
  )
}

export default HeroSection
