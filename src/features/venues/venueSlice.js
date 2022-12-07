import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const initialState = {
  venues: [],
  isLoading: true,
};

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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVenues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.venues = action.payload;
      })
      .addCase(fetchVenues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVenues.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default venueSlice.reducer;
