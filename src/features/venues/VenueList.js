import { GetVenues } from "../../api";

const VenueList = () => {
    const data = GetVenues()

    const venues = data.map((venue,i) => (
        <div key = {i} className= "venue-item">
            <img src = {venue.photo}/>
            <h2>{venue.name}</h2>
        </div>
    ))

    return(
        <div className = "venue-list">{venues}</div>
    )
}
 
export default VenueList;