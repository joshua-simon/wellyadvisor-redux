import { useState, useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postNewReview } from "../features/venues/reviewSlice"


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

    const handleClick =  (e) => {
      e.preventDefault();
      if (title && blurb) {
        const reviewId = nanoid()
        const review = { id, title, blurb, reviewId };
        dispatch(postNewReview(review));
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