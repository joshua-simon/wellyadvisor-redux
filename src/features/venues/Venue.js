import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddReview from "../../components/AddReview";
import Reviews from "../../components/Reviews";

const Venue = () => {
  const { id } = useParams();

  const venues = useSelector((state) => state.venues);

  const venue = venues.venues.filter((item) => item.id === id);
  console.log(venue[0]?.reviews)

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