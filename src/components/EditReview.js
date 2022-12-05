import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const EditReview = () => {

    const { id,reviewId } = useParams()
    const venues = useSelector((store) => store.venues)
    const venue = venues.venues.filter((item) => item.id === id);
    //MAKE A GET VENUE HOOK
    const review = venue[0].reviews.filter((review) => review.reviewId === reviewId)

    return (
        <h2>Edit review</h2>
    )
}
 
export default EditReview;