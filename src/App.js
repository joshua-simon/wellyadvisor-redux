import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Venue from "./features/venues/Venue";
import VenueList from "./features/venues/VenueList";
import AddReview from "./features/venues/AddReview";
import './styles.css'

const App = () => {
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
