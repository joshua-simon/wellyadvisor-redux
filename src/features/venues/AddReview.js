import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_REVIEW } from "./venueSlice"
import { nanoid } from "@reduxjs/toolkit"


const AddReview = () => {
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
        e.preventDefault()
        if(title && blurb){
            dispatch(ADD_REVIEW({
                id: nanoid(),
                title,
                blurb
            }))
        // setFormDetails({title: '', blurb: ''})
        }
    }


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