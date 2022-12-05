import { useDispatch } from "react-redux";
import { deleteReview,fetchVenues } from "../features/venues/venueSlice";
import { Link } from "react-router-dom";

const Reviews = ({ venue }) => {

    const dispatch = useDispatch()

    const venueId = venue[0]?.id

    const removeReview = (review) => {
        dispatch(deleteReview({...review, id:venueId}))
    }

    const content = venue[0]?.reviews.map(review => (
        <div className="review" key = {review.reviewId}>
            <h2>{review.title}</h2>
            <h3>{review.blurb}</h3>
            <div>
                <Link to = {`/venue/${venue[0].id}/${review.reviewId}/edit`}><button>Edit</button></Link>
                <button onClick = {() => removeReview(review)}>Delete</button>
            </div>
        </div>
    ))

    return (
        <div className="all-reviews">
            {content}
        </div>
    )
}
 
export default Reviews;