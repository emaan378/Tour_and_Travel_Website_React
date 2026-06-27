import React from 'react'
import "./Trip.css"
import TripData from './TripData';

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className='tripcard'>
                <TripData
                    image="5.jpg"
                    heading="Trip in Indonesia"
                    text="Indonesia is a stunning archipelago of over 17,000 islands stretching across turquoise tropical waters. From the terraced rice fields of Bali to the ancient temples of Yogyakarta and the untouched jungles of Borneo, every island tells a completely different story. Dive into crystal clear seas, witness breathtaking volcanic sunrises"
                />
                    <TripData
                    image="6.jpg"
                    heading=" Trip in France"
                    text="France is a country that effortlessly blends timeless romance with breathtaking beauty at every turn. Stroll beneath the sparkling Eiffel Tower in Paris, sip wine among endless golden vineyards in Bordeaux, and explore fairy tale castles along the Loire Valley., France offers a different kind of magic in every direction you turn."

                />
                <TripData
                    image="7.jpg"
                    heading="Trip in Malaysia"
                    text="Malaysia is a vibrant blend of jungle, city, and coastline packed into one extraordinary destination.  Pristine white sand beaches, world class street food, and a rich mix of Malay, Chinese, and Indian cultures make Malaysia one of Southeast Asia's most exciting and rewarding destinations."
                />
            </div>
        </div>
    )
}

export default Trip;
