import React from 'react'

function Itinerary({ trip }) {
  return (
    <div className='xl:ml-28'>
        <h2 className='font-bold text-lg mt-5'>Places You Should See</h2>

        <div>
            {trip.tripData?.itinerary.map((item, index) => (
                <div>
                    <h2 className='font-medium text-lg text-sky-700'>{item.day}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Itinerary