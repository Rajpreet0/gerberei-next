import Image from 'next/image'
import React from 'react'
import Hauschuhe from '../../../images/products/hausschuhe.png';
import Hosentraeger from '../../../images/products/hosentraeger.png';
import Fahrradsattelbezug from '../../../images/products/fahrradsattelbezug.png';
import Handschuhe from '../../../images/products/handschuhe.png';

function MultipleBox() {
  return (
    <div className='multipleBox_main'>
          <div className='multipleBox_container'>
              <div className='multipleBox_card'>
                  <div className='multipleBox_imgBx'>
                      <Image src={Hauschuhe} layout='fill' className='object-center' alt='Hausschuhe aus Leder'></Image>
                  </div>
                  <div className='multipleBox_content'>
                      <div>
                          <h2 className='text-xl'>Hauschuhe</h2>
                          <p>Diese Brauen Hausschue gehören zu den Lammfellartikeln und sind in verschieden Farben erhältlich. Außerdem sind diese auch Personaliserbar.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='multipleBox_card'>
                  <div className='multipleBox_imgBx'>
                  <Image src={Hosentraeger} layout='fill' className='object-center' alt='Hosentraeger aus Leder'></Image>
                  </div>
                  <div className='multipleBox_content'>
                      <div>
                          <h2 className='text-xl'>Hosenträger</h2>
                          <p>Hosenträger gibt es in der Gerberei viele. Allein auf unseren Märkten haben wir ca. 50 verschiedene Hosenträger dabei.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='multipleBox_card'>
                  <div className='multipleBox_imgBx'>
                   <Image src={Fahrradsattelbezug} layout='fill' className='object-center' alt='Fahrradsattelbezug aus Lammfell'></Image>
                  </div>
                  <div className='multipleBox_content'>
                      <div>
                          <h2 className='text-xl'>Fahrradsattelbezug</h2>
                          <p>Diese Fahrradsattelbezüge gehören auch zu den Lammfellartikeln und sind perfekt für den Winter geeignet.
                          </p>
                      </div>
                  </div>
              </div>
              <div className='multipleBox_card'>
                  <div className='multipleBox_imgBx'>
                  <Image src={Handschuhe} layout='fill' className='object-center' alt='Lammfell Handschuhe'></Image>
                  </div>
                  <div className='multipleBox_content'>
                      <div>
                          <h2 className='text-xl'>Handschuhe</h2>
                          <p>Handschuhe wird man immer brauchen, deswegen ist die Investition in Lammfell Handschuhe sinnvoll.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default MultipleBox