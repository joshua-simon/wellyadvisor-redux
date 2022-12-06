import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddReview from "../../components/AddReview";
import Reviews from "../../components/Reviews";
import { fetchAllReviews } from "./reviewSlice";

const Venue = () => {
  const { id } = useParams();

  const venues = useSelector((state) => state.venues);

  const venue = venues.venues.filter((item) => item.id === id);

  const dispatch = useDispatch()

  const venueId = venue[0]?.id

  useEffect(() => {
    dispatch(fetchAllReviews(venueId))
},[venues])

  const content = venue.map((item) => (
    <div className="venue-page-main" key = {item.name}>
      <h2>{item.name}</h2>
      <img src={item.photo} alt = "venue"/>
    </div>
  ));

  return (
    <>
        {content}
        <AddReview id = {id}/>
        <Reviews venue = {venue}/>
    </>
  );

};
 
export default Venue;