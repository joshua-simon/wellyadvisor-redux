import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddReview from "../../components/AddReview";
import Reviews from "../../components/Reviews";
import { fetchAllReviews } from "./reviewSlice";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Venue = () => {
  const { id } = useParams();

  const venues = useSelector((state) => state.venues);

  const venue = venues.venues.filter((item) => item.id === id);

  const dispatch = useDispatch();

  const venueId = venue[0]?.id;

  useEffect(() => {
    dispatch(fetchAllReviews(venueId));
  }, [venues]);

  const content = venue.map((item) => (
    <div className="venue-page-item" key={item.name}>
      <h1>{item.name}</h1>
      <img src={item.photo} alt="venue" />
    </div>
  ));

  return (
    <>
      <Header />
      <div className="venue-main">
        {content}
        <AddReview id={id} />
        <Reviews venue={venue} />
      </div>
      <Footer />
    </>
  );
};

export default Venue;
