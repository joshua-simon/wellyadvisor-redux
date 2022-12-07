import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { updateReview } from '../features/venues/reviewSlice';

const EditReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ {title,blurb}, setFormDetails ] = useState({title:"",blurb:""})

    const { id,reviewId } = useParams()
    const reviews = useSelector((store) => store.reviews)
    const prevReview = reviews.reviews.filter((item) => item.id === reviewId )


    const handleSubmit = (e) => {
         e.preventDefault()
        const review = {title,blurb,id,reviewId,prevReview}
        dispatch(updateReview(review))
        navigate(`/venue/${review.id}`)
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
              placeholder={prevReview && prevReview[0]?.title}
              onChange={handleChange}
              name="title"
            />
          </label>
          <label>
            Blurb
            <input
              type="text"
              placeholder={prevReview && prevReview[0]?.blurb}
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