import "./Destination.css"
import React from 'react'
import DestinationData from "./DestinationData"

function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tour give you the opportunity to see alot within the time frame</p>
        <DestinationData
        heading="Hunza Valley, Pakistan"
        text="One of the most breathtaking valleys in the world, Hunza offers snow-capped peaks, ancient forts, and warm hospitality. The drive through Karakoram Highway itself is an unforgettable experience. Cherry blossom season in spring transforms the valley into a pink paradise. Stay in a local guesthouse, sip on fresh apricot juice, and watch the sunset paint Rakaposhi mountain in golden light."
        img1="/image.png"
        img2="/Contact.jpg"
        className="first-des"/>
          <DestinationData
        heading="Paris, France"
        text="No city on Earth captures the heart quite like Paris. Walk beneath the glittering Eiffel Tower at night, cruise along the Seine river as golden light reflects off ancient bridges, and lose yourself in cobblestone streets filled with the aroma of fresh croissants and coffee. Every corner of this city tells a love story. Whether you are standing inside the grand Louvre museum, watching artists paint in Montmartre, or simply sitting at a sidewalk cafe watching Parisians rush by — Paris wraps around you like a warm embrace and never fully lets go. "
        img1="/3.jpg"
        img2="/4.jpg"
        className="second-des"/>
        </div>
    )
}

export default Destination

