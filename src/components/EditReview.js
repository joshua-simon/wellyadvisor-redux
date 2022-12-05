import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import UseVenue from "../hooks/useVenue";
import { updateReview } from '../features/venues/venueSlice';

const EditReview = () => {
    const dispatch = useDispatch()
    const [ {title,blurb}, setFormDetails ] = useState({title:"",blurb:""})

    const { id,reviewId } = useParams()
    const venue =  UseVenue(id)
    const prevReview = venue[0]?.reviews.filter((review) => review.reviewId === reviewId)

    const handleSubmit = (e) => {
         e.preventDefault()
        const review = {title,blurb,id,reviewId,prevReview}
        dispatch(updateReview(review))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
      <div>
        Edit review
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              placeholder={prevReview && prevReview[0].title}
              onChange={handleChange}
              name="title"
            />
          </label>
          <label>
            Blurb
            <input
              type="text"
              placeholder={prevReview && prevReview[0].blurb}
              onChange={handleChange}
              name="blurb"
            />
          </label>
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
}
 
export default EditReview;