import React from 'react'
import PlaceCard from './PlaceCard'

function Itinerary({ trip }) {
  return (
    <div className='xl:ml-28'>
        <h2 className='font-bold text-lg mt-5'>Places You Should See</h2>

        <div>
            {trip.tripData?.itinerary.map((item, index) => (
                <div>
                    <h2 className='font-medium text-lg text-sky-700 mt-2'>{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5 mb-3'>
                        {item.plans.map((place, index) => (
                            <div className=''>
                                <PlaceCard place={place} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Itinerary