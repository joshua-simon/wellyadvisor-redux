import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllReviews } from "../features/venues/reviewSlice";
import { deleteReview } from "../features/venues/reviewSlice";

const Reviews = ({ venue }) => {

    const venueId = venue[0]?.id

    const dispatch = useDispatch()


    const removeReview = (review) => {
       dispatch(deleteReview({...review,venueId}))
    }

    const reviews = useSelector((store) => store.reviews)

    const content = reviews && reviews?.reviews.map(review => (
        <div>
            <h1>{review.title}</h1>
            <h2>{review.blurb}</h2>
            <button onClick = {() => removeReview(review)}>Delete</button>
        </div>
    ))

    return (
        <div className="all-reviews">
            {content}
        </div>
    )
}
 
export default Reviews;