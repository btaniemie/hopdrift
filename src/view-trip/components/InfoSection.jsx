import { Button } from '@/components/ui/button'
import React from 'react'
import { BsSend } from "react-icons/bs";


function InfoSection({ trip }) {
  return (
    <div className='xl:ml-28'>
        <img src='/placeholder.jpg' className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl text-sky-700'>{trip?.userSelection?.location?.label}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📌 {trip.userSelection?.numDays}-day trip</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md' >💲 {trip.userSelection?.budget} budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>👤 Number of people: {trip.userSelection?.numTravellers}</h2>
                </div>
            </div>

            <Button>
                <BsSend />
            </Button>
        </div>
    </div>
  )
}

export default InfoSection