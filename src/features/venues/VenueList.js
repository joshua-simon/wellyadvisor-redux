import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { fetchReviews } from "./venueSlice";

const VenueList = () => {

  const dispatch = useDispatch()

  const venues = useSelector((state) => state.venues);
  const loading = useSelector((state) => state.isLoading)

  const loadingSection  = <div>loading...</div>

  const content = venues.venues.map((venue) => (
    <Link to={`/venue/${venue.id}`} style = {{textDecoration: "none"}} key = {venue.name}>
      <div className="venue-item">
        <h2>{venue.name}</h2>
        <img src={venue.photo} />
      </div>
    </Link>
  ));



  return (
    <div className="venue-list">
      {loading ? loadingSection : content}
    </div>
  );
};

export default VenueList;
