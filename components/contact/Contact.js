import React from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoLocationSharp} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import { useState } from 'react';

function Contact() {
 
     //* EmailJS Connection

    const [surname, setSurname]         = useState("");
    const [lastname, setLastname]       = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail]             = useState("");
    const [message, setMessage]         = useState("");

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
          'service_n0yvlo6',
          'template_nya85o9',
          e.target,
          'user_DqC5rvxcAlPZUfFgcyeFT'
        ).then(res => {
          toast.success(`Die Email wurde erfolgreich versickt. Wir werden uns melden!`);
          setSurname('');
          setLastname('');
          setEmail('');
          setPhoneNumber('');
          setMessage('');
        }).catch(err => {
           toast.error(`Leider ist was schiefgelaufen`)
        });
      }



  return (
    <div>
          <ToastContainer/>
          <div className="contact_container">
            <div className="contact_title">
                <h2 className='font-bold tracking-wider text-4xl mb-4 history_headline md:text-5xl'>Kontaktieren Sie Uns</h2>
            </div>
            <div className="contact_box">
               <div className="contact form">
                   <h3>Senden Sie eine Nachricht</h3>
                   <form onSubmit={sendEmail}>
                       <div className="contact_formBox">
                           <div className="row50">
                              <div className="contact_inputBox">
                                <span>Vorname</span>
                                <input name='surname' value={surname} onChange={() => setSurname()} type="text" placeholder="Max" required></input>
                              </div>
                              <div className="contact_inputBox">
                                <span>Nachname</span>
                                <input name='lastname' value={lastname} onChange={() => setLastname()} type="text"  placeholder="Mustermann" required></input>
                              </div>
                           </div>
                           <div className="row50">
                              <div className="contact_inputBox">
                                <span>Email</span>
                                <input name='email' value={email} onChange={() => setEmail()} type="text"  placeholder="max.mustermann@email.com" required></input>
                              </div>
                              <div className="contact_inputBox">
                                <span>Telefon</span>
                                <input name='phone_number' value={phonenumber} onChange={() => setPhoneNumber()} type="text"  placeholder="+49 123 456789" required></input>
                              </div>
                           </div>
                           <div className="row100">
                              <div className="contact_inputBox">
                                <span>Nachricht</span>
                                <textarea name='message' value={message} onChange={() => setMessage()}  placeholder="Deine Nachricht..." required></textarea>
                              </div>
                           </div>   
                           <div className="row100">
                              <div className="contact_inputBox">
                                 <input type="submit" value="Senden"></input>
                              </div>
                            {/*  <PuffLoader color={color}  size={25} loading={loading}/>
                              {
                               show ? <CheckCircleIcon  sx={{ fontSize: 20 , color: '#B31329'}} /> : null
                               } */}
                           </div>
                       </div>
                   </form>
               </div>
               <div className="contact infoc">
                   <h3>Kontakt Info</h3>
                   <div className="contact_infoBox">
                       <div>
                           <span className="contact_span"><IoLocationSharp style={{ color: '#fff' , fontSize: 25}}/></span>
                           <p>Stadtwall 3, 
                              48612 Horstmar, <br/> NRW</p>
                       </div>
                       <div>
                           <span className="contact_span"><MdEmail style={{ color: '#fff' , fontSize: 25}}/></span>
                           <a href="mailto:Gerberei@vill.de">Gerberei@vill.de</a>
                       </div>
                       <div>
                           <span className="contact_span"><BsTelephoneFill sxstyle={{ color: '#fff' , fontSize: 20}}/></span>
                           <a href="tel:025527127">02552-7127</a>
                       </div>
                       {/*
                       <ul className="contact_sci">
                         <li><a href="https://www.linkedin.com/in/bettina-th%C3%BCnemann-57528a19a/"><BsFacebook style={{ color: '#fff' , fontSize: 30}}/></a></li>
                         <li><a href="https://www.instagram.com/bettina_thue/"><AiFillInstagram style={{ color: '#fff' , fontSize: 35}}/></a></li>
                         <li><a href="https://www.instagram.com/bettina_thue/"><AiFillTwitterCircle style={{ color: '#fff' , fontSize: 35}}/></a></li>
                              </ul> */}
                   </div>
               </div>
               <div className="contact map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9807.536416505494!2d7.3026762!3d52.0818396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa207c158c96cd37f!2sGerberei%20Vill!5e0!3m2!1sde!2sde!4v1639518940683!5m2!1sde!2sde" 
                style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Contact