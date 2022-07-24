import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Head from 'next/head'

import {HiOutlineClock} from 'react-icons/hi';
import {IoLocationSharp} from 'react-icons/io5';

import {sanityClient, urlFor} from '../../sanity';
import {MarktData} from '../../typings';

interface Props {
  markt: [MarktData];
}

export default function Markt({markt}:Props) {
  
  return (
   <>
   <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  -  Unser Marktstand.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Markstand, Bauernmärkte"></meta>
        <meta name="description" content="Unser Marktstand auf Märkten und Veranstaltungen"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
   </Head>
   <Header/> 
    <div className='min-h-screen pt-44'>
    <div className='event_main'>
    <div className='event_container'>
        <div className='event_header_text'>
          <h2 className='text-5xl'>Unsere Märkte</h2>
        </div>

      {markt.map(markt => (

        <div className='event_section pt-24'>
          <div className='event_content'>
            <div className='event_img'>
               <img src={urlFor(markt.hintergrundBild).url()!} alt='Bilder von Marktständen'></img>
            </div>
            <div className='event_content_text'>
               <div className='event_menu'>
                   <h4>{markt.datum}</h4>
                   <ul className='event_detail'>
                     <li><HiOutlineClock/><span>{markt.uhrzeit}</span></li>
                     <li><IoLocationSharp/><span>{markt.standort}</span></li>
                   </ul>
               </div>
               <div className='event_text'>
                   <h4>{markt.marktTitel}</h4>
                   <p>{markt.marktBeschreibung}</p>
               </div>   
            </div>
          </div>
        </div>
        ))}
    </div>   
   </div> 
    </div>
   <div className='mt-24'> 
    <Footer/>
   </div>
   </>
 )
}



// SSR for Markt Dataset 
export const getServerSideProps = async () => {
  const query = `*[_type == "markt"] | order(publishedAt desc) {
    _id,
    datum,
    uhrzeit,
    standort,
    marktTitel,
    marktBeschreibung,
    hintergrundBild
  }`;

  const markt = await sanityClient.fetch(query);

  return {
    props: {
      markt,
    }
  }
}
