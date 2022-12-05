import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVenues } from "./features/venues/venueSlice";
import Venue from "./features/venues/Venue";
import VenueList from "./features/venues/VenueList";
import AddReview from "./components/AddReview";
import './styles.css'



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVenues())
  },[])

  return (
   <Router>
    <Routes>
      <Route path = '/' element = {<VenueList/>}/>
      <Route path = '/add-review' element = {<AddReview/>}/>
      <Route path = '/venue/:id' element = {<Venue/>}/>
    </Routes>
   </Router>
  );
}

export default App;
