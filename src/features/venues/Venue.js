import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddReview from "../../components/AddReview";

const Venue = () => {
  const { id } = useParams();

  const venues = useSelector((state) => state.venues);

  const venue = venues.venues.filter((item) => item.id == id);

  const content = venue.map((item) => (
    <div className="venue-page-main">
      <h2>{item.name}</h2>
      <img src={item.photo} />
    </div>
  ));

  return (
    <>
        {content}
        <AddReview id = {id}/>
    </>
  );
};
 
export default Venue;