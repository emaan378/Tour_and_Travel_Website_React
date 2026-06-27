import React from 'react'
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

function Service() {
  return (
    <>
    <Hero
    cName="hero-about"
    heroimg="/About.jpg"
    title="Service"
    buttonText="Travel plan"
    url="/"
    btnClass="hide"
    />
    <Trip/>
    <Footer/>
 
    </>
  )
}

export default Service;
