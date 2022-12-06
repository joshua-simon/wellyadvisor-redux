import { configureStore } from "@reduxjs/toolkit";
import venueReducer from '../features/venues/venueSlice'
import reviewReducer from '../features/venues/reviewSlice'

export const store = configureStore({
    reducer:{
       venues: venueReducer,
       reviews: reviewReducer
    }
})