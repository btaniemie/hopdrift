import { Button } from '@/components/ui/button';
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  return (
    <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:shadow-md hover:scale-105 transition-all'>
        <img src='/hotel.jpg' className='w-[130px] h-[130px] rounded-xl'/>
        <div className='flex flex-col gap-2'>
            <h2 className='font-medium text-md'>{place.placeName}</h2>
            <p className='text-sm'>💲 {place.ticketPricing}</p>
            <p className='text-sm'>⭐ {place.rating}</p>
            <p className='text-sm text-sky-800'>{place.placeDetails}</p>
        </div>
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName} target='_blank'>
            <Button><FaMapLocationDot />
            </Button>
        </Link>
    </div>
  )
}

export default PlaceCard