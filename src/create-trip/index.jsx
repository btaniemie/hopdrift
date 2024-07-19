import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, selectBudgetList, selectTravellerList } from '@/constants/options';
import { chatSession } from '@/service/AIModel';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';

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

  const OnGenerateTrip = async() => {
    if (formData?.numDays > 5 || !formData?.location || !formData?.numTravellers || !formData?.budget) {
      toast('Please provide all details to generate trip');
      return ;
    }
    const FINAL_PROMPT = AI_PROMPT
    .replace('{location}', formData?.location?.label)
    .replace('{numDays}', formData?.numDays)
    .replace('{numTravellers}', formData?.numTravellers)
    .replace('{budget}', formData?.budget)
    .replace('{numsDays}', formData?.numDays)

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your preferences to get started! 🗺️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Share some basic details, and we'll handle the rest.</p>

      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700'>Where do you want to travel to?</h2>
          <GooglePlacesAutocomplete 
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
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
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                  ${formData?.budget==item.title&&'shadow-lg border-sky-950'}
                  `}
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
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                  ${formData?.numTravellers==item.people&&'shadow-lg border-sky-950'}
                  `}
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
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip