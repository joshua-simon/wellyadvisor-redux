import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { updateReview } from '../features/venues/reviewSlice';
import Header from '../components/Header'
import Footer from '../components/Footer'

const EditReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ {title,blurb}, setFormDetails ] = useState({title:"",blurb:""})
    const [rating, setRating] = useState("");
    const [ err,setErr ] = useState("")

    const { id,reviewId } = useParams()
    const reviews = useSelector((store) => store.reviews)
    const prevReview = reviews.reviews.filter((item) => item.id === reviewId )


    const handleSubmit = (e) => {
         e.preventDefault()
      if (title && blurb && rating ){
        const review = {title,blurb,id,reviewId,rating}
        dispatch(updateReview(review))
        navigate(`/venue/${review.id}`)
      } else {
        setErr('Please fill out all fields')
      }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleStarClick = (num) => {
      setRating(num);
    };


    const stars = ["☆", "☆", "☆", "☆", "☆"];

    const starList = stars.map((star, i) => (
      <p key={i} className="star" onClick={() => handleStarClick(i + 1)}>
        {star}
      </p>
    ));

    console.log(rating)

    return (
      <>
      <Header/>
      <div className='edit-review-container'>
        <h2>Edit review</h2>
        <form onSubmit={handleSubmit} className = 'edit-review-form'>
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
          <div className='star-rating-container'>
            <p>Review: {rating}</p>
            <p className='star-rating-edit'>{starList}</p>
          </div>
          <button type="Submit">Submit</button>
        </form>
      </div>
      {err ? <p className='error'>{err}</p> : null}
      <Footer/>
      </>
    );
}
 
export default EditReview;