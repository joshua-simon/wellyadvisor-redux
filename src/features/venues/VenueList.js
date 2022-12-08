import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const VenueList = () => {
  const [venueType, setVenueType] = useState("");

  const venues = useSelector((state) => state.venues);
  const loading = useSelector((state) => state.isLoading);

  const loadingSection = <div>loading...</div>;

  let content;
  let title;
  let seeAllVenuesButton;

  if (!venueType) {
    title = "All venues";
    seeAllVenuesButton = false;
    content = venues.venues.map((venue) => {
      return (
        <div className="venue-item">
          <Link
            to={`/venue/${venue.id}`}
            style={{ textDecoration: "none" }}
            key={venue.name}
          >
            <img src={venue.photo} />
          </Link>
          <p>
            {venue.name} | {venue.type}
          </p>
        </div>
      );
    });
  } else {
    let filteredVenues = venues.venues.filter(
      (venue) => venue.type === venueType.venueType
    );
    let venuePlural =
      venueType.venueType === "gallery"
        ? "galleries"
        : `${venueType.venueType}s`;
    seeAllVenuesButton = true;
    title = `All ${venuePlural}`;
    content = filteredVenues.map((venue) => {
      return (
        <div className="venue-item">
          <Link
            to={`/venue/${venue.id}`}
            style={{ textDecoration: "none" }}
            key={venue.name}
          >
            <img src={venue.photo} />
          </Link>
          <p>
            {venue.name} | {venue.type}
          </p>
        </div>
      );
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenueType((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectVenue = (
    <div className="select-venue">
      <label>
        Filter venue by type{" "}
        <select name="venueType" onChange={handleChange}>
          <option value="cafe">Cafes</option>
          <option value="bar">Bars</option>
          <option value="theatre">Theatres</option>
          <option value="gallery">Galleries</option>
        </select>
      </label>
    </div>
  );


  return (
    <div>
      <Header />
      {selectVenue}
      <div className="venue-list">
        <h2>
          {title}{" "}
          {seeAllVenuesButton ? (
            <button onClick={() => setVenueType("")}>See all venues</button>
          ) : null}
        </h2>
        {content}
      </div>
      <Footer />
    </div>
  );
};

export default VenueList;
