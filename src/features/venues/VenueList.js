import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchVenues } from "./venueSlice";
import { useSelector,useDispatch } from "react-redux";


const VenueList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVenues());
  }, [dispatch]);

  const venues = useSelector((state) => state.venues);

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
      {content}
    </div>
  );
};

export default VenueList;
