import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchVenues,fetchReviews } from "./features/venues/venueSlice";
import Venue from "./features/venues/Venue";
import VenueList from "./features/venues/VenueList";
import AddReview from "./components/AddReview";
import EditReview from "./components/EditReview";
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
      <Route path = '/venue/:id/:reviewId/edit' element = {<EditReview/>}/>
    </Routes>
   </Router>
  );
}

export default App;
