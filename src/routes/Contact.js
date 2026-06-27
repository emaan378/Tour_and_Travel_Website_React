import React from 'react'
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

function Contact() {
  return (
    <>
  <Hero
    cName="hero-about"
    heroimg="/Contact.jpg"
    title="Contact"
    buttonText="Travel plan"
    url="/"
    btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
    </>
   
  )
}

export default Contact;
