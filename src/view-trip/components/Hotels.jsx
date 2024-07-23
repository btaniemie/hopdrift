import React from 'react'

function Hotels({ trip }) {
  return (
    <div className='xl:ml-28'>
        <h2 className='font-bold text-xl mt-5 mb-3'>Recommended Hotels</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5'>
            {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                <div className='hover:scale-105  transition-all cursor-pointer'>
                    <img src='/hotel.jpg' className='rounded-xl'/>
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium'>
                            {hotel?.name}
                        </h2>
                        <h2 className='text-xs'>
                        🏢 {hotel?.address}
                        </h2>
                        <h2 className='text-xs'>
                        💶 {hotel?.price}
                        </h2>
                        <h2 className='text-xs'>
                        🌟 {hotel?.rating}
                        </h2>
                        <h2 className='text-xs text-sky-700'>
                        {hotel?.description}
                        </h2>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Hotels