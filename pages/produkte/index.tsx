
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import Head from 'next/head'
import {sanityClient, urlFor} from '../../sanity';
import { ProduktData } from '../../typings';
import Link from 'next/link';
import {BiPlus} from 'react-icons/bi';
import {BsFillCartPlusFill} from 'react-icons/bs';

interface Props {
  produkte: [ProduktData];
}

export default function Products({produkte}:Props) {
  return (
    <>
    <Head>
        <title>Gerberei Vill, Horstmar: Lohngerberei, Felle gerben und Verkauf  - Unsere Produkte.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='Author' content='Patrick Vill'/>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></meta>
        <meta http-equiv="Content-Language" content="de"></meta>
        <meta name="revisit-after" content="5 days"></meta>
        <meta name="keywords" content="Felle, Fellartikel, Lammfell, Leder, Jagdhemden aus Baumwolle, Produkte"></meta>
        <meta name="description" content="Die Produkte aus der Gerbung von Fellen und Häuten, sowie von Fellprodukten und Lederprodukten"></meta>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <Header/>
      <div className='min-h-screen'>
      <div className='shop_main'>
           <div className='shop_products'>
              <div className='shop_container'>
                 <h1 className='history_headline pt-32 text-center text-4xl'>Unsere Produkte </h1>

                 <div className='shop_product-items'>
                 <div>
         {/* --- single product --- */}
             
            {produkte.map(produkte => (

              <Link
              key={produkte._id}
              href={`/produkt/${produkte.slug.current}`}>

                                <div className='shop_product drop-shadow-lg'>
                        <div className='shop_product-content'>
                           <div className='shop_product-img'>
                           <img src={urlFor(produkte.produktBild).url()!} alt='Produkte von der Gerberei Vill Familie'></img>
                           </div>
                  
                           <div className='shop_product-btns'>
                            
                            <span className="mt-14"></span>
           
                       </div>  
                           
                        </div>
                        <div className='shop_product-info'>
                          <div className='shop_product-info-top'>
                            <h2 className='shop_sm-title'>{produkte.titel}</h2>
                            {/*
                            <div className='shop_rating'>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiOutlineStar/></span>
                            </div>
                            */ }
                          </div>
                          <a href='#' className='shop_product-name'>
                            {produkte.kategorie}
                          </a>
                          {/*
                          <p className='shop_product-price'>{props.productPreviousPrice}</p>
                          <p className='shop_product-price'>{props.productPrice}</p>
                           */ }
                        </div>
                        {/*
                        <div className='shop_off-info'>
                           <h2 className='shop_sm-title'>{props.productPrecentageOff}</h2>
                        </div>
                        */}
                    </div>
                  </Link>
                   ))}
                    {/* --- end of single product --- */}
                    
                    
        </div>
                 </div>
              </div>
           </div>
           
        </div>
      </div>
      <Footer/>
    </>
  )
}


// SSR for Produkte Dataset

export const getServerSideProps = async () => {
  const query = `*[_type == "produkte"]{
    _id,
    titel,
    slug,
    kategorie,
    produktBild,
  }`

  const produkte = await sanityClient.fetch(query);
 
  return{
    props: {
      produkte,
    }
  }

}