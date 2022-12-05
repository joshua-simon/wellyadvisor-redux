import { useSelector } from "react-redux";

export const UseVenue = (venueId) => {
    const venues = useSelector((store) => store.venues)
    const venue = venues.venues.filter((item) => item.id === venueId);
    return venue
}
 
export default UseVenue;