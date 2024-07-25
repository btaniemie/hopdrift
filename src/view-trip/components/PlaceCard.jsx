import React from 'react'

function PlaceCard({ place }) {
  return (
    <div className='border rounded-xl p-3 mt-3 shadow-md flex gap-5'>
        <img src='/hotel.jpg' className='w-[130px] h-[130px] rounded-xl'/>
        <div className=''>
            <h2 className='font-medium text-md'>{place.placeName}</h2>
            <p className='text-sm text-gray-500'>📍 {place.placeDetails}</p>
        </div>
    </div>
  )
}

export default PlaceCard