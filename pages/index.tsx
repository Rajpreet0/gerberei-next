import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/home/hero/HeroSection';
import MultipleBox from '../components/home/multiplebox/MultipleBox';
import InformationCards from '../components/home/informationCards/InformationCards';
import ThreeDBtn from '../components/home/three_d_btn/Three_D_Btn';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  -  Ihr starker Partner in Sachen Natur, Wärme und Wohlbefinden.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Gerberei, gerben, Felle, Fellen, Häute, Fellprodukte, Lederprodukte, Lohngerbung, Horstmar"></meta>
        <meta name="description" content="Gerbung von Fellen und Häuten, Verkauf von Fellen und Leder, sowie von Fellprodukten und Lederprodukten"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
       
       <Header/>
       <div className='min-h-screen'>
         <HeroSection/>
         <MultipleBox/>
         <InformationCards/>
         <ThreeDBtn/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home
