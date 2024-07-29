import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { BsSend } from "react-icons/bs";
import axios from "axios"
import Footer from '@/view-trip/components/Footer';
import { Link } from 'react-router-dom';

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_MAPS_API_KEY
function TripCard({ past }) {

    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        [past] && getPlacePhoto();
    }, [past])
    const data = {
        textQuery: past?.userSelection?.location?.label
    }
    const getPlacePhoto = async() => {
        const res = await GetPlaceDetails(data).then(resp => {
            const photoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[0].name);
            setPhotoUrl(photoUrl)
        })
    }
  return (
    <Link to={'/view-trip/'+past?.id}>
        <div className='mb-5 hover:scale-105 transition-all'>
            <img src={photoUrl} className='h-[330px] w-full object-cover rounded-xl'/>
            <div className='text-center mt-8'>
                <h2 className='font-semibold text-lg text-sky-700'>{past?.userSelection?.location?.label}</h2>
                <h2 className='text-sm text-black'>{past?.userSelection?.numDays}-Day Trip With A {past?.userSelection?.budget} Budget</h2>
            </div>
                
        </div>
    </Link>

  )
}

export default TripCard