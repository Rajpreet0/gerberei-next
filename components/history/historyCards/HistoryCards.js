import React from 'react'

import Wasserwerkstatt from '../../../images/geschichte/wasserwerkstatt.png';
import Gerbung from '../../../images/geschichte/gerbung.png';
import Zurichtung from '../../../images/geschichte/zurichtung.jpg';
import Image from 'next/image'

function HistoryCards() {
  return (
      <div>
         <h1 className='text-center text-4xl history_headline'>Unsere Arbeitsschritte</h1>  
        <div className='p-4 mb-20 mt-20 flex items-center justify-around flex-col w-full md:flex-row '>
           <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm'>
              <Image src={Wasserwerkstatt}  className='rounded-t-lg' alt='Erster Arbeitsschritt die Wasserwerkstatt'/>
             <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Wasserwerkstatt</h5>

             </div>
            </div>

            <div className='max-w-sm mt-4 bg-white rounded-lg border border-gray-200 shadow-sm'>
              <Image src={Gerbung} className='rounded-t-lg' alt='Zweiter Arbeitsschritt die Gerbung'/>
             <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Gerbung</h5>
                
             </div>
            </div>

            <div className='max-w-sm mt-4 bg-white rounded-lg border border-gray-200 shadow-sm'>
              <Image src={Zurichtung} className='rounded-t-lg' alt='Letzter Arbeitsschritt die Zurichtung'/>
             <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Zurichtung</h5>
                
             </div>
            </div>
            </div>
    </div>
  )
}

export default HistoryCards
