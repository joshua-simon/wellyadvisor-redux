import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,query,getDocs,doc,updateDoc,arrayUnion, arrayRemove, FieldValue } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const initialState = {
    venues: []
}

export const fetchVenues = createAsyncThunk("venues/fetchVenues", async () => {
    try {
      const venueArray = [];
      const q = query(collection(db, "venues"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        venueArray.push({ id: doc.id, ...doc.data() })
      );
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

export const deleteReview = createAsyncThunk("venues/deleteReview", async (review) => {

  const newReview = {blurb:review.blurb, title: review.title, reviewId: review.reviewId}

  try {
    const venueRef = doc(db,"venues",review.id)
    await updateDoc(venueRef, {
      reviews: arrayRemove(newReview)
    })
  } catch (err) {
    console.log('Error: ', err)
  }
})




const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVenues.fulfilled, (state, action) => {
      state.venues = action.payload;
    })
  },
});

export default venueSlice.reducer