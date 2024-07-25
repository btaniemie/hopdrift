import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        hotel && getPlacePhoto();
    }, [hotel])
    const data = {
        textQuery: hotel?.hotelName
    }
    const getPlacePhoto = async() => {
        const res = await GetPlaceDetails(data).then(resp => {
            const photoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[0].name);
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + ',' + hotel?.address} target='_blank'>
    <div className='hover:scale-105  transition-all cursor-pointer'>
        <img src={photoUrl} className='rounded-xl h-[180px] w-full object-cover'/>
        <div className='my-2 flex flex-col gap-2'>
            <h2 className='font-medium text-sky-700'>
                {hotel?.hotelName}
            </h2>
            <h2 className='text-xs'>
            🏢 {hotel?.address}
            </h2>
            <h2 className='text-xs'>
            💳 {hotel?.price}
            </h2>
            <h2 className='text-xs'>
            ⭐ {hotel?.rating}
            </h2>
            <h2 className='text-xs text-gray-500'>
             {hotel?.description}
            </h2>
        </div>
    </div>
</Link>
  )
}

export default HotelCardItem