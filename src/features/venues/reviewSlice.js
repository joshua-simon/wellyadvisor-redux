import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const initialState = {
  reviews: [],
};

export const postNewReview = createAsyncThunk(
  "venues/postReview",
  async (review) => {
    try {
      const docRef = doc(db, "venues", review.id);
      const colRef = collection(docRef, "reviews");
      addDoc(colRef, {
        title: review.title,
        blurb: review.blurb,
        rating: review.rating,
      });
    } catch (err) {
      console.log("Error :", err);
    }
    return { title: review.title, blurb: review.blurb, rating: review.rating };
  }
);

export const fetchAllReviews = createAsyncThunk(
  "venues/fetchAllReviews",
  async (id) => {
    try {
      const reviewArray = [];
      const q = query(collection(db, `venues/${id}/reviews`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        reviewArray.push({ id: doc.id, ...doc.data() })
      );
      return reviewArray;
    } catch (err) {
      console.log("Error: ", err);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "venues/deleteReview",
  async (review) => {
    try {
      await deleteDoc(doc(db, `venues/${review.venueId}/reviews`, review.id));
    } catch (err) {
      console.log("Error: ", err);
    }

    return review;
  }
);

export const updateReview = createAsyncThunk(
  "venues/updateReview",
  async (review) => {
    console.log(review);

    try {
      await deleteDoc(doc(db, `venues/${review.id}/reviews`, review.reviewId));
    } catch (err) {
      console.log("Error: ", err);
    }
    try {
      const docRef = doc(db, "venues", review.id);
      const colRef = collection(docRef, "reviews");
      addDoc(colRef, {
        title: review.title,
        blurb: review.blurb,
        rating: review.rating
      });
    } catch (err) {
      console.log("Error :", err);
    }
    return {
      title: review.title,
      blurb: review.blurb,
      id: review.id,
      reviewId: review.reviewId,
    };
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchAllReviews.pending, (state) => {})
      .addCase(fetchAllReviews.rejected, (state) => {})
      .addCase(postNewReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      // .addCase(updateReview.fulfilled, (state,action) => {
      //   state.reviews = action.payload
      // })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((item) => {
          return item.id !== action.payload.id;
        });
      });
  },
});

export default reviewsSlice.reducer;
