import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Itinerary from '../components/Itinerary';
import Footer from '../components/Footer';

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripId && getTripData();
    }, [tripId])

    // get trip info from firebase
    const getTripData = async() => {
        const docRef = doc(db, "AITrip", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log('Document: ', docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log('Document DNE');
            toast("Trip's not found");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        {/* info section */}
            <InfoSection trip={trip}/>
        {/* hotels */}
            <Hotels trip={trip}/>
        {/* itinerary */}
            <Itinerary trip={trip} />
        {/* footer */}
            <Footer trip={trip}/>
    </div>
  )
}

export default ViewTrip