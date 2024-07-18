import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { selectBudgetList, selectTravellerList } from '@/constants/options';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your preferences to get started! 🗺️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Share some basic details, and we'll handle the rest.</p>

      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700'>Where do you want to travel to?</h2>
          <GooglePlacesAutocomplete 
            apiKey='AIzaSyC-u6V6eq5ua1q2nTaGdo17wOQklwefbmk' 
            selectProps={{
              place,
              onChange: (v) => {setPlace(v); handleInputChange('location', v)}
            }}
          />   
        </div >
        
        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700'>How many days do you plan on staying?</h2>
          <Input placeholder={'Ex: 5'} type="number" onChange = {(e) => handleInputChange('numDays', e.target.value)} />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700'>What type of budget are you planning for your trip?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {selectBudgetList.map((item, index) => (
              <div 
                key={index} 
                className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'
                onClick={() => handleInputChange('budget', item.title)}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>

              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700'>Who will you be traveling with?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {selectTravellerList.map((item, index) => (
              <div 
                key={index} 
                className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'
                onClick={() => handleInputChange('numTravellers', item.people)}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip