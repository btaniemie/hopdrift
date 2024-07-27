import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import TripCard from './components/TripCard';
import Footer from '@/view-trip/components/Footer';

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  
  useEffect(() => {
    getUsersTrips();
  }, [])

  const getUsersTrips = async() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigation('/');
      return ;
    }

    const q = query(collection(db, 'AITrip'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prevVal => [...prevVal, doc.data()]);
});
  } 

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>

      <div className='grid md:grid-cols-2 gap-5 mt-10'>
        {userTrips.map((past, index) => (
          <TripCard past={past}/>
        ))}
      </div>
        <div className='mt-5'>
        <Footer />
        </div>
    </div>
  )
}

export default MyTrips