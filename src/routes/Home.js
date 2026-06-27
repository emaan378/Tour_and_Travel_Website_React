import React from 'react'
import Hero from '../Components/Hero';
import Trip from '../Components/Trip';
import Destination from '../Components/Destination';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
    <Hero
    cName="hero"
    heroimg="/Hero.jpg"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>


    
      
    </>
  )
}

export default Home;
