import React from 'react'
import Hero from '../Components/Hero';
import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

function About() {
  return (
    <>
    <Hero
    cName="hero-about"
    heroimg="/About.jpg"
    title="About"
    btnClass="hide"
    />
  
    <AboutUs/>
    <Footer/>
      
    </>
  )
}

export default About;
