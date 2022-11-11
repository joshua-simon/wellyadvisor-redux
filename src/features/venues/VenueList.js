import { GetVenues } from "../../api";

const VenueList = () => {
    const data = GetVenues()

    const venues = data.map((venue,i) => (
        <div>
            <h2>{venue.name}</h2>
            <img src = {venue.photo}/>
        </div>
    ))

    return(
        <div>{venues}</div>
    )
}
 
export default VenueList;