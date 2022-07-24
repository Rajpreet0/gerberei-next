import React from 'react'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import HistoryCards from '../../components/history/historyCards/HistoryCards'
import Timeline from '../../components/history/timeline/Timeline'

function Geschichte() {
  return (
   <>
   <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  -  Geschichte der Gerberfamilie Vill.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Links, Jagd, Natur, Firmenlogo, Gerberei Vill, Gerberhandwerk, Fellgerbung, Horstmar"></meta>
        <meta name="description" content="Die Geschichte der Gerberfamilie Vill"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
   </Head>
   <Header/>
    <div className='min-h-screen pt-44'>
      <div className='text-center'>
          <h1 className='history_headline font-bold text-4xl tracking-wider md:text-5xl'>Unsere Geschichte</h1>
          <h2 className='p-5 text-lg md:text-xl'>Wir sind die älteste Gerberei im Münsterland und eine der ältesten in ganz Deutschland. <br/> Sie wurde bereits 1810 gegründet und seit 1820 unter dem Familiennamen Vill geführt.</h2>
      </div>
      <Timeline/>
      
      <HistoryCards/>
    </div>
    <Footer/>
   </> 
  )
}

export default Geschichte