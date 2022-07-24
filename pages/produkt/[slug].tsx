import { GetStaticProps } from 'next'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import {sanityClient, urlFor} from '../../sanity'
import { ProduktData } from '../../typings'
import {MdKeyboardBackspace} from 'react-icons/md';
import Link from 'next/link'
import Head from 'next/head'

interface Props {
    produkt: ProduktData;
}

export default function Produkt({produkt}:Props) {
    console.log(produkt)


  return (
    <>
    <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  - {produkt.titel}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Pordukte, Fell, Leder"></meta>
        <meta name="description" content="Unsere Produkte im Detail"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>
    <Header/>
      <div className='min-h-screen  p-4 pt-28 md:pt-0'>
      <Link href='/produkte'>  
       <div className='pt-22 p-4 flex cursor-pointer md:pt-32'> 
        <MdKeyboardBackspace size={28}/>
        <p className='ml-2 text-lg'>Andere Produkte</p>
       </div>
      </Link>
       <div className='flex flex-col items-center justify-center w-full min-h-screen md:flex-row '> 
        <div className=' md:w-7/12'> 
            
            <img src={urlFor(produkt.produktBild).url()!} alt="Details der Produkte"></img>

         </div>
       <div className='p-8 '>  
         <h1 className='text-3xl font-bold'>{produkt.titel}</h1>
         <h2 className='mt-4 uppercase text-lg tracking-wider '>{produkt.kategorie}</h2>
         <h3 className='mt-4 text-2xl font-bold'>{produkt.preis} €</h3>
         <p className='mt-4 text-lg'>{produkt.produktBeschreibung}</p>
        </div>
        </div>  
      </div>
    <Footer/>
    </>
  )
}

export const getStaticPaths = async () =>{
    const query = `*[_type == "produkte"]{
        _id,
        slug {
            current
        }
    }`

    const produkte = await sanityClient.fetch(query);

    const paths = produkte.map((produkt : ProduktData) => ({
        params: {
            slug: produkt.slug.current,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "produkte" && slug.current == $slug] [0]{
        _id,
        titel,
        kategorie,
        produktBeschreibung,
        preis,
        produktBild,
        slug,

    }`

    const produkt = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!produkt) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            produkt,
        },
        revalidate: 60,
    }
}