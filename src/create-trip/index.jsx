import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, selectBudgetList, selectTravellerList } from '@/constants/options';
import { chatSession } from '@/service/AIModel';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from '@/view-trip/components/Footer';


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const OnGenerateTrip = async() => {
    try {
      
        const user = localStorage.getItem('user');
    
        if (!user) {
          setOpenDialog(true);
          return ;
        }
    
        if (!formData?.numDays || !formData?.location || !formData?.numTravellers || !formData?.budget) {
          toast('Please provide all details to generate trip');
          return ;
        }
    
        if (formData?.numDays < 0 || formData?.numDays > 365) {
          toast('Please provide a valid number of days (0-365)')
          return ;
        }
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', formData?.location?.label)
        .replace('{numDays}', formData?.numDays)
        .replace('{numTravellers}', formData?.numTravellers)
        .replace('{budget}', formData?.budget)
        .replace('{numsDays}', formData?.numDays)
    
        // console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log('---',result?.response?.text());
        setLoading(false);
        saveAiTrip(result?.response?.text());
    } catch (error) {
      console.log(error);
      
    }
  }

  const saveAiTrip = async(TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrip", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate('/view-trip/' + docId)
  }

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    })
  }

   // className='sm:px-10 md:px-32 lg:px-56 xl:px-72 xl:ml-28 mt-10'
   // className='flex flex-col items-center w-screen gap-9'
  return (
    <div className='flex flex-col items-center w-screen mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your preferences to get started! 🗺️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Share some basic details, and we'll handle the rest.</p>

      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700 ml-5'>Where do you want to travel to?</h2>
          <GooglePlacesAutocomplete 
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {setPlace(v); handleInputChange('location', v)}
            }}
          />   
        </div >
        
        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700 ml-5'>How many days do you plan on staying?</h2>
          <Input placeholder={'Ex: 5'} type="number" onChange = {(e) => handleInputChange('numDays', e.target.value)} />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium text-sky-700 ml-5'>What type of budget are you planning for your trip?</h2>
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
          <h2 className='text-xl my-3 font-medium text-sky-700 ml-3'>Who will you be traveling with?</h2>
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
        <Button onClick={OnGenerateTrip} disabled={loading}>
          {loading?
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>: 'Generate Trip'
          }
        </Button>
      </div>

      <Dialog open={openDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
          <div className='flex'>
            <img src='/logo.svg' className='w-10'/>
            <div className='font-bold text-sky-700 content-center text-2xl ml-1'>hopdrift</div>
        </div>
        <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
        <p>Robust and secure authentication with Google Auth</p>
        <Button className="w-full mt-5" onClick={login} > 
          <FcGoogle className='mr-1'/> Sign in with Google
        </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    
    <h2 className='text-center text-gray-500 mb-10'>🛠️ Built by Minh Le</h2>
    </div>
  )
}

export default CreateTrip