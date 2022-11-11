import { useState, useEffect } from 'react'
import { collection,query,getDocs } from "firebase/firestore";
import { db } from './firebaseConfig'

export const GetVenues = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenueList = async () => {
      const venueArray = [];
      const q = query(collection(db, "venues"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((item) => venueArray.push(item.data()));
      setVenues(venueArray);
    };
    getVenueList();
  }, []);

  return venues;
};