import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchVenues } from "./venueSlice";
import { useSelector,useDispatch } from "react-redux";


const VenueList = () => {

  const dispatch = useDispatch()
  
  


useEffect(() => {
  dispatch(fetchVenues())
},[])


  
  const venues = useSelector((state) => state.venues)

  console.log(venues)

  return <div>
    {
      venues.venues.map(venue => {
        return (
          <h2 key = {venue.name}>{venue.name}</h2>
        )
      })
    }
  </div>;
};

export default VenueList;
