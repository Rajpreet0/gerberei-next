import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';

function Kontakt() {
  return (
   <>
   <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  -  Unsere Kontaktdaten.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Adresse, Horstmar, Gerberei, Anlieferung"></meta>
        <meta name="description" content="Kontakt zur Gerberei Vill"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
   </Head>
   <Header/>  
    <div className='min-h-screen pt-24'>
      <Contact/>
    </div>
    <Footer/>
   </>
  )
}

export default Kontakt