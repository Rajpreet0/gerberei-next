import React from 'react'
import Error from '../../components/error/Error'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'

function ErrorPage() {
  return (
    <div>
       <Header/> 
         <Error/>
       <Footer/>  
    </div>
  )
}

export default ErrorPage