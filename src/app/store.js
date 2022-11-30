import { configureStore } from "@reduxjs/toolkit";
import venueReducer from '../features/venues/venueSlice'

export const store = configureStore({
    reducer:{
       venues: venueReducer
    }
})