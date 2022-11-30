import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postReview } from "../features/venues/venueSlice"


const AddReview = ({ id }) => {
    const [ {title,blurb}, setFormDetails ] = useState({title:'', blurb: ''})

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails(prevState => ({  
            ...prevState,
            [name]: value
        }))
    }

    const handleClick = (e) => {
      e.preventDefault();
      if (title && blurb) {
        const reviewId = nanoid()
        const review = { id, title, blurb, reviewId };
        dispatch(postReview(review));
      }
    };


    return(
        <div>
            <form>
                <input
                type = 'text'
                name = 'title'
                onChange={handleChange}
                />
                <input
                type = 'text'
                name = 'blurb'
                onChange={handleChange}
                />
                <button type = "button" onClick = {handleClick}>Submit</button>
            </form>
        </div>
    )
}
 
export default AddReview;