import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function PlaceCard({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        place && getPlacePhoto();
    }, [place])
    const data = {
        textQuery: place?.placeName
    }
    const getPlacePhoto = async() => {
        const res = await GetPlaceDetails(data).then(resp => {
            const photoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[0].name);
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:shadow-md hover:scale-105 transition-all'>
        <img src={photoUrl} className='w-[130px] h-[130px] rounded-xl object-cover'/>
        <div className='flex flex-col gap-2'>
            <h2 className='font-medium text-md'>{place?.placeName}</h2>
            <p className='text-sm'>💲 {place?.ticketPricing}</p>
            <p className='text-sm'>⭐ {place?.rating}</p>
            <p className='text-sm text-sky-800'>{place?.placeDetails}</p>
        </div>
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName} target='_blank'>
            <Button><FaMapLocationDot />
            </Button>
        </Link>
    </div>
  )
}
// className='flex flex-col gap-2'

export default PlaceCard