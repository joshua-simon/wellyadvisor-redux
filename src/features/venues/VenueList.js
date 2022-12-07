import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const VenueList = () => {

  const venues = useSelector((state) => state.venues);
  const loading = useSelector((state) => state.isLoading)

  const loadingSection  = <div>loading...</div>

  const content = venues.venues.map((venue) => (
    <div className="venue-item">
        <Link to={`/venue/${venue.id}`} style = {{textDecoration: "none"}} key = {venue.name}>
          <img src={venue.photo} />
        </Link>
        <p>{venue.name}</p>
      </div>
  ));


  return (
    <div>
    <Header/>
      <div className="venue-list">
        {loading ? loadingSection : content}
      </div>
    <Footer/>
    </div>
  );
};

export default VenueList;
