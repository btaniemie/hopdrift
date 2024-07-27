import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { BsSend } from "react-icons/bs";

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_MAPS_API_KEY
function TripCard({ past }) {
    // const [photoUrl, setPhotoUrl] = useState();
    // useEffect(() => {
    //     [past] && getPlacePhoto();
    // }, [past])
    // const data = {
    //     textQuery: past?.userSelection?.location?.label
    // }
    // const getPlacePhoto = async() => {
    //     const res = await GetPlaceDetails(data).then(resp => {
    //         const photoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[0].name);
    //         setPhotoUrl(photoUrl)
    //     })
    // }
  return (
    <div className='xl:ml-28'>
        {/* <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl text-sky-700'>{past?.userSelection?.location?.label}</h2>
            </div>
        </div> */}
        <h2>past</h2>
    </div>
  )
}

export default TripCard