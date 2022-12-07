import { useState, useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postNewReview } from "../features/venues/reviewSlice"


const AddReview = ({ id }) => {

    const [ {title,blurb}, setFormDetails ] = useState({title:'', blurb: ''})
    const [ rating, setRating ] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails(prevState => ({  
            ...prevState,
            [name]: value
        }))
    }

    const handleClick =  (e) => {
      e.preventDefault();
      if (title && blurb) {
        const reviewId = nanoid()
        const review = { id, title, blurb, reviewId };
        dispatch(postNewReview(review));
      }
    };

    const handleStarClick = (num) => {
        setRating(num)
    }

    const  stars = [ '☆' , '☆' , '☆' , '☆' , '☆' ]

    const starList = stars.map((star,i) => (
            <icon key = {i} className = 'star' onClick = {()=> handleStarClick(i+1)}>{star}</icon>
    ))


    return(
        <div className="add-review-container">
         <h2>Add review</h2>
        <div className="review-form-container">
            <form>
                <input
                type = 'text'
                name = 'title'
                onChange={handleChange}
                placeholder = "Enter review title"
                />
                <input
                type = 'text'
                name = 'blurb'
                onChange={handleChange}
                placeholder = "Enter review"
                />
                <div className = 'star-container'>
                <p>{starList}</p>
                <p>Rating: {rating}</p>
                </div>
                <button type = "button" onClick = {handleClick}>Submit</button>
            </form>
        </div>
        </div>
    )
}
 
export default AddReview;