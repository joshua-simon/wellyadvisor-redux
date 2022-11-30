import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,query,getDocs } from "firebase/firestore";
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

const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    ADD_REVIEW: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchVenues.fulfilled, (state, action) => {
      state.venues = action.payload;
    });
  },
});



export const { ADD_REVIEW } = venueSlice.actions

export default venueSlice.reducer