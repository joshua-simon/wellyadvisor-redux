import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Venue = () => {
    const { id } = useParams()
  
    const reviews = useSelector((state) => state.reviews.reviews)

    console.log('reviews', reviews)

    return (
        <div>venue</div>
    )
}
 
export default Venue;