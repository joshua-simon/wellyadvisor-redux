import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,query,getDocs,doc,updateDoc,arrayUnion, arrayRemove, FieldValue } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const initialState = {
    venues: [],
    isLoading: true
}

export const fetchVenues = createAsyncThunk("venues/fetchVenues", async () => {

    try {
      const venueArray = [];
      const q = query(collection(db, "venues"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        venueArray.push({ id: doc.id, ...doc.data() })
      );
      
     const reviewArray = venueArray?.map(item => item.reviews)
      return venueArray;
    } catch (err) {
      console.log("Error: ", err);
    }
  });

  export const postReview = createAsyncThunk("venues/postReview", async (review) => {
      try {
        const venueRef = doc(db,"venues",review.id)
        await updateDoc(venueRef, {
          reviews: arrayUnion({ 
            title:review.title,
            blurb:review.blurb, 
            reviewId:review.reviewId })
        })
      } catch (err) {
        console.log('Error :', err)
      }
  })

  export const updateReview = createAsyncThunk("venues/updateReview", async (review) => {

      const venueRef = doc(db,"venues", review.id)
      try {
        await updateDoc(venueRef, {
          reviews: arrayRemove(...review.prevReview)
        })
      } catch (err) {
        console.log('Error: ', err)
      }
      try {
        await updateDoc(venueRef, {
          reviews: arrayUnion({ 
            title:review.title,
            blurb:review.blurb, 
            reviewId:review.reviewId })
        })
      } catch (err) {
        console.log('Error :', err)
      }
  })




const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVenues.fulfilled, (state, action) => {
      state.isLoading = false
      state.venues = action.payload;
    })
    .addCase(fetchVenues.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchVenues.rejected, (state) => {
      state.isLoading = false
    })
  },
});

export default venueSlice.reducer



