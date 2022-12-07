import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReview } from "../features/venues/reviewSlice";

const Reviews = ({ venue }) => {

    const venueId = venue[0]?.id

    const dispatch = useDispatch()

    const removeReview = (review) => {
       dispatch(deleteReview({...review,venueId}))
    }

    const reviews = useSelector((store) => store.reviews)


    const content = reviews && reviews?.reviews.map(review => (
        <div key ={review.title} className='review'>
            <h3>{review.title}</h3>
            <p>{review.blurb}</p>
            <div className="review-buttons">
                <button onClick = {() => removeReview(review)}>Delete</button>
                <Link to = {`/venue/${venueId}/${review.id}/edit`}><button>Edit</button></Link>
            </div>
        </div>
    ))

    return (
        <div className="reviews-container">   
            <h2>Reviews</h2>
            {content}
        </div>
    )
}
 
export default Reviews;